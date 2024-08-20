import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchCharacterInfo = createAsyncThunk(
    'fetchCharacterInfo/CharacterDetailPage',
    async({id}, {rejectWithValue}) => {
        try{
            const api = `https://rickandmortyapi.com/api/character/${id}`
            const responce = await axios.get(api);

            const episodePromises = responce.data.episode.slice(0, 4).map((url) => axios.get(url));

            const episodeRes = await Promise.all(episodePromises);

            let locId = null;

            if(responce.data.location.url !== ""){
                locId = await axios.get(responce.data.location.url).then(res => res.data.id);
             }            

             return{
                character: responce.data,
                episodes: episodeRes.map((res) => res.data),
                locationId : locId,
             }
        }catch(err){
            return rejectWithValue(err.message)
        }
    }
)

const initialState = {
    character : null,
    episodes : [],
    locationId : null,
    status : 'idle',
    error : null,
}

const CharacterDetailSlice = createSlice({
    name : 'CharacterDetailPage',
    initialState,
    reducers : {},
    extraReducers : (buider) => {
        buider.addCase(fetchCharacterInfo.pending, (state) => {
            state.status = 'loading';
        });
        buider.addCase(fetchCharacterInfo.fulfilled, (state, action) => {
            state.status = 'resolve';
            state.character = action.payload.character;
            state.episodes = action.payload.episodes;
            state.locationId = action.payload.locationId;
        });
        buider.addCase(fetchCharacterInfo.rejected, (state, action) => {
            state.status = 'reject';
            state.error = action.payload;
        });
      }
})


export default CharacterDetailSlice.reducer