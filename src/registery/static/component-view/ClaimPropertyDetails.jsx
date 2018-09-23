
import React, { Component } from 'react';
import '../component-style/ClaimPropertyDetails.css';

class ClaimPropertyDetails extends Component {
  constructor(props){
      super(props);
        this.state = {
      }
      this.toggleClaimEvidence = this.toggleClaimEvidence.bind(this);
  }

  toggleClaimEvidence(){
      const { toggleClaimEvidence } = this.props;
      toggleClaimEvidence();
  }

  render() {
    return (
       <div className="ClaimPropertyDetailsBg">
         <div className="ClaimPropertyDetailsFg">
          <div className = "Title">
            Claim Property
          </div>
          <div>
          <img className = "placeholderDetails"src = "/dist/assets/ClaimPropertyDeets.PNG"/>
          </div>
         </div>
          <button className="ButtonBackground" onClick={this.toggleClaimEvidence}>  Claim  </button>
       </div>
    )
  }
};

export default ClaimPropertyDetails;
