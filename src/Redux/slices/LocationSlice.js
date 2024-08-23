import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchLocations = createAsyncThunk(
    'LocationPage/fetchCharacters',
    async( {page, locationName, locationType, locationDimension} ,  {rejectWithValue}) => {
        try{
            const api = `https://rickandmortyapi.com/api/location/?page=${page}&name=${locationName}&type=${locationType}&dimension=${locationDimension}`;
            const responce = await axios.get(api);

            if(responce.data.results.length === 0){
                return  rejectWithValue('No Locations found');
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

export const LocationPageSlice = createSlice({
  name: 'LocationPage',
  initialState,
  reducers: {},
  extraReducers : (buider) => {
    buider.addCase(fetchLocations.pending, (state) => {
        state.status = 'loading';
    });
    buider.addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = 'resolve';
        if(action.meta.arg.page === 1){
            state.fetchData = action.payload
        }else{
            state.fetchData.info = action.payload.info;
            state.fetchData.results = [...state.fetchData.results, ...action.payload.results];
        }
    });
    buider.addCase(fetchLocations.rejected, (state, action) => {
        state.status = 'reject';
        state.error = action.payload;
    });
  }
})


export default LocationPageSlice.reducer