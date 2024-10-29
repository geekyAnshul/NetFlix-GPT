
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";


const VideoContainer = ({movieId}) => { 
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
    useTrailer(movieId);
  return (
    <div className="z-2">
       <iframe className="w-[100vw] aspect-video"  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&vq=hd1080`}
 title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoContainer