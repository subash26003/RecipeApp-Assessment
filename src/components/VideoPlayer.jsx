import  { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import useScreenSize from "../customHooks/useScreenSize";
import PropTypes from "prop-types";


const VideoPlayer = ({ url }) => {

    const size = useScreenSize() // custom hook to get the screen width
    const [screenWidth , setScreenWidth] = useState(size.width)
    
    useEffect(() => {
      setScreenWidth(size.width)
    },[size])

  return <div>
    <ReactPlayer url={url} controls={true} width={'100%'} height={screenWidth < 1020 ? '320px' : '540px'} />
  </div>;
};

VideoPlayer.propTypes = {
  url : PropTypes.node,
}

export default VideoPlayer;