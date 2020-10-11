import React from 'react';
import Controltop from './Controls/Controltop';
import ControlTopings from './Controls/ControlTopings';
import {IngredientsList} from './database.js';
import './Controls.css';







const Burger = () => {
	const mapIngredients = IngredientsList.map((user,i)=>{
		return <ControlTopings  key={i}  name={user.name} price={user.price} button={user.button}/>
	})
	return(
<div className='Controls-main'>
<Controltop/>
  
      {mapIngredients}
   
</div>
);
}

export default Burger;