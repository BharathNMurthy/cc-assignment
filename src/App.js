import React, { Component } from 'react';
import './App.css';
import DeviceContainer from './components/deviceWrapper';
import SideMenu from './components/commom/sideMenu'
import './components/commom/sideMenu.css'

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
        <div className='row col-xs-12  wrapper' >
          <div className='col-xs-6 col-md-4 sidemenu'>
            <SideMenu />
          </div>
          <div className='col-xs-6 ol-md-8'>
            <DeviceContainer deviceDetails={deviceList[0]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
