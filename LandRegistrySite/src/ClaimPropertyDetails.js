import React, { Component } from 'react';
import './ClaimPropertyDetails.css';

class ClaimPropertyDetails extends Component {
  render() {
    return (
       <div className="ClaimPropertyDetailsBg">
         <div className="ClaimPropertyDetailsFg">
          <div className = "Title">
            Claim Property
          </div>
          <div>
          <img className = "placeholderDetails"src = "./ClaimPropertyDeets.PNG"/>
          </div>
         </div>
          <button className="ButtonBackground">  Claim  </button>
       </div>
    )
  }
};

export default ClaimPropertyDetails;
