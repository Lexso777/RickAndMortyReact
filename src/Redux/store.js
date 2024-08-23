import { configureStore } from '@reduxjs/toolkit'
import  CharactersPageSlice  from './slices/CharactersSlice'
import filtersSlice from './slices/filtersSlice';
import CharacterDetailSlice from './slices/CharacterDetailSlice';
import  LocationPageSlice  from './slices/LocationSlice';
import LocationDetailSlice from './slices/LocationDetailSlice';


export const store = configureStore({
    reducer : {
        CharactersPageSlice,
        filtersSlice, 
        CharacterDetailSlice,
        LocationPageSlice, 
        LocationDetailSlice
    }
})


window.store = store;