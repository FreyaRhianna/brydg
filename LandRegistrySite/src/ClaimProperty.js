import React, { Component } from 'react';
import './ClaimProperty.css';

class ClaimProperty extends Component {
  render() {
    return (
      <div className="ClaimPropertyBg">
        <div className = "Title">
            Claim Property
        </div>
        <div className="Line"></div>
        <input className="TextField" type="text" name="Address" value="Find address / postcode"/>

        <div className ="SubtitleText">
          Choose One
        </div>

        <div className="Line"></div>

        <div className= "AddressText">
          2 Wigmore Place <button className="ShapeCircle"></button>
          <img className = "ShapeArrow" src="./rightArrow.png"/>
          <br/> SW3 4RJ, London
        </div>
        <div className="Line"></div>

        <div className= "AddressText">
          3 Wigmore Place <button className="ShapeCircle"></button>
          <img className = "ShapeArrow" src="./rightArrow.png"/>
          <br/> SW3 4RJ, London
        </div>
        <div className="Line"></div>
        <div className= "AddressText">
          4 Wigmore Place <button className="ShapeCircle"></button>
          <img className = "ShapeArrow" src="./rightArrow.png"/>
          <br/> SW3 4RJ, London
        </div>
      </div>
    )
  }
};

export default ClaimProperty;
