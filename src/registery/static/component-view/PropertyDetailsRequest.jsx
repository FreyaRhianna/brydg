import React, { Component } from 'react';
import '../component-style/PropertyDetailsRequest.css';

class PropertyDetailsRequest extends Component {
  constructor(props){
      super(props);
      this.state = {
      }
      this.toggleRegister = this.toggleRegister.bind(this);
  }

  toggleRegister(){
      console.log("hey");
      const { toggleRegister } =this.props;
      toggleRegister();
  }

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

        <button className="ButtonBackground" onClick={this.toggleRegister}>  Create Account  </button>
        <button className="ButtonBackground">  Login  </button>

       </div>
    )
  }
};

export default PropertyDetailsRequest;
