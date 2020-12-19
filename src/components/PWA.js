import React, { Component } from 'react'
import Iframe from 'react-iframe'


class PWA extends Component {
  render() {
    return (
      <Iframe url="https://affectionate-leakey-83af37.netlify.app/facilities/"
      width="100%"
      height="750px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
    )
  }
}

export default PWA
