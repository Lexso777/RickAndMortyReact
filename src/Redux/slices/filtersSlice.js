import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    characterName : '',
    characterGender : '',
    characterStatus : '',
    characterSpecies : '',

    locationName : '',
    locationType : '',
    locationDimension : '',

}

export const filtersSlice = createSlice({
    name : 'filters',
    initialState,
    reducers : {
        getCharacterName(state, action){
            state.characterName = action.payload;
        },
        getCharacterStatus(state, action){
            state.characterStatus = action.payload;
        },
        getCharacterGender(state, action){
            state.characterGender = action.payload;
        },
        getCharacterSpecies(state, action){
            state.characterSpecies = action.payload;
        },
        getLocationName(state, action){
            state.locationName = action.payload;
        },
        getLocationType(state, action){
            state.locationType = action.payload;
        },
        getLocationDimension(state, action){
            state.locationDimension = action.payload;
        }
    }
})

export const {
    getCharacterName, 
    getCharacterStatus, 
    getCharacterGender, 
    getCharacterSpecies, 
    getLocationName, 
    getLocationType, 
    getLocationDimension
} = filtersSlice.actions;


export default filtersSlice.reducer