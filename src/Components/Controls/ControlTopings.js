import React from 'react';
import './ControlTopings.css';
import {connect} from 'react-redux';


const ControlTopings = (props) => {
	return(
    <main className='controls-main-container' >

<div className='ControlTopings'>

   <div className='ControlTopings-sections'>
       <p className='ControlTopings-text'> {props.name} {props.price} euro </p>
       <button className='button' onClick={props.increment}> {props.button} </button>
   </div>
</div>
   </main>
);
}


  const mapStateToProps = state =>{
    return{
      ctrl: state.totalprice,
    }
  }
  
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
    increment: () => dispatch({ type: 'INCREMENT', add: (ownProps.price) , check: (ownProps.button)  })
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ControlTopings);