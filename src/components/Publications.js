import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'

class Publications extends Component {
  render() {
    let dataPie = {
      labels: ["40%", "20%", "40%"],
      series: [40, 20, 40]
    }
    let dataSales = {
      labels: [
        "9:00AM",
        "12:00AM",
        "3:00PM",
        "6:00PM",
        "9:00PM",
        "12:00PM",
        "3:00AM",
        "6:00AM"
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695],
        [67, 152, 143, 240, 287, 335, 435, 437],
        [23, 113, 67, 108, 190, 239, 307, 308]
      ]
    }
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Email Statistics</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataPie} type="Pie" />
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Users Behavior</h4>
                  <p className="card-category">24 Hours performance</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataSales} type="Line" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                    <i className="fa fa-circle text-danger"></i> Click
                    <i className="fa fa-circle text-warning"></i> Click Second Time
                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
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

export default Publications






//         <h3>Below are published blogs and a paper</h3>
//           <div className="row">
          
//           {/* blog 1 - up */}
//             <div className="col-md-3">
//               <div className="card card-user">
//                 <div className="card-image">
//                   <img src="#" alt="..." />
//                 </div>
//                 <div className="card-body">
//                   <div className="author">
//                     <Link to='/'>
//                       <img className="avatar border-gray" src={face3} alt="..." />
//                       <h5 className="title">KDD humanitarian paper</h5>
//                     </Link>
//                     <p className="description">
//                       michael24
//                     </p>
//                   </div>
//                   <p className="description text-center">
//                     "Paper presented at the KDD Humanitarian workshop
//                       <br /> It can be accessed in <a href="#">this link </a>
//                       <br /> I'm in that two seat Lambo"
//                   </p>
//                 </div>
//                 <hr />
//                 <div className="button-container mr-auto ml-auto">
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-facebook-square"></i>
//                   </button>
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-twitter"></i>
//                   </button>
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-google-plus-square"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
            

// {/* blog 2 */}

// <div className="col-md-3">
//               <div className="card card-user">
//                 <div className="card-image">
//                   <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
//                 </div>
//                 <div className="card-body">
//                   <div className="author">
//                     <Link to='/'>
//                       <img className="avatar border-gray" src={face4} alt="..." />
//                       <h5 className="title">Mike Andrew</h5>
//                     </Link>
//                     <p className="description">
//                       michael24
//                     </p>
//                   </div>
//                   <p className="description text-center">
//                     "Lamborghini Mercy
//                       <br /> Your chick she so thirsty
//                       <br /> I'm in that two seat Lambo"
//                   </p>
//                 </div>
//                 <hr />
//                 <div className="button-container mr-auto ml-auto">
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-facebook-square"></i>
//                   </button>
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-twitter"></i>
//                   </button>
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-google-plus-square"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//         {/* Paper */}

//         <div className="col-md-3">
//               <div className="card card-user">
//                 <div className="card-image">
//                   <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
//                 </div>
//                 <div className="card-body">
//                   <div className="author">
//                     <Link to='/'>
//                       <img className="avatar border-gray" src={face3} alt="..." />
//                       <h5 className="title">Mike Andrew</h5>
//                     </Link>
//                     <p className="description">
//                       michael24
//                     </p>
//                   </div>
//                   <p className="description text-center">
//                     "Lamborghini Mercy
//                       <br /> Your chick she so thirsty
//                       <br /> I'm in that two seat Lambo"
//                   </p>
//                 </div>
//                 <hr />
//                 <div className="button-container mr-auto ml-auto">
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-facebook-square"></i>
//                   </button>
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-twitter"></i>
//                   </button>
//                   <button className="btn btn-simple btn-link btn-icon">
//                     <i className="fa fa-google-plus-square"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Tweets - HST , Gauteng health department , Open Data */}






//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Publications