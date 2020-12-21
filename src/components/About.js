import React, { Component } from 'react'
import face6 from "../assets/img/faces/face-6.gif"
import face7 from "../assets/img/faces/face-7.gif"
import Typewriter from 'typewriter-effect';
 
class About extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-6">
          <img className="avatar border-gray" src={face6} alt="..." />
            <p>The project will collate data and create visualisation resources related to healthcare facilities in SA but re-use of the tools and data will be encouraged by publishing it under open licenses.Target audience: The primary target audience is the general public of South Africa who have an interest in the health care system status related to COVID-19. Data journalists, government decision makers, and NGOs may also find the data and visualisations useful.The project aims to collect and effectively communicate data related to the South African healthcare system and its response to COVID-19. Most of the publicly available information around the pandemic pertains to the number of positive cases recorded, number of tests conducted, recoveries and number of COVID-19-related deaths. Less data is available describing healthcare systems capacities, locations and readiness to cater for the infected people. Having easy access to healthcare facility data is hugely important to identify gaps, risks, and excess resources that can be deployed elsewhere. It also helps the general public to understand the status of the healthcare system. The visualisation dashboard will be freely accessible and source code for the data visualisation platform will also be released under an open source license.</p>
          {/* <Typewriter
  options={{
    strings: ['The project will collate data and create visualisation resources related to healthcare facilities in SA but re-use of the tools and data will be encouraged by publishing it under open licenses.Target audience: The primary target audience is the general public of South Africa who have an interest in the health care system status related to COVID-19. Data journalists, government decision makers, and NGOs may also find the data and visualisations useful.The project aims to collect and effectively communicate data related to the South African healthcare system and its response to COVID-19. Most of the publicly available information around the pandemic pertains to the number of positive cases recorded, number of tests conducted, recoveries and number of COVID-19-related deaths. Less data is available describing healthcare systems capacities, locations and readiness to cater for the infected people. Having easy access to healthcare facility data is hugely important to identify gaps, risks, and excess resources that can be deployed elsewhere. It also helps the general public to understand the status of the healthcare system. The visualisation dashboard will be freely accessible and source code for the data visualisation platform will also be released under an open source license.'],
    autoStart: true,
    loop: true,
  }}

/> */}
</div>
<div className="col-md-6">
  <img className="avatar border-gray" src={face7} alt="..." /></div>

          </div>
          </div>
          </div>

    )
}
}

export default About