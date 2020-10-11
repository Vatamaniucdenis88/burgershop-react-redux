import React from 'react';
import './Controltop.css';
import navlogo from '../.././png/navlogo.png';

const Controltop = () => {
	return(
<div className='Controltop'>
    <img src={navlogo} alt="Logo"  className='Controltop-img'/>
    <p className='Controltop-title'> Build your Burger </p>
</div>
);
}

export default Controltop;