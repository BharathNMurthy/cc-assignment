import React,{Component} from 'react';
import Mode from './mode';
import Line from './commom/line';
import Shade from './commom/shade';
import './device.css';

const shades=['#ff471a', '#b380ff', '#66ffff', '#0099cc', '#ffb3d9' ];

const modes = [
  {id:'mode1', type:'morning', intensity:'50%'},
  {id:'mode2', type:'day', intensity:'30%'},
  {id:'mode3', type:'night', intensity:'100%'}
]

const modeImages = {
  morning:'/images/morning-wh.png',
  day:'/images/day-dk.png',
  night:'/images/night-dk.png'
}
class DeviceContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      slectedShade:'',
      slectedMode:''
    }
  }
  selectShade(shade){
    this.setState({
      slectedShade: shade
    })
  }

  render() {
    return(<div className="col-sm-12">
    <div style={{display:'flex', marginTop:'40px'}}>
      <div className="col-sm-8" >
        <span style={{textTransform: 'uppercase', fontSize:'28px'}}><b>Devices</b></span>
      </div>
      <div className="col-sm-4 " style={{ width:'100%', height:'30px', display:'flex', justifyContent:'flex-end'}}>
        <div style={{width:'30px',backgroundColor:'#99ffce'}}>
          <img src='/images/plus-dk.png' style={{ height: '30px'}} alt="add" />
        </div>
      </div>
    </div>

    <div style={{display:'flex', marginTop:'40px'}}>
      <div className="col-sm-8" >
        <span style={{textTransform: 'uppercase', fontSize:'20px'}}><b>{this.props.deviceDetails.name}</b></span>
      </div>
    </div>

    <Line heading='shades'/>

     <div style={{display:'flex',flexDirection: 'row', marginTop:'30px', flexWrap: 'nowrap', justifyContent:'space-around'}}>
          {shades.map((shade, index) => <Shade color={shade} selected={index === 0}/>)}
    </div>

    <Line heading='Mode'/>

    <div style={{display:'flex', marginTop:'15px'}}>
      <div className="col-sm-12" style={{marginTop:'8px', flexDirection:'column'}}>
          {modes.map(mode => <Mode mode={mode} imageUrl={modeImages[mode.type]}/> )}
      </div>
    </div>

    <Line heading='Intensity'/>

  </div>)
  }
}


export default DeviceContainer;
