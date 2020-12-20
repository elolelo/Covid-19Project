import React, { Component } from 'react'
// import About from './About';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
          <p className="navbar-brand" href="/">Collecting and visualising healthcare facility data for South Africa in response to COVID-19</p>
          
        </div>
      </nav>
    )
  }
}

export default Navbar