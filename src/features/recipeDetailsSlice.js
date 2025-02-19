import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

const  modifyRecipeData = (meals) => { // this function modify the data to desired format
        const ingredients= []
        for(let i = 1 ; i < Object.keys(meals).length ; i++){
            if(!(meals[`strIngredient${i}`] === "")){ // to avoid the response's empty ingredient value
                
                ingredients.push({ 
                    name : meals[`strIngredient${i}`],
                    measure : meals[`strMeasure${i}`]
                })
            }else{
                break
            }
        }
        const modifiedmeals = {
            id : meals.idMeal,
            mealName : meals.strMeal,
            area : meals.strArea,
            category : meals.strCategory,
            instruction : meals.strInstructions,
            thumbnailURL : meals.strMealThumb,
            youtubeURL : meals.strYoutube,
            ingredients,
         }
         return modifiedmeals
}

export const fetchRecipeDetails = createAsyncThunk("recipeDetails/fetchRecipeDetails" , async ( requestText , {rejectWithValue}) => {
    try {
        const response = await api.get(requestText)
        return modifyRecipeData(response.data.meals[0])
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState = {
    recipeDetails : {},
    status : "idle",
    error : null
}

const recipeDetailsSlice = createSlice({
    name : 'recipeDetails',
    initialState,
    reducers : {
    },
    extraReducers(builder){ // exatrabuilder to handle 3 state of the api call
        builder
            .addCase(fetchRecipeDetails.pending , (state) => {
                state.status = "loading"
            })
            .addCase(fetchRecipeDetails.fulfilled , (state , action) => {
                state.recipeDetails = action.payload
                state.status = 'success'
            })
            .addCase(fetchRecipeDetails.rejected , (state , action) =>{
                state.status = "failed"
                state.error = action.payload
            })
    }
})


export default recipeDetailsSlice.reducer