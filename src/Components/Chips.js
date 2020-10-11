import React, { Component } from 'react';
import './Chips.css';
import chips from '.././png/chips.png';



const Chips = (props) => {

let chipscondition = null;
if(props.chipsst >= 1){ return (chipscondition=(<img src={chips} alt="chips"  className='chips'/>)) } 
	else  {
		return (
			<div>
        {chipscondition}
        </div>
             )}




    
}

 	



export default Chips
