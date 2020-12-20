import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserProfile from './UserProfile'
import Publications from './Publications'
import Geolocation from './Geolocation';
import About from './About';
import FieldHospitals from './FieldHospitals';
import Districts from './Districts';
import OccupancyRates from './OccupancyRates';
import PWA from './PWA';
import Rmap from './Rmap';
import API from './API';



class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route path="/profile" component={UserProfile} />
          <Route path="/publications" component={Publications} />
          <Route path="/geolocation" component={Geolocation} />
          <Route path="/about" component={About} />
          <Route path="/fieldhospitals" component={FieldHospitals} />
          <Route path="/districts" component={Districts} />
          <Route path="/OccupancyRates" component={OccupancyRates} />
          <Route path="/PWA" component={PWA} />
          <Route path="/Rmap" component={Rmap} />
          <Route path="/API" component={API} />
          {/* <Route path="/profi" component={UserProfile} /> */}
          <Redirect from='*' to='/about' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main