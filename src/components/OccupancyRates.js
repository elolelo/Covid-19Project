import React, { Component } from 'react'
import Iframe from 'react-iframe'


class OccupancyRates extends Component {
  render() {
    return (
        <Iframe url="https://andysouth.shinyapps.io/hosp-viewer-SA-v02/"
        width="100%"
        height="750px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    )
  }
}

export default OccupancyRates
