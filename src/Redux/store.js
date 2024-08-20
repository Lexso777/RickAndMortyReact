import { configureStore } from '@reduxjs/toolkit'
import  CharactersPageSlice  from './slices/CharactersSlice'
import filtersSlice from './slices/filtersSlice';
import CharacterDetailSlice from './slices/CharacterDetailSlice';


export const store = configureStore({
    reducer : {
        CharactersPageSlice, filtersSlice, CharacterDetailSlice
    }
})


window.store = store;