import React, { Component } from 'react';
import './PropertyDetailsRequest.css';

class PropertyDetailsRequest extends Component {
  render() {
    return (
       <div className="Background">
        <div className = "Title">
          See Property Details
        </div>

        <div className="Line"></div>

        <div className ="BodyText">
          Before we share any property information, we need to validate your identity. The current owner will be notified of your request.
        </div>

        <button className="ButtonBackground">  Create Account  </button>
        <button className="ButtonBackground">  Login  </button>

       </div>
    )
  }
};

export default PropertyDetailsRequest;
