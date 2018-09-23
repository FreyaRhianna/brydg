import React, { Component } from 'react';
import './ClaimEvidence.css';

class ClaimEvidence extends Component {
  render() {
    return (
       <div className="ClaimEvidenceBg">
         <div className="ClaimEvidenceFg">
          <div className = "Title">
            Initiate Transfer
          </div>

          <div className="Line"></div>

          <div className ="BodyText">
            To assign this property we need you to upload evidence of your owneship
          </div>

          <button className="ButtonBackground">  Upload Evidence  </button>

         </div>
          <button className="ButtonBackground">  Submit  </button>
       </div>
    )
  }
};

export default ClaimEvidence;
