import React, { Component } from 'react';
import '../component-style/InitiateClaim.css';

class ClaimInitiated extends Component {
  constructor(props){
    super(props);
    this.toggleCoOwned = this.toggleCoOwned.bind(this);
  }

  toggleCoOwned(){
    console.log("this too")
    const { toggleCoOwned } = this.props;
    toggleCoOwned(true);
  }

  render() {
    return (
       <div className="icBg">
         <div className="icFg">
          <div className = "Title">
            Initiate Transfer
          </div>

          <div className="Line"></div>

          <div>
          <img className = "icPlaceholder"src = "/dist/assets/InitiateTransfer.jpeg"/>
          </div>

         </div>
          <button className="ButtonBackground" onClick={this.toggleCoOwned}>  Initiate  </button>
       </div>
    )
  }
};

export default ClaimInitiated;
