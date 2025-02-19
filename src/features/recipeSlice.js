import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import api from "../api/api";

const transformData = (meals) =>{ // tranform the api result to desired format
    const modifiedMeal = meals.map((item) => {
        const modifiedItem = {
            id : item.idMeal,
            mealName : item.strMeal,
            thumbnailURL : item.strMealThumb,
         }
         return modifiedItem
    })
    
    return modifiedMeal
}

// this function get the result based on given request
export const fetchRecipes = createAsyncThunk("recipe/fetchRecipes" , async (searchTerm , {rejectWithValue}) => {
    try {
        const response = await api.get(searchTerm)
        return transformData(response.data.meals)
    } catch (error) {
        return rejectWithValue(error.message)
    }
   
})

// function get the category list
export const fetchCategories = createAsyncThunk("recipe/fetchCategories" ,async ( _ , {rejectWithValue}) => {
    try{
        const response = await api.get("/categories.php")
        return response.data
    }catch(e){
        return rejectWithValue(e.message)
    }
})



const initialState = {
    meals : [],
    categories : [],
    filteredMeals : [],
    status: 'idle',
    error : null
}


const recipeSlice = createSlice({
    name : 'recipe',
    initialState,
    reducers : {
      updateFilteredMeals : (state , action) => { // update the data by search value 
        state.filteredMeals = state.meals.filter(item => item.mealName.toLowerCase().includes(action.payload.toLowerCase()) )
      }
    },
    extraReducers(builder){ // handle the 3 state of api call
        builder
            .addCase(fetchRecipes.pending , (state) => {
                state.status = "loading"
            })
            .addCase(fetchRecipes.fulfilled , (state , action) => {
                state.status = "success"
                state.meals = action.payload
            })
            .addCase(fetchRecipes.rejected , (state , action) => {
                state.status = "failed"
                state.error = action.payload
            })
            .addCase(fetchCategories.fulfilled , (state , action) => {
                state.categories = action.payload.categories
            })
    }

})

export const {updateFilteredMeals} = recipeSlice.actions

export default recipeSlice.reducer