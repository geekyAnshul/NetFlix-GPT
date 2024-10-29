import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
    const {movieNames,movieResults} = useSelector(store=>store.gpt);
    if(!movieNames) return null;

  return (
    <div className='p-4  bg-black bg-opacity-50  text-white'>
         <div>
            {movieNames.map((movie,index) =>  <MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
           
         </div>
    </div>
  )
}

export default GptMovieSuggestion