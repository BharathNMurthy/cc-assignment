import React from 'react';
import Mode from './mode';
import './device.css';

const modes = [
  {type:'morning', intensity:'50%'},
  {type:'day', intensity:'30%'},
  {type:'night', intensity:'100%'}
]

const modeImages = {
  morning:'/images/morning-wh.png',
  day:'/images/day-dk.png',
  night:'/images/night-dk.png'
}
const DeviceContainer =(props)=>(
      <div className="col-sm-12">
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
            <span style={{textTransform: 'uppercase', fontSize:'20px'}}><b>{props.deviceDetails.name}</b></span>
          </div>
        </div>

         <div style={{display:'flex', marginTop:'40px'}}>
          <div className="col-sm-1" style={{marginTop:'8px'}}>
              <span style={{textTransform: 'uppercase', fontSize:'10px', color:'#ff66ff'}}><b>shades</b></span>
          </div>
          <div className="col-sm-11"  >
           <hr/>
          </div>
        </div>

         <div style={{display:'flex',flexDirection: 'row', marginTop:'30px', flexWrap: 'nowrap', justifyContent:'space-around'}}>
              <div style={{ width:'22px', height:'22px', backgroundColor:'#ff471a'}}> <img src='/images/tick-wh.png' style={{ height: '22px'}} alt="tick" /></div>
              <div style={{ width:'22px', height:'22px', backgroundColor:'#b380ff'}}></div>
              <div style={{ width:'22px', height:'22px', backgroundColor:'#66ffff'}}></div>
              <div style={{ width:'22px', height:'22px', backgroundColor:'#0099cc'}}></div>
              <div style={{ width:'22px', height:'22px', backgroundColor:'#ffb3d9'}}></div>
        </div>

        <div style={{display:'flex', marginTop:'40px'}}>
          <div className="col-sm-1" style={{marginTop:'8px'}}>
              <span style={{textTransform: 'uppercase', fontSize:'10px', color:'#ff66ff'}}><b>Mode</b></span>
          </div>
          <div className="col-sm-11"  >
           <hr/>
          </div>
        </div>

        <div style={{display:'flex', marginTop:'15px'}}>
          <div className="col-sm-12" style={{marginTop:'8px', flexDirection:'column'}}>
              {modes.map(mode => <Mode mode={mode} imageUrl={modeImages[mode.type]}/> )}
          </div>
        </div>

         <div style={{display:'flex', marginTop:'40px'}}>
          <div className="col-sm-1" style={{marginTop:'8px'}}>
              <span style={{textTransform: 'uppercase', fontSize:'10px', color:'#ff66ff'}}><b>Intensity</b></span>
          </div>
          <div className="col-sm-11"  >
           <hr/>
          </div>
        </div>
      </div>

    );

export default DeviceContainer;
