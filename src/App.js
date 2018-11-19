import React, { Component } from 'react';
import './App.css';
import DeviceContainer from './components/deviceWrapper';
import SideMenu from './components/commom/sideMenu'

const deviceList =[
	{name:'Bed Lamp', url:'/images/lamp.png', location:'In Bedroom'},
	{name:'Noria AC', url:'/images/ac.png',location:'In Bedroom'},
	{name:'Door Lock', url:'/images/lock.png',location:'In Home Office'},
	{name:'LG TV', url:'/images/tv.png',location:'In Living Room'},
	{name:'Thermostat', url:'/images/thermostat.png',location:'In Bedroom'}
]
class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row col-xs-12'>
          <div className='col-xs-3' style={{width:'30%'}}>
            <SideMenu />
          </div>
          <div className='col-xs-7'>
            <DeviceContainer deviceDetails={deviceList[0]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
