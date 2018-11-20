import React from 'react';
import '../components/commom/sideMenu.css';

const Device =(props)=>(
	<div className='device-info'>
		<div className='device-image'>
			<img src={props.url} alt={props.name}/>
		</div>
		<div className='device-details'>
			<span className='device-title'><b>{props.name}</b></span>
			<span className='device-desc'>{props.location}</span>
		</div>
	</div>
    );

export default Device;
