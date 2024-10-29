import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
   //console.log(movies);
  return (
    <div className='px-6'>
         <h1 className='title text-3xl py-6 tracking-tighter text-white'>{title}</h1>
        <div className='scroll flex overflow-x-scroll '>
           
            <div className='flex '>
                {movies && movies.length > 0 ? (
             movies.map(movie => (
               <MovieCard key={movie.id} posterPath={movie.poster_path} />
             ))
           ) : (
             <p>No movies available</p>  // This will show if movies is null or empty
           )}
             </div>
        </div>
       
    </div>
  )
}

export default MovieList