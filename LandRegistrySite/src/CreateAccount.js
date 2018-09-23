import React, { Component } from 'react';
import './CreateAccount.css';

class CreateAccount extends Component {
  render() {
    return (
       <div className="createAccBackground">
        <div className="createAccForeground">
          <div className = "Title">
              Create Account
          </div>
          <div className="Line"></div>

          <div>
            <img className = "profileIcon" src="./profileIcon.png"/>
          </div>

          <input className="TextField" type="text" name="name" value="Name"/>
          <input className="TextField" type="email" name="email"/>
          <input className="TextField" type="date" name="birthdate"/>

        </div>
          <button className="ButtonBackground">  Create  </button>
       </div>
    )
  }
};

export default CreateAccount;
