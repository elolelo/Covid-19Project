import React, { Component } from 'react'
import Iframe from 'react-iframe'


class FieldHospitals extends Component {
  render() {
    return (
      <Iframe url="https://datawrapper.dwcdn.net/XMSh3/1/"
      width="100%"
      height="750px"
      id="DataWrapper Map"
      display="initial"
      position="relative"/>
      
    )
  }
}

export default FieldHospitals
