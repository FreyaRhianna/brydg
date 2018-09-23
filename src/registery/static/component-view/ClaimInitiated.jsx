import React, { Component } from 'react';
import '../component-style/ClaimInitiated.css';

class ClaimInitiated extends Component {
  constructor(props){
    super(props);
    this.toggleClaimInitiated = this.toggleClaimInitiated.bind(this);
  }
  toggleClaimInitiated(){
    const { toggleClaimInitiated } = this.props;
    toggleClaimInitiated(false);
  }
  render() {
    return (
       <div className="ciBg">
         <div className="ciFg">
          <div className = "Title">
            Transfer Initiated
          </div>

          <div className="Line"></div>

          <div>
          <img className = "ciPlaceholder"src = "/dist/assets/ClaimInitiatedPlaceholder.PNG"/>
          </div>

         </div>
          <button className="ButtonBackground" onClick={this.toggleClaimInitiated}>  Close  </button>
       </div>
    )
  }
};

export default ClaimInitiated;
