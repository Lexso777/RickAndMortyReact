import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchCharacters = createAsyncThunk(
    'CharactersPage/fetchCharacters',
    async({page , characterName, characterStatus, characterGender, characterSpecies}, {rejectWithValue}) => {
        try{
            const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${characterName}&status=${characterStatus}&gender=${characterGender}&species=${characterSpecies}`;
            const responce = await axios.get(api);

            if(responce.data.results.length === 0){
                return  rejectWithValue('No characters found');
            } 

            return responce.data;

        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)


const initialState = {
  fetchData : {info : {}, results : []},
  status : 'idle',
  error : null,
}

export const CharactersPageSlice = createSlice({
  name: 'CharactersPage',
  initialState,
  reducers: {},
  extraReducers : (buider) => {
    buider.addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
    });
    buider.addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'resolve';
        if(action.meta.arg.page === 1){
            state.fetchData = action.payload
        }else{
            state.fetchData.info = action.payload.info;
            state.fetchData.results = [...state.fetchData.results, ...action.payload.results];
        }
    });
    buider.addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
    });
  }
})


// export const {} = CharactersPageSlice.actions

export default CharactersPageSlice.reducer