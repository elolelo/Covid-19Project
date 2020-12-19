import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
            c-19 datastories South Africa
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/about'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>About</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/geolocation'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Geolocation Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/Rmap'>
                <i className="nc-icon nc-circle-09"></i>
                <p>R-based Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/Districts'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Districts Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/OccupancyRates'>
                <i className="nc-icon nc-circle-09"></i>
                <p>OccupancyRates</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/FieldHospitals'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Field Hospitals</p>
              </NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink className="nav-link" to='/API'>
                <i className="nc-icon nc-circle-09"></i>
                <p>API</p>
              </NavLink>
            </li>
            


            <li className="nav-item">
              <NavLink className="nav-link" to='/PWA'>
                <i className="nc-icon nc-circle-09"></i>
                <p>PWA</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/Publications'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Publications</p>
              </NavLink>
            </li>
            
            
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Thanks to ...</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar