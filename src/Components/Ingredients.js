import React, { Component } from 'react';
import './Ingredients.css';
import topbread from '.././png/top.png';
import bottombread  from '.././png/bottom.png';
import meat  from '.././png/meat.png';
import chese  from '.././png/chese.png';
import salat  from '.././png/salat.png';



const Ingredients = (props) => {
let burgercondition =null;
let salatcondition =null;
let cheesecondition =null;

if(props.burgerst === 1){burgercondition=(<img src={meat} alt="meat"  className='meat'/>) } 
	else if(props.burgerst > 1) { burgercondition=(
		<div className ='Ingredient-rows'>
		<img src={meat} alt="meat"  className='meat'/> 
		<img src={meat} alt="meat"  className='meat'/>
		</div>)}

if(props.salatst === 1){salatcondition=(<img src={salat} alt="salat"  className='salat'/>) } 
	else if(props.salatst > 1) { salatcondition=(
		<div className ='Ingredient-rows'>
		<img src={salat} alt="salat"  className='salat'/> 
		<img src={salat} alt="salat"  className='salat'/>
		</div>)}

if(props.cheesest === 1){cheesecondition=(<img src={chese} alt="chese"  className='chese'/>) } 
	else if(props.cheesest > 1) { cheesecondition=(
		<div className ='Ingredient-rows'>
		<img src={chese} alt="chese"  className='chese'/> 
		<img src={chese} alt="chese"  className='chese'/>
		</div>)}

if (props.totalst === 0) {
    return (
<div className='Ingredients-list'>
<img src={topbread} alt="topbread"  className='topbread'/>
<h1 className='add-list'> Add Ingredients </h1>
<img src={bottombread} alt="bottombread"  className='bottombread'/>
</div>
)
}
else {
    return (
<div className='Ingredients-list'>
<img src={topbread} alt="topbread"  className='topbread'/>
{salatcondition}
{cheesecondition}
{burgercondition}
<img src={bottombread} alt="bottombread"  className='bottombread'/>
</div>
)
}

 	}



export default Ingredients
