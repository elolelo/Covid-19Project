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
                  <i className="fa fa-file-text-o"></i> Blog post 1 by Data Science for Social Impact
                    <h4 ></h4><a href="https://dsfsi.github.io/blog/mapping-healthsystem/" target="blank">Mapping the South African Health Facility landscape in response to Covid-19</a>
                                       
                                       
                                    </div>
                
                  <hr />
                  <div className="legend">
                  <i className="fa fa-file-text-o"></i> Blog post 2 by Afrimapr
                    <h4 ></h4><a href="https://afrimapr.github.io/afrimapr.website/blog/2020/visualisation-to-improve-data-quality/" target="blank">How an R-map visualization has helped to improve the state of the SA health facilities data in the covid19za repository</a>
                                       
                                       
                                    </div>
                  <hr />
                
                </div>
              </div>
            </div> 
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">KDD humanitarian workshop paper</h4>
                  <p className="card-category"><a href="https://kdd-humanitarian-mapping.herokuapp.com/" target="blank">About the workshop</a></p>
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

