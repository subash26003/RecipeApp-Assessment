import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favMeals : []
}

const favouriteSlice = createSlice({
    name : 'favourites',
    initialState,
    reducers:{
        addFav : (state , action) => { // to add the Meals to fav list 
            const present = state.favMeals.some(item => item.mealName === action.payload.mealName)
            if(present) return
            return {
                ...state , favMeals : [...state.favMeals , action.payload]
            }
        },
        removeFav : (state , action) => {
            state.favMeals = state.favMeals.filter(item => item.mealName !== action.payload.mealName)
        }
    }
}) 

export const { addFav , removeFav} = favouriteSlice.actions

export default favouriteSlice.reducer