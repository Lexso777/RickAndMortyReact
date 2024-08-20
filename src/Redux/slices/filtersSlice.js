import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    characterName : '',
    characterGender : '',
    characterStatus : '',
    characterSpecies : '',
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
        }
    }
})

export const {getCharacterName, getCharacterStatus, getCharacterGender, getCharacterSpecies} = filtersSlice.actions;


export default filtersSlice.reducer