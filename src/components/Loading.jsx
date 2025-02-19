import { Oval } from "react-loader-spinner";


const Loading = () => {
  return (
    <div className="w-full h-60 flex justify-center items-center">

      <Oval
        visible={true}
        height="50"
        width="50"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        color="#FF7F50"
        secondaryColor="#FF7F50"
      />

    </div>
  );
}

export default Loading