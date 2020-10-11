import React from 'react';
import './Checkout.css';
import {connect} from 'react-redux';

const Checkout = (props) => {
	return(
<div className='Checkout'>
<button className='Checkout-button' onClick={props.swap}> Checkout </button>
</div>
);
}


	   
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
    swap: () => dispatch({ type: 'SWAPCONDITION',use: (ownProps.swap)   })
  }
}
export default connect(null,mapDispatchToProps) (Checkout); 