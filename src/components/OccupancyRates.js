import React, { Component } from 'react'
import Iframe from 'react-iframe'


class OccupancyRates extends Component {
  render() {
    return (
      <Iframe url="https://datawrapper.dwcdn.net/tEIz9/1/"
      width="100%"
      height="750px"
      id="DataWrapper Map"
      display="initial"
      position="relative"/>
      
    )
  }
}

export default OccupancyRates
