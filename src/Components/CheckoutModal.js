import React, { Component } from 'react';
import './CheckoutModal.css';
import Burger from './Burger';
import {connect} from 'react-redux';

const CheckoutModal = (props) => {
	if(props.condition === false){
		return null
	}
	return(
<div className='CheckoutModal-main'>
<h1> Your Order: </h1>
    <div className='CheckoutModal-burger'>
      <Burger />
    </div>
<h1> Total Price: {props.ctrl} euro </h1>
<button className='CheckoutModal-button'> Pay Now </button>
<button className='CheckoutModal-button' onClick={props.close}> Close </button>
</div>
		)

}


	const mapDispatchToProps = dispatch => {
	  return {
	   
	    close: () => dispatch({ type: 'CLOSE' }),
	   
	  }
}
export default connect(null,mapDispatchToProps) (CheckoutModal)
