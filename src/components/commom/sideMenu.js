import React from 'react';
import './sideMenu.css';
import Device from '../device';

const deviceList =[
	{name:'Bed Lamp', url:'/images/lamp.png', location:'In Bedroom'},
	{name:'Noria AC', url:'/images/ac.png',location:'In Bedroom'},
	{name:'Door Lock', url:'/images/lock.png',location:'In Home Office'},
	{name:'LG TV', url:'/images/tv.png',location:'In Living Room'},
	{name:'Thermostat', url:'/images/thermostat.png',location:'In Bedroom'}
]

const SideMenu = () => (
	<React.Fragment>
		<div style={{margin:'0px 0px 60px 10px'}}>
			<img src='/images/back-wh.png' className="back-btn" alt="back" />
		</div>
		<div className='flex-container'>
			{deviceList.map(device => <Device key={device.name} name={device.name} url={device.url} location={device.location}/>)}
		</div>
	</React.Fragment>
)

export default SideMenu;
