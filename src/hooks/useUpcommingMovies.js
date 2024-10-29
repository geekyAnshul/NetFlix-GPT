
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {  addUpcomming } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpcommingMovies = () => {
  const dispatch = useDispatch();

  // Wrapping getNowPlayingMovies in useCallback to prevent recreation on every render
  const getUpcomming = useCallback(async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      // console.log(json);
      dispatch(addUpcomming(json.results));
    } catch (error) {
      // console.error('Error fetching movies:', error);
    }
  }, [dispatch]); // Dispatch is a dependency, so it should be included

  useEffect(() => {
    getUpcomming();
  }, [getUpcomming]); // Safe to include getNowPlayingMovies in the dependency array
};

export default useUpcommingMovies;
