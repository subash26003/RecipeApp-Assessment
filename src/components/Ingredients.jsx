import PropTypes from "prop-types"

const Ingredients = ({ingredients}) => {
  return (
    <div className="lg:w-[30%]">
        <p className='text-2xl font-semibold underline'>Ingrdients and their Measure</p>
        <ul>
            {
                ingredients.map((item , index) => (
                    <li key={index} className='flex gap-5 m-2 text-xl'>
                        <p>{item.name}</p>
                        <p>-</p>
                        <p className='text-gray-500 text-lg'>{item.measure}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

Ingredients.propTypes = {
    ingredients: PropTypes.node
}

export default Ingredients