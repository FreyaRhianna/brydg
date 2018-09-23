import React, { Component } from 'react';
import './ViewOwned.css';

class ViewOwned extends Component {
  render() {
    return (
       <div className="voBg">
         <div className="voFg">
          <div className = "Title">
            PropertyDetails
          </div>
          <div>
          <img className = "voPlaceholder"src = "./ViewOwnedPlaceholder.PNG"/>
          </div>
         </div>
          <button className="ButtonBackground">  Initiate Transfer  </button>
       </div>
    )
  }
};

export default ViewOwned;
