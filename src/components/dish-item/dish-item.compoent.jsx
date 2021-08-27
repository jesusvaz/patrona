import React from 'react';
import './dish-item.styles.scss';

const Dish = ({dish,lang}) => {
    console.log("dish contiene:",dish.dish)
    return (
        <>
           <p></p>
           <img className="pic" src={dish.imageUrl} alt={dish.dish.en}/>
           <h1 className="titulo">{dish.dish.en.toUpperCase()}</h1> 
           <div className="desc">
               {
                 lang === "en" ? dish.content.en : dish.content.es
               }
           </div>
        
        </>
    )
}

export default Dish
