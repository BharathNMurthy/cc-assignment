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
	<div style={{backgroundImage: 'linear-gradient(#dd99ff, #b3c6ff)',backgroundColor:'#b3b3ff', width:'70%', height:'100%'}}>
		<div style={{margin:'0px 0px 60px 10px'}}>
			<img src='/images/back-wh.png' className="back-btn" alt="back" />
		</div>
		<div className='flex-container'>
			{deviceList.map(device => <Device key={device.name} name={device.name} url={device.url} location={device.location}/>)}
		</div>
	</div>
)

export default SideMenu;
