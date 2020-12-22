import React, { Component } from 'react'
import Iframe from 'react-iframe'


class API extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

             
            <div className="col-md-12">
              <div className="card">
                <div className="card-header ">
                  <h3 className="card-title">OPEN SOURCE REST JSON SERVER API</h3>
                  <h5>Source code can be found <a href="https://github.com/elolelo/hospitals_in_sa-api" target="blank">here.</a> It is hosted <a href="https://hospitals-in-sa-api.herokuapp.com/" target="blank">here</a></h5>
 
                </div>
                <Iframe url="https://hospitals-in-sa-api.herokuapp.com/"
                  width="100%"
                  height="550px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/>
                </div>
              </div>
            </div>
           

          </div>
        </div>
    )
  }
}

export default API
