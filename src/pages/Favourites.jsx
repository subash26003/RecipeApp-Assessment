import { useSelector } from "react-redux"
import FoodItem from "../components/FoodItem"

const Favourites = () => {
  const {favMeals} = useSelector((state) => state.favourites)

  return (
    <div className="p-5">
      <h1 className="text-3xl text-[Coral] font-[Roboto] font-black text-center">Favourite Recipes</h1>
      { // check whether the favourite list is empty or not
        favMeals.length > 0 ? (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-5 md:p-10">
            {
              favMeals.map(item => (
                <FoodItem food = {item} key={item.id} hideFavButton={true}/>
              ))
            }
          </ul>
        ) : <div className="h-[80vh] flex items-center justify-center text-2xl font-bold">
          <p>Favourite List is Empty</p>
        </div>
      }
    </div>
  )
}

export default Favourites