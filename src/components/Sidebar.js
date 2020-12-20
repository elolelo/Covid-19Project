import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
            Covid-19 in South Africa
            </Link>
          </div>
          <ul className="nav">

            <li className="nav-item">
              <NavLink className="nav-link" to='/geolocation'>
                <i className="nc-icon nc-square-pin"></i>
                <p>1. Geolocation Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/Rmap'>
                <i className="nc-icon nc-layers-3"></i>
                <p>2. R-based Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/Districts'>
                <i className="nc-icon nc-map-big"></i>
                <p>3. Districts Map</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/OccupancyRates'>
                <i className="nc-icon nc-chart-bar-32"></i>
                <p>4. Occupancy-Rates</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/FieldHospitals'>
                <i className="nc-icon nc-ambulance"></i>
                <p>5. Field Hospitals</p>
              </NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink className="nav-link" to='/API'>
                <i className="nc-icon nc-cloud-upload-94"></i>
                <p>6. API</p>
              </NavLink>
            </li>
            


            <li className="nav-item">
              <NavLink className="nav-link" to='/PWA'>
                <i className="nc-icon nc-html5"></i>
                <p>7. PWA</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/Publications'>
                <i className="nc-icon nc-notification-70"></i>
                <p>Publications</p>
              </NavLink>
            </li>
            
            
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-money-coins"></i>
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