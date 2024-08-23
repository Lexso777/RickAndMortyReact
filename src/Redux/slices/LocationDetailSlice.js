import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchLocationInfo = createAsyncThunk(
    'fetchLocationInfo/LocationDetailSlice',
    async({id}, {rejectWithValue}) => {
        try{
            const api = `https://rickandmortyapi.com/api/location/${id}`
            const responce = await axios.get(api);

            const residentsPromises = responce.data.residents.map((url) => axios.get(url));
            const residentsRes = await Promise.all(residentsPromises);     

             return{
                location: responce.data,
                residents: residentsRes.map(res => res.data)
             }
        }catch(err){
            return rejectWithValue(err.message)
        }
    }
)

const initialState = {
    location : null,
    residents : [],
    status : 'idle',
    error : null,
}

const LocationDetailSlice = createSlice({
    name : 'LocationDetailPage',
    initialState,
    reducers : {},
    extraReducers : (buider) => {
        buider.addCase(fetchLocationInfo.pending, (state) => {
            state.status = 'loading';
        });
        buider.addCase(fetchLocationInfo.fulfilled, (state, action) => {
            state.status = 'resolve';
            state.location = action.payload.location;
            state.residents = action.payload.residents;

        });
        buider.addCase(fetchLocationInfo.rejected, (state, action) => {
            state.status = 'reject';
            state.error = action.payload;
        });
      }
})


export default LocationDetailSlice.reducer