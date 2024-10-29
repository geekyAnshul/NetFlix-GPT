
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from '@google/generative-ai';
import lang from '../utils/language';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

function GeminiInReact() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const langkey = useSelector(store => store.config.lang);
  const dispatch = useDispatch();

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GENAI);
   
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS );
    const json = await data.json();
    return json.results;
  }



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(
        `act as a movie recommendation system and suggest some movies for the query "${inputValue}". Only give me names of 5 movies, comma separated. Example result: gadar, sholay, golmaal, koi mil gaya, hera pheri.`
      );

      // Log the response in JSON format to the console
      console.log(result, null, 2);
      // if(!result.resonse){
      //   console.log('No movies found for the given query');
      //   setLoading(false);
      //   return;
      // }
      //console.log(result.response.candidates[0].content.parts[0].text)
      const getMovies=result.response.candidates[0].content.parts[0].text.split(",");

      const promiseArray = getMovies.map((movie)=>searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(addGptMovieResult({movieNames:getMovies,movieResults:tmdbResults}));
      
      setInputValue(''); // Reset the input field after receiving response
      setLoading(false);
    } catch (error) {
      console.log("Something Went Wrong", error);
      setLoading(false);
    }
  };

  return (
    <div className="container px-96 py-40 text-black">
      <div className="row flex">
        <div className="col ">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={lang[langkey]?.gptplaceholder || "Enter your mood"}
            className="form-control px-8 py-4 w-[450px] outline-none shadow-black shadow-lg font-medium text-zinc-600 capitalize text-xl rounded-[3px] transition-all duration-150 delay-100 hover:shadow-2xl hover:shadow-black"
          />
        </div>
        <div className="col-auto">
          <button 
            onClick={getResponseForGivenPrompt} 
            className="bg-red-600 hover:bg-red-700 px-14 py-4 mx-2 text-lg text-white font-semibold rounded-[3px] shadow-black shadow-lg "
          >
            {lang[langkey]?.search || "Search"}
          </button>
        </div>
      </div>

      {/* No display of the response on the screen, only logging in the console */}
      {loading && (
        <div className="text-center mt-3 text-white">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeminiInReact;
