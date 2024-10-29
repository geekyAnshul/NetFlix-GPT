import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
   const movies=useSelector(store=>store.movies);
  return (
    
    <div className=' bg-black'>
      <div className='-my-52 relative z-20'>
      <MovieList  title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Top-Rated Movies"} movies={movies.TopRated}/>
      <MovieList title={"Upcomming Movies"} movies={movies.UpComming}/>
    </div>
    </div>
  )
}

export default SecondaryContainer