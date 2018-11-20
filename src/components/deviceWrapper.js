import React,{Component} from 'react';
import Mode from './mode';
import Line from './commom/line';
import Shade from './commom/shade';
import RangeSelector from './commom/rangeSelector';
import './device.css';
import './../index.css';

const shades=[{id:'shade1', color:'#ff471a'}, {id:'shade2', color:'#b380ff'}, {id:'shade3', color:'#66ffff'}, {id:'shade4', color:'#0099cc'}, {id:'shade5', color:'#ffb3d9'} ];

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
      slectedShade: shades[0].id,
      slectedMode: modes[0].id,
      intensity:50
    }
  }
  selectShade(shade){
    this.setState({
      slectedShade: shade
    })
  }

  selectMode(mode){
    this.setState({
      slectedMode: mode
    })
  }

  selectIntensity(value){
    this.setState({
      intensity: value
    })
  }
  render() {
    return(<React.Fragment>
    <div style={{display:'flex'}}>
      <div className="col-sm-8" >
        <span style={{textTransform: 'uppercase', fontSize:'28px', fontFamily:'Montserrat-ExtraBold'}}><b>Devices</b></span>
      </div>
      <div className="col-sm-4 " style={{ width:'100%', height:'30px', display:'flex', justifyContent:'flex-end'}}>
        <div style={{width:'30px',backgroundColor:'#99ffce'}}>
          <img src='/images/plus-dk.png' style={{ height: '30px'}} alt="add" />
        </div>
      </div>
    </div>

    <div style={{display:'flex', marginTop:'40px'}}>
      <div className="col-sm-8" >
        <span style={{textTransform: 'uppercase', fontSize:'20px', fontFamily:'Montserrat-ExtraBoldItalic'}}><b>{this.props.deviceDetails.name}</b></span>
      </div>
    </div>

    <Line heading='shades'/>

     <div style={{display:'flex',flexDirection: 'row', marginTop:'30px', flexWrap: 'nowrap', justifyContent:'space-around'}}>
          {shades.map(shade=> <Shade key={shade.id} id={shade.id} color={shade.color} selected={this.state.slectedShade === shade.id} selectShade={this.selectShade.bind(this)}/>)}
    </div>

    <Line heading='Mode'/>

    <div style={{display:'flex', marginTop:'15px'}}>
      <div className="col-sm-12" style={{marginTop:'8px', flexDirection:'column'}}>
          {modes.map(mode => <Mode key={mode.id} mode={mode} imageUrl={modeImages[mode.type]} selected={mode.id === this.state.slectedMode} selectMode={this.selectMode.bind(this)}/> )}
      </div>
    </div>

    <Line heading='Intensity'/>

    <div style={{ margin: '25px 0 0 25px'}}>
      <RangeSelector selectIntensity={this.selectIntensity.bind(this)} intensity={this.state.intensity}/>
    </div>
  </React.Fragment>)
  }
}


export default DeviceContainer;
