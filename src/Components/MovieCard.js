import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-52 rounded-sm  object-cover pr-5'>
        <img className='rounded-md transition-all delay-150 duration-300 hover:scale-110 cursor-pointer' alt="movies" src={IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard