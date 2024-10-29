import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import GptPage from './GptPage';
import { useSelector } from 'react-redux';
//import { addMovie } from '../utils/movieSlice'


const Browse = () => {
  const showGpt = useSelector(store => store.gpt.showGpt);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcommingMovies();
  return (
    <div>
      <Header/>
      {
        showGpt ? <GptPage/> : <><MainContainer/>
      <SecondaryContainer/></>
      }
      
      
    </div>
  )
}

export default Browse