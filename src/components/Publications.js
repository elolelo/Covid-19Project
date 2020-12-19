import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Publications extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

             <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Blog Publications</h4>
                </div>
                <div className="card-body ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                  <hr />
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                  <hr />
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                  <hr />
                
                </div>
              </div>
            </div> 
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">KDD humanitarian workshop paper</h4>
                  <p className="card-category">24 Hours performance</p>
                </div>
                <Iframe url="https://arxiv.org/pdf/2006.15216.pdf"
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

export default Publications

