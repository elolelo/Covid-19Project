import React, { Component } from 'react'
import Iframe from 'react-iframe'


class Geolocation extends Component {
  render() {
    return (
      <Iframe url="https://dsfsi.github.io/healthfacilitymap/"
      width="100%"
      height="750px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
    )
  }
}

export default Geolocation
