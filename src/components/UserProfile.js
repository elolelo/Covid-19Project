import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import face1 from "../assets/img/faces/face-1.jpg"
import face2 from "../assets/img/faces/face-2.jpg"
import face3 from "../assets/img/faces/face-3.jpg"
import face4 from "../assets/img/faces/face-4.jpg"
import face5 from "../assets/img/faces/face-5.jpg"


class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">


          <div className="col-md-6">
              <div className="card card-user">
                <div className="card-image">
                <img className="avatar border-gray" src={face4} alt="..." />
                <br></br>
                </div>
                  <p className="description text-center">
                    OAD/ AIU
                      <br /> For financially supporting this project
                     <br>
                     </br>
                     <hr></hr>
                      <button className="btn btn-simple btn-link btn-icon">
                    <a href="https://twitter.com/Astro4Dev" target="blank" className="fa fa-twitter"></a>
                  </button>
                  </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card-user">
                <div className="card-image">
                <img className="avatar border-gray" src={face5} alt="..." />
                <br></br>
                </div>
                  <p className="description text-center">
                    Google 
                      <br /> For providing the language translation widget
                     <br>
                     </br>
                     <hr></hr>
                      <button className="btn btn-simple btn-link btn-icon">
                    <a href="https://twitter.com/Google" target="blank" className="fa fa-twitter"></a>
                  </button>
                  </p>
              </div>
            </div>
        
            

            <div className="col-md-4">
              <div className="card card-user">
              
                <div className="card-body">
                  <div className="author">
                    
                      <img className="avatar border-gray" src={face1} alt="..." />
                      <h5 className="title"><a href="https://datastudio.google.com/u/0/reporting/1b60bdc7-bec7-44c9-ba29-be0e043d8534/page/hrUIB" target="blank" >University of Pretoria's Data Science for Social Impact</a></h5>
                   
                    <p className="description">
                      Dr. Vukosi Marivate and Herkulaas Combrink
                    </p>
                    <hr />
                    <button className="btn btn-simple btn-link btn-icon">
                   <a href="https://twitter.com/vukosi" target="blank" className="fa fa-twitter"></a>
                  </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-user">
              
                <div className="card-body">
                  <div className="author">
                    <Link to='/'>
                      <img className="avatar border-gray" src={face2} alt="..." />
                     <h5 className="title"><a href="https://afrimapr.github.io/afrimapr.website/" target="blank">Afrimapr</a></h5>
                    </Link>
                    <p className="description">
                      Anelda van der Walt and Dr. Andy South 
                    </p>
                    <br></br>
                    <hr />
                    <button className="btn btn-simple btn-link btn-icon">
                    <a href="https://twitter.com/afrimapr"  target="blank" className="fa fa-twitter"></a>
                  </button>
                  </div>
                 
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card card-user">
              
                <div className="card-body">
                  <div className="author">
                    <Link to='/'>
                      <img className="avatar border-gray" src={face3} alt="..." />
                      <h5 className="title">Friends</h5>
                    </Link>
                    <p className="description">
                     Nelisiwe Dlamini 
                     <button className="btn btn-simple btn-link btn-icon">
                    <a href="" target="blank" className="fa fa-twitter"></a>
                  </button>
                     
                     <hr></hr>
                      <br></br>  Tess Kerins 
                      <button className="btn btn-simple btn-link btn-icon">
                    <a href="https://twitter.com/TessKerins" target="blank" className="fa fa-twitter"></a>
                  </button>
                     <br></br>
                    </p>
                    
                   
                  </div>
                 
                </div>
            
              </div>
            </div>




          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile