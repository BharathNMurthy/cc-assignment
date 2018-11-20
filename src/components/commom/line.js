import React from 'react';
import './line.css'

const Line = (props) => (
	<div style={{display:'flex', marginTop:'40px'}}>
		<div className="col-sm-1" style={{marginTop:'8px'}}>
			<span style={{textTransform: 'uppercase', fontSize:'10px', color:'#ff66ff'}}><b>{props.heading}</b></span>
		</div>
		<div className="col-sm-11"  >
			<hr/>
		</div>
  </div>
);

export default Line;
