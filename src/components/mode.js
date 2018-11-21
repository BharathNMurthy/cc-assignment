import React from 'react';
import '../components/commom/sideMenu.css';
import './mode.css'

const Mode =(props)=>(
	<div className="col-md-12 col-sm-12 col-xs-12" style={{backgroundImage: props.selected ?'linear-gradient(to right, #dd99ff, #b3c6ff)': null, margin:'5px 0', height:'30px', display:'flex', flexDirection: 'row', justifyContent:'space-evenly'}} onClick={()=> props.selectMode(props.mode.id)}>
		<div className="col-sm-1 col-xs-1"><img src={props.imageUrl} style={{ height: '30px',margin:'1px 0px 0px -19px'}} alt={props.mode.type} /></div>
		<div className="col-sm-6 col-xs-6" style={{ textTransform:'capitalize', padding:'5px'}}>{props.mode.type}</div>
		<div className="col-sm-4 col-xs-4" style={{ padding:'5px'}}>{props.mode.intensity}</div>
		<div className="col-sm-1 col-xs-1"><img src={props.selected ?'/images/tick-wh.png' :'/images/tick-wh-lt.png'} style={{ height: '30px'}} alt={props.mode.type} /></div>
	</div>
    );

export default Mode;
