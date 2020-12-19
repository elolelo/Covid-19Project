import React, { Component } from 'react'
import Iframe from 'react-iframe'


class Districts extends Component {
  render() {
    return (
      <Iframe url="https://elolelo.github.io/built-final/map1/"
      width="100%"
      height="750px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
    )
  }
}

export default Districts
