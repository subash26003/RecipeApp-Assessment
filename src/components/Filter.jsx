
import { FaSearch } from "react-icons/fa";
import { useSelector , useDispatch} from "react-redux";
import { useState , useEffect } from "react";
import { fetchRecipes ,fetchCategories } from "../features/recipeSlice";
import { updateFilteredMeals } from "../features/recipeSlice";

const Filter = () => {

    const [searchTerm , setSearchTerm] = useState('')
    const [categoryValue , setCategoryValue] = useState('Vegetarian')
    const {categories , status} = useSelector((state) => state.recipe)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(fetchRecipes(`/filter.php?c=${categoryValue}`))  // Fetch meals Based on category
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoryValue])

    useEffect(() => {
        dispatch(fetchCategories()) // fetch Category list
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleFilterByName = (name) =>{
        dispatch(updateFilteredMeals(name)) // filter based on search value
    }
      
    useEffect(() => {
        handleFilterByName(searchTerm)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchTerm , status])
    

    return (
    <div className='filter-container flex justify-center gap-5 p-3'>
            {/* Input Element to filter the Meals based on search value and Select element to choose different category */}
            <div className='search-card relative w-32 md:w-40 lg:w-60'>
                <FaSearch className='text-[Coral] absolute left-2 top-2 md:left-3 md:top-3 font-black'  size={16} />
                <input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Enter Keyword' className='rounded-2xl text-sm md:text-lg outline outline-gray-500 border border-gray-200 w-full h-9 md:h-10  pl-7  md:pl-10'/>
            </div>
            <div className='search-card relative w-32 md:w-40 lg:w-60'>
               <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)} className='rounded-2xl text-sm md:text-lg outline outline-gray-500 border border-gray-200 w-full h-9 md:h-10 hover:cursor-pointer'>
                    {
                        categories && categories.map((item , index) => (
                            <option value={item.strCategory} key={index}>{item.strCategory.toUpperCase()}</option>
                        ))
                    }
               </select>
            </div>
           
        </div>
  )
}

export default Filter