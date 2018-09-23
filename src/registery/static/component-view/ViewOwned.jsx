import React, { Component } from 'react';
import '../component-style/ViewOwned.css';

class InitiateTransfer extends Component {

  constructor(props){
    super(props);
    this.toggleInitiateTransfer = this.toggleInitiateTransfer.bind(this);
  }

  toggleInitiateTransfer(){
    const { toggleInitiateTransfer } = this.props;
    toggleInitiateTransfer();
  }
  render() {
    return (
       <div className="voBg">
         <div className="voFg">
          <div className = "Title">
            PropertyDetails
          </div>
          <div>
          <img className = "voPlaceholder"src = "/dist/assets/ViewOwnedPlaceholder.PNG"/>
          </div>
         </div>
          <button className="ButtonBackground" onClick={this.toggleInitiateTransfer}>  Initiate Transfer  </button>
       </div>
    )
  }
};

export default InitiateTransfer;
