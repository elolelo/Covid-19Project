import React, { Component } from 'react'
import Iframe from 'react-iframe'


class FieldHospitals extends Component {
  render() {
    return (
        <Iframe url="https://andysouth.shinyapps.io/hosp-viewer-SA-v02/"  //"https://elolelo.github.io/built-final/map1/"
        width="100%"
        height="750px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    )
  }
}

export default FieldHospitals
