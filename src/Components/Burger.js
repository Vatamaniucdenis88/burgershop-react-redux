import React from 'react';
import './Burger.css';
import Ingredients from './Ingredients';
import Chips from './Chips';
import Drink from './Drink';
import {connect} from 'react-redux';

const Burger = (props) => {
	return(
<div className='main'>
<div className='mainCover'>
    
    <Drink drinkst={props.drinkst}/>
    
    <div className='Burger'>
    <Ingredients  totalst={props.totalst}  burgerst={props.burgerst} salatst={props.salatst}
    cheesest={props.cheesest}  chipsst={props.chipsst}  drinkst={props.drinkst}/>
    </div>
    
    <Chips chipsst={props.chipsst}/>
</div>
</div>
);
}
 const mapStateToProps = state =>{
    return{
      totalst: state.totalprice,
      burgerst: state.burger,
      salatst: state.salat,
      cheesest: state.cheese,
      chipsst: state.chips,
      drinkst: state.drink,
    }
  }
export default  connect(mapStateToProps) (Burger);