import React from 'react';
import Dish from '../dish-item/dish-item.compoent';

const Dishes = ({dishes,lang}) => {
  const menu = dishes.dishes.map(dish => <Dish key={dishes.dishes.number} lang={lang} dish={dish} />)
    return (
        <>
            {menu}
        </>
    )
}

export default Dishes
