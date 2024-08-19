import { configureStore } from '@reduxjs/toolkit'
import  CharactersPageSlice  from './slices/CharactersSlice'

export const store = configureStore({
    reducer : {
        CharactersPageSlice, 
    }
})


window.store = store;