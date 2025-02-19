
import { useSelector } from "react-redux";

import Filter from "../components/Filter";
import FoodItem from "../components/FoodItem";
import Loading from "../components/Loading";
import Failure from "../components/Failure";

const Home = () => {
  const { filteredMeals, status, error } = useSelector((state) => state.recipe); // filteredMeals -> meals after filtered by category initailly "vegetarian"
  
  const renderSuccessView = () => {
    return (
        // check the FilteredMeals is empty or not
        filteredMeals.length !== 0 ? (
          <ul className="grid grid-cols-2 md:grid-cols-3  gap-3 md:gap-7 mt-5 p-2 md:p-10">
            {filteredMeals.map((item) => (
              <FoodItem key={item.id} food={item} />
            ))}
          </ul>
        ) : (
          <div className="h-[80vh] flex items-center justify-center text-2xl font-bold">
            <p >No matching food found</p>
          </div>
        )
    );
  };

  const renderView = () => {
    switch (status) {
      case "loading":
        return <Loading />;
      case "success":
        return renderSuccessView();
      case "failed":
        return <Failure error = {error} />;
    }
  };
  return (
    <div className="flex flex-col items-center">
      <Filter />
      {renderView()} {/** Function to render Different Views */}
    </div>
  );
};

export default Home;
