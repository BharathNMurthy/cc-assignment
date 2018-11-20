import React from 'react';
import '../components/commom/sideMenu.css';
import './mode.css'

const Mode =(props)=>(
	<div className="col-sm-12" style={{backgroundImage: props.selected ?'linear-gradient(to right, #dd99ff, #b3c6ff)': null, margin:'5px 0', height:'30px', display:'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
		<div className="col-sm-1"><img src={props.imageUrl} style={{ height: '30px'}} alt={props.mode.type} /></div>
		<div className="col-sm-6" style={{ textTransform:'capitalize'}}>{props.mode.type}</div>
		<div className="col-sm-4">{props.mode.intensity}</div>
		<div className="col-sm-1"><img src={props.selected ?'/images/tick-wh.png' :'/images/tick-wh-lt.png'} style={{ height: '30px'}} alt={props.mode.type} /></div>
	</div>
    );

export default Mode;
