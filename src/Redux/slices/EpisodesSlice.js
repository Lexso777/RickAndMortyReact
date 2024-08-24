import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchEpisodes = createAsyncThunk(
    'EpisodesPage/fetchEpisodes',
    async( { page, episodesName } ,  {rejectWithValue}) => {
        try{
            const api = `https://rickandmortyapi.com/api/episode?page=${page}`;
            const responce = await axios.get(api);

            if(responce.data.results.length === 0){
                return  rejectWithValue('No Episodes found');
            } 

            return responce.data

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

export const EpisodesPageSlice = createSlice({
  name: 'EpisodesPage',
  initialState,
  reducers: {},
  extraReducers : (buider) => {
    buider.addCase(fetchEpisodes.pending, (state) => {
        state.status = 'loading';
    });
    buider.addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = 'resolve';
        if(action.meta.arg.page === 1){
            state.fetchData = action.payload
        }else{
            state.fetchData.info = action.payload.info;
            state.fetchData.results = [...state.fetchData.results, ...action.payload.results];
        }
    });
    buider.addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
    });
  }
})

export default EpisodesPageSlice.reducer