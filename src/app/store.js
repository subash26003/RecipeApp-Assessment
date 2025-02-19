import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from '../features/recipeSlice'
import favouriteReducer from '../features/favouriteSlice'
import recipeDetailsReducer from '../features/recipeDetailsSlice'


export const store = configureStore({
    reducer : {
        recipe : recipeReducer,
        favourites : favouriteReducer,
        recipeDetails : recipeDetailsReducer,
    }
})