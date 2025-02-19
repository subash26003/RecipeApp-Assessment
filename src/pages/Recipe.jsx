import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../features/recipeDetailsSlice";
import { useParams } from "react-router";
import Ingredients from "../components/Ingredients";
import RecipeSteps from "../components/RecipeSteps";
import Loading from "../components/Loading";
import Failure from "../components/Failure";
import VideoPlayer from "../components/VideoPlayer";


const Recipe = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // get the id from url
  const [youtubeURL, setYoutubeURL ] = useState('')
  const { recipeDetails, status, error } = useSelector(
    (state) => state.recipeDetails
  );

  useEffect(() => {
    setYoutubeURL(recipeDetails.youtubeURL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[status])

  useEffect(() => {
    dispatch(fetchRecipeDetails(`lookup.php?i=${id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const renderSuccessView = () => {
    return (
      <>
        <h1 className="text-xl md:text-2xl font-bold">
          Recipe Details of{"  "}
          <span className="text-[Coral] text-2xl md:text-3xl">
            {recipeDetails.mealName}
          </span>
          {" "}, A Famous {recipeDetails.area} Food
        </h1>
        <div className="w-full py-5">
          <VideoPlayer url={youtubeURL} /> {/** render the youtube video for the recipe */}
        </div>

        <div className="lg:flex">
          <Ingredients ingredients={recipeDetails.ingredients} /> {/** List of ingredients and measure */}
          <RecipeSteps steps={recipeDetails.instruction} /> {/** steps and procedure */}
        </div>
      </>
    );
  };

  const renderView = () => {
    switch (status) {
      case "loading":
        return <Loading />;
      case "success":
        return renderSuccessView();
      case 'failed':
        return <Failure error={error} />
    }
  };

  return <div className="p-5">
    {renderView()}
  </div>;
};

export default Recipe;

// id(pin):"52807"
// mealName(pin):"Baingan Bharta"
// area(pin):"Indian"
// category(pin):"Vegetarian"
// instruction(pin):"Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and keep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get the smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly cooked. You could also embed some garlic cloves in the baingan and then roast it. 2. Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid easily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools down. 3. You can also do the dhungar technique of infusing charcoal smoky flavor in the baingan. This is an optional step. Use natural charcoal for this method. Heat a small piece of charcoal on flame till it becomes smoking hot and red. 4. Make small cuts on the baingan with a knife. Place the red hot charcoal in the same plate where the roasted aubergine is kept. Add a few drops of oil on the charcoal. The charcoal would begin to smoke. 5. As soon as smoke begins to release from the charcoal, cover the entire plate tightly with a large bowl. Allow the charcoal smoke to get infused for 1 to 2 minutes. The more you do, the more smoky the baingan bharta will become. I just keep for a minute. Alternatively, you can also do this dhungar method once the baingan bharta is cooked, just like the way we do for Dal Tadka. 6. Peel the skin from the roasted and smoked eggplant. 7. Chop the cooked eggplant finely or you can even mash it. 8. In a kadai or pan, heat oil. Then add finely chopped onions and garlic. 9. Saute the onions till translucent. Don't brown them. 10. Add chopped green chilies and saute for a minute. 11. Add the chopped tomatoes and mix it well. 12. Bhuno (saute) the tomatoes till the oil starts separating from the mixture. 13. Now add the red chili powder. Stir and mix well. 14. Add the chopped cooked baingan. 15. Stir and mix the chopped baingan very well with the onion­tomato masala mixture. 16. Season with salt. Stir and saute for some more 4 to 5 minutes more. 17. Finally stir in the coriander leaves with the baingan bharta or garnish it with them. Serve Baingan Bharta with phulkas, rotis or chapatis. It goes well even with bread, toasted or grilled bread and plain rice or jeera rice."
// thumbnailURL(pin):"https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg"
// youtubeURL(pin):"https://www.youtube.com/watch?v=-84Zz2EP4h4"
