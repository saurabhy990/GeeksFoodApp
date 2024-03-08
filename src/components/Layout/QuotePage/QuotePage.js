import React from 'react'
import QuoteCard from './QuoteCard'
import "./QuotePage.css"
 

const QuotePage = ( ) => {

 const quoteData = [{
    description:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    author:"Adam Scott"
 },
    {
       description:"Eat breakfast like a king, lunch like a prince, and dinner like a pauper." ,
       author:"Adam Scott"
    },
    {
        description:"Eat breakfast like a king, lunch like a prince, and dinner like a pauper." ,
        author:"Adelle Davis"
     },
     {
        description:"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are." ,
        author:"Adelle Davis"
     },
     {
        description:"Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth." ,
        author:"Alice May Brock"
     },
     {
        description:"Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear. Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up." ,
        author:"Anthelme Brillat-Savarin"
     },
     {
        description:"Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good." ,
        author:"Calvin Trillin"
     },]
     

  return (

   
    <div className="main">
     {quoteData.map((ele,index)=>{

       return(
        <QuoteCard  
        desc = {ele.description}
        auth  ={ele.author}
        key = {index}
        />
       )
       


     })
     
     
     }
     
 </div>
  )
}

export default QuotePage
