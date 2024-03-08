import React from 'react'
import "./QuoteCard.css"
const QuoteCard = (props) => {
  return (
   <>
    
    <div className="quote-card ">  
     <h2>{props.desc} </h2>
    <span>{props.auth}</span>

    </div> 
   



 {/* <h5 class="mb-3 text-right rtl:text-left text-gray-500 dark:text-gray-400">{props.description}</h5>
    <span className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>{props.author}</span>  */}


   </>
  )
}

export default QuoteCard
