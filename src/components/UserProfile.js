import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import face1 from "../assets/img/faces/face-1.jpg"
import face2 from "../assets/img/faces/face-2.jpg"
import face3 from "../assets/img/faces/face-3.jpg"
// import Geolocation from './Geolocation';

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">


          <div className="col-md-6">
              <div className="card card-user">
                <div className="card-image">
                  <img src="../assets/img/oad.jpeg" alt="oad" />
                </div>
                <div className="card-body">
                  <p className="description text-center">
                    "Lamborghini Mercy
                      <br /> Your chick she so thirsty
                      <br /> I'm in that two seat Lambo"
                      <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-twitter"></i>
                  </button>
                  </p>
                </div>
               
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-user">
                <div className="card-image">
                  <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
                </div>
                <div className="card-body">
                  <p className="description text-center">
                    "Lamborghini Mercy
                      <br /> Your chick she so thirsty
                      <br /> I'm in that two seat Lambo"
                      <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-twitter"></i>
                  </button>
                  </p>
                </div>
              </div>
            </div>
            

            <div className="col-md-4">
              <div className="card card-user">
              
                <div className="card-body">
                  <div className="author">
                    
                      <img className="avatar border-gray" src={face1} alt="..." />
                      <h5 className="title"><a href="" target="blank" >University of Pretoria's Data Science for Social Impact</a></h5>
                   
                    <p className="description">
                      Dr Vukosi Marivate and Herkulaas Combrink
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
                    <a href="" target="blank" className="fa fa-twitter"></a>
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