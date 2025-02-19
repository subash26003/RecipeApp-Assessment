import PropTypes from "prop-types"

const RecipeSteps = ({steps}) => {
  return (
    <div className="lg:w-[70%]">
        <p className='text-2xl font-semibold underline'>Steps and Procedures</p>
        <p className="mt-3 text-lg text-justify ">{steps}</p>
    </div>
  )
}


RecipeSteps.propTypes = {
  steps : PropTypes.node,
}


export default RecipeSteps