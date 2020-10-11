import React from 'react';
import './Navbar.css';
import navlogo from '.././png/navlogo.png';

const Navbar = () => {
	return(
<div className='Navbar-main'>
   <img src={navlogo} alt="Logo"  className='navlogo'/>
</div>
);
}

export default Navbar;