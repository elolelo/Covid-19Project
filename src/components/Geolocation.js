import React, { Component } from 'react'

class Geolocation extends Component {
    return (
        <h4>The visualisations below show all the work that was done by Nompumelelo Mtsweni, Afrimapr team and the team at the  University of Pretoria's Data Science for Social Impact.</h4>
      <br></br>
      <Tabs>
        <div label="Google API">
          <Card>
        <CardBody>
          <CardTitle>About this Google Map API map</CardTitle>
          <Iframe url="https://dsfsi.github.io/healthfacilitymap/"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </CardBody>
        <CardFooter> Elaborative content and Visit this project: Google API map </CardFooter>
      </Card>
        </div>
           
    )
  }
}

export default Geolocation

