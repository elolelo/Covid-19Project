import React, { Component } from 'react'
import face6 from "../assets/img/faces/face-6.gif"
import face7 from "../assets/img/faces/face-7.jpg"
// import Typewriter from 'typewriter-effect';
 
class About extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-6">
         
            <h5>In this project, data has been collected and  visualisation resources related to healthcare facilities in SA have been created.  Translation using a Google Translate widget (which can be found at a very bottom of any webpage in this dashboard) has been successfully implemented to promote a greater and a diverse audience.  An API that can be re-useable has been deployed  and other tools have been published  under an open licenses. This project has targeted an audience shown below : <br></br>
            <br></br><ul><li> The primary target audience is the general public of South Africa who have an interest in the health care system status related to COVID-19.</li><li> Data journalists </li> <li>Local government decision makers </li> <li> Non-Govervement Organizations with interest in health facility data</li> </ul> All of them may find the data and visualisations useful.The project aimed to collect and effectively communicate data related to the South African healthcare system and its response to COVID-19. Since most of the publicly available information around the pandemic pertains to the number of positive cases recorded, number of tests conducted, recoveries and number of COVID-19-related deaths - this project focused on a different aspect. Since less data is available describing healthcare systems capacities, locations and readiness to cater for the infected people; the project chose to focus on this. Having easy access to healthcare facility data is hugely important to identify gaps, risks, and excess resources that can be deployed elsewhere. It also helps the general public to understand the status of the healthcare system.<br></br> The visualisation dashboard will be freely accessible and source code for the data visualisation platform will also be released under an open source license.</h5>
            <img className="avatar border-gray" src={face6} alt="..." />
           
          {/* <Typewriter
  options={{
    strings: ['The project will collate data and create visualisation resources related to healthcare facilities in SA but re-use of the tools and data will be encouraged by publishing it under open licenses.Target audience: The primary target audience is the general public of South Africa who have an interest in the health care system status related to COVID-19. Data journalists, government decision makers, and NGOs may also find the data and visualisations useful.The project aims to collect and effectively communicate data related to the South African healthcare system and its response to COVID-19. Most of the publicly available information around the pandemic pertains to the number of positive cases recorded, number of tests conducted, recoveries and number of COVID-19-related deaths. Less data is available describing healthcare systems capacities, locations and readiness to cater for the infected people. Having easy access to healthcare facility data is hugely important to identify gaps, risks, and excess resources that can be deployed elsewhere. It also helps the general public to understand the status of the healthcare system. The visualisation dashboard will be freely accessible and source code for the data visualisation platform will also be released under an open source license.'],
    autoStart: true,
    loop: true,
  }}

/> */}
</div>
<div className="col-md-6">
<img className="avatar border-gray" src={face7} alt="..." />
</div>


          </div>
          </div>
          </div>

    )
}
}

export default About