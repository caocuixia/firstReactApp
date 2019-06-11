import React, { Component } from 'react'
import logo from '../logo.svg'
class App extends Component{
  render() {
    return (
      <div>
        <img className='logo' src={logo} alt="" />
        <p className='title'>react name</p>
      </div>
    )
  }
}
export default App;