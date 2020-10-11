import React from 'react';
import './Totalprice.css';

const Totalprice = (props) => {
	return(
<div className='Totalprice'>
<p> Total price: {props.totalprice} euro </p>
</div>
);
}

export default Totalprice;