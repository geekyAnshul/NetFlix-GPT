// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { useEffect } from "react";
// import { addTrailer } from "../utils/movieSlice";

// const useTrailer = (movieId)=>{
//     const dispatch=useDispatch();
//     const getMovieVideos = async()=>{
//         const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
//         const json = await data.json();
//         //console.log(json);
//         const filterdata = json.results.filter(video=>video.type === "Trailer");
//         //console.log(trailer);
//         const trailer = filterdata.length ? filterdata[0] : json.results[0];
//         //console.log(trailer);
//         dispatch(addTrailer(trailer));
//     };
 
    
//     useEffect(()=>{
//       getMovieVideos();
//     },[]);
// }

// export default useTrailer;
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useCallback } from "react";
import { addTrailer } from "../utils/movieSlice";

const useTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = useCallback(async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        
        const filterdata = json.results.filter(video => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        
        dispatch(addTrailer(trailer));
    }, [movieId, dispatch]); // Dependencies for useCallback

    useEffect(() => {
        getMovieVideos();
    }, [getMovieVideos]); // Dependency array includes getMovieVideos
}

export default useTrailer;
