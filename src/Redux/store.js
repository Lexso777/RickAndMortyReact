import { configureStore } from '@reduxjs/toolkit'
import  CharactersPageSlice  from './slices/CharactersSlice'
import filtersSlice from './slices/filtersSlice';

export const store = configureStore({
    reducer : {
        CharactersPageSlice, filtersSlice
    }
})


window.store = store;