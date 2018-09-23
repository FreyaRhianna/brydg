import React, { Component } from 'react';
import '../component-style/ClaimProperty.css';

class ClaimProperty extends Component {

  constructor(props){
    super(props);
    this.toggleClaimDetails = this.toggleClaimDetails.bind(this);
  }

  toggleClaimDetails(){
    const { toggleClaimDetails } = this.props;
    toggleClaimDetails()
  }

  render() {
    return (
      <div className="ClaimPropertyBg">
        <div className = "Title">
            Claim Property
        </div>
        <div className="Line"></div>
        <input className="TextField" type="text" name="Address" placeholder="Find address / postcode"/>

        <div className ="SubtitleText">
          Choose One
        </div>

        <div className="Line"></div>

        <div className= "AddressText">
          2 Wigmore Place <button className="ShapeCircle" onClick={this.toggleClaimDetails}></button>
          <img className = "ShapeArrow" src="/dist/assets/rightArrow.png" onClick={this.toggleClaimDetails}/>
          <br/> SW3 4RJ, London
        </div>
        <div className="Line"></div>

        <div className= "AddressText">
          3 Wigmore Place <button className="ShapeCircle"></button>
          <img className = "ShapeArrow" src="/dist/assets/rightArrow.png"/>
          <br/> SW3 4RJ, London
        </div>
        <div className="Line"></div>
        <div className= "AddressText">
          4 Wigmore Place <button className="ShapeCircle"></button>
          <img className = "ShapeArrow" src="/dist/assets/rightArrow.png"/>
          <br/> SW3 4RJ, London
        </div>
      </div>
    )
  }
};

export default ClaimProperty
