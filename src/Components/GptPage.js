import React from 'react'
import GptSearch from './GptSearch'
import GptMovieSuggestion from './GptMovieSuggestion'



const GptPage = () => {
    
  return (
    <div>
    <div className=' w-screen fixed -z-10 '>
         <img className='w-[100vw]' src="https://static.vecteezy.com/system/resources/previews/023/697/972/non_2x/red-curtains-background-illustration-ai-generative-free-photo.jpg" alt="gpt"></img> 
    </div>
   
        <GptSearch/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptPage




