import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Burger from './Components/Burger';
import Controls from './Components/Controls';
import Totalprice from './Components/Totalprice';
import Checkout from './Components/Checkout';
import CheckoutModal from './Components/CheckoutModal';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className='App'>
      <Navbar/>
      <Title/>
      <Burger/>
      <Controls/>
      <Totalprice totalprice={props.ctrl} burger={props.ctrl2}/>
      <Checkout swap ={props.swap}/>
      <CheckoutModal condition={props.condition} ctrl={props.ctrl}/>
    </div>
  );
}


 const mapStateToProps = state =>{
    return{
      ctrl: state.totalprice,
      ctrl2: state.burger,
      condition: state.modalcondition,
      swap: state.swap
    }
  }
  

export default connect(mapStateToProps) (App);

