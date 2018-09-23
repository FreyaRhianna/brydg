import React, { Component } from 'react';
import './ClaimInitiated.css';

class ClaimInitiated extends Component {
  render() {
    return (
       <div className="ciBg">
         <div className="ciFg">
          <div className = "Title">
            Transfer Initiated
          </div>

          <div className="Line"></div>

          <div>
          <img className = "ciPlaceholder"src = "./ClaimInitiatedPlaceholder.PNG"/>
          </div>

         </div>
          <button className="ButtonBackground">  Close  </button>
       </div>
    )
  }
};

export default ClaimInitiated;
