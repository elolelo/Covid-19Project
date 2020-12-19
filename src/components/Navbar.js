import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import About from './About';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
          <p className="navbar-brand" href="/">Collecting and visualising healthcare facility data for South Africa in response to COVID-19</p>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/About'>
                  <span className="no-icon">About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar