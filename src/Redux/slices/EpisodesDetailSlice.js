import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchEpisodesInfo = createAsyncThunk(
    'fetchEpisodesInfo/EpisodesDetailSlice',
    async({id}, {rejectWithValue}) => {
        try{
            const api = `https://rickandmortyapi.com/api/episode/${id}`
            const responce = await axios.get(api);


            const residentsPromises = responce.data.characters.map((url) => axios.get(url));
            const residentsRes = await Promise.all(residentsPromises);     

             return{
                episode: responce.data,
                characters: residentsRes.map(res => res.data)
             }
        }catch(err){
            return rejectWithValue(err.message)
        }
    }
)

const initialState = {
    episode : null,
    characters : [],
    status : 'idle',
    error : null,
}

const EpisodesDetailSlice = createSlice({
    name : 'EpisodesDetailPage',
    initialState,
    reducers : {},
    extraReducers : (buider) => {
        buider.addCase(fetchEpisodesInfo.pending, (state) => {
            state.status = 'loading';
        });
        buider.addCase(fetchEpisodesInfo.fulfilled, (state, action) => {
            state.status = 'resolve';
            state.episode = action.payload.episode;
            state.characters = action.payload.characters;

        });
        buider.addCase(fetchEpisodesInfo.rejected, (state, action) => {
            state.status = 'reject';
            state.error = action.payload;
        });
      }
})


export default EpisodesDetailSlice.reducer