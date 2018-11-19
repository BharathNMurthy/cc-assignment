import React from 'react';
import '../components/commom/sideMenu.css';

const Device =(props)=>(
	<div style={{margin:'0px 0px 0px 30px'}}>
		<div style={{zIndex:2, position:'relative'}}>
			<img src={props.url} className="devices-img" alt={props.name}/>
		</div>
		<div style={{position:'relative',width:'140px', height:'110px', backgroundColor:'white', top: '-95px', left: '100px', zIndex:1}}>
			<div >
				<span style={{ textTransform: 'uppercase',display: 'block',textAlign:'center',padding:'25px 0 0px 5px'}}><b>{props.name}</b></span>
				<span style={{ display: 'block',textAlign:'center',padding:'5px 0px 0px 5px'}}>{props.location}</span>
			</div>
		</div>
	</div>
    );

export default Device;
