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
              <NavLink className="nav-link" to='/dashboard'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>About</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/#'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Geolocation Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/#'>
                <i className="nc-icon nc-circle-09"></i>
                <p>R-based Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/#'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Districts Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/#'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Occupations Rates</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/#'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Field Hospitals</p>
              </NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-circle-09"></i>
                <p>API</p>
              </NavLink>
            </li>
            


            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
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
                <p>Team</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar