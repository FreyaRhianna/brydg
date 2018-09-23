import React, { Component } from 'react';
import '../component-style/CreateAccount.css';

class CreateAccount extends Component {
  constructor(props){
      super(props);
        this.state = {
      }
      this.login = this.login.bind(this);
  }

  login(){
    const { login } = this.props;
    login(true);
  }

  render() {
    return (
       <div className="createAccBackground">
        <div className="createAccForeground">
          <div className = "Title">
              Create Account
          </div>
          <div className="Line"></div>

          <div>
            <img className = "profileIcon" src="/dist/assets/profileIcon.png"/>
          </div>

          <input className="TextField" type="text" name="name" placeholder="Name"/>
          <input className="TextField" type="email" placeholder="email"/>
          <input className="TextField" type="date" name="birthdate"/>

        </div>
          <button className="ButtonBackground" onClick={this.login}>  Create  </button>
       </div>
    )
  }
};

export default CreateAccount;
