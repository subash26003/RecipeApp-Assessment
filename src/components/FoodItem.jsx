
import { Link } from 'react-router';
import {addFav , removeFav } from '../features/favouriteSlice'
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


const FoodItem = ({ food , hideFavButton}) => {
  const dispatch = useDispatch()

  const handleFavouriteBtn = () => {
    if(hideFavButton){
      dispatch(removeFav(food))
      toast.info("Removed")
    }else{
      dispatch(addFav(food))
      toast.success("Added to Favoutite") // Indicate User After adding into Favourite List
    }
    
  }

  return (
    <div className='flex flex-col  shadow-xl rounded-xl  hover:shadow-2xl'>
        <div className='w-full overflow-hidden rounded-t-xl '>
            <img className='w-full h-auto hover:scale-125 duration-200' src={food.thumbnailURL} alt={food.mealName} />
        </div>
        <div className="flex justify-between items-center gap-1 mx-2 my-1">
            <h1 className='font-black text-sm md:text-xl text-zinc-600'>{food.mealName.length < 15 ? food.mealName : food.mealName.slice(0, 16) + "..."}</h1> {/** Name is bounded to 15 characters To prevent Card resize*/}
        </div>
        <div className='flex justify-between items-center mx-2 my-1 mb-3 '>
          <Link to={`/recipe/${food.id}`}  ><button className='bg-[Coral]  font-semibold text-xs  w-[4rem]  h-7 md:w-28 md:h-10  md:text-sm rounded-3xl text-white hover:cursor-pointer hover:shadow shadow-[Coral]'>Recipe</button></Link>
          {<button onClick={handleFavouriteBtn} className='bg-rose-400 font-semibold text-xs  w-[4rem] h-7 md:w-28 md:h-10 md:text-sm rounded-3xl text-white hover:cursor-pointer hover:shadow shadow-rose-400'>{hideFavButton ? 'Remove' : 'Favourite'}</button>}
          {/* Hide Button in Favourite Page */}
        </div>

    </div>
  )
}

FoodItem.propTypes = {
  food : PropTypes.node,
  hideFavButton : PropTypes.node
}

export default FoodItem

