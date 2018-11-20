import React,{Component} from 'react';
import './rangeSelector.css';

class RangeSelector extends Component{
	onRangeChange=(event)=>{
		this.props.selectIntensity( event.target.value);
	}
	render(){
		return(
		<div>
			<div class="slidecontainer">
				<input type="range" min="1" max="100" value={this.props.intensity} class="slider" id="myRange" onChange={this.onRangeChange.bind(this)}/>
			</div>
			<div style={{margin:'10px 0'}}>
				<span style={{fontSize:'25px'}}><b>{this.props.intensity}</b></span>
			</div>
		</div>
		);
	}
}
export default RangeSelector;