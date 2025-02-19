import propTypes from "prop-types"


const Failure = ({error}) => {
  return (
    <div className="w-full min-h-90 flex justify-center items-center flex-col text-center">
        <h1 className="font-semibold text-xl md:text-3xl">{error}</h1>
        <p className="text-xl ">sorry Requested Data Not Found</p>
      </div>
  )
}


Failure.propTypes = {
  error : propTypes.node
}


export default Failure