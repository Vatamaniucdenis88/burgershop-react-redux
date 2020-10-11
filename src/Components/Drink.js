import React, { Component } from 'react';
import './Drink.css';
import drink from '.././png/cup.png';



const Drink = (props) => {

let drinkcondition = null;
if(props.drinkst >= 1){ return (drinkcondition=(<img src={drink} alt="drink"  className='drink'/>)) } 
	else  {
		return (
			<div>
        {drinkcondition}
        </div>
             )}




    
}

 	



export default Drink
