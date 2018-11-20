import React from 'react';
import './line.css'

const Shade = (props) => (
	<div style={{ width:'22px', height:'22px', backgroundColor: props.color }}>
		{ props.selected ? <img src='/images/tick-wh.png' style={{ height: '22px'}} alt="tick" /> : null}
	</div>
);

export default Shade;
