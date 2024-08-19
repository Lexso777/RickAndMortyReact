import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchCharacters = createAsyncThunk(
    'CharactersPage/fetchCharacters',
    async() => {
        try{
            const api = `https://rickandmortyapi.com/api/character`;
            const responce = await axios.get(api);
            return responce.data.results;
        }catch(err){
            console.log(err)
        }
    }
)


const initialState = {
  characters : null,
  status : 'idle',
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
        state.characters = action.payload;
    });
    buider.addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'reject';
    });
    
  }

})


// export const {} = CharactersPageSlice.actions

export default CharactersPageSlice.reducer