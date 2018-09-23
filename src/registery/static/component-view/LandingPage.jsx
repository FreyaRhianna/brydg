import React from 'react';
import "../component-style/LandingPage.css";
import ClaimPropertyButton from "./ClaimPropertyButton";
import ClaimProperty from "./ClaimProperty";
import PropertyDetailsRequest from "./PropertyDetailsRequest";
import CreateAccount from "./CreateAccount";
import ClaimPropertyDetails from "./ClaimPropertyDetails";
import ClaimEvidence from "./ClaimEvidence";
import ClaimInitiated from "./ClaimInitiated";
import InitiateTransfer from './InitiateTransfer';
import ViewOwned from "./ViewOwned";
import CoOwned from "./CoOwned";
import NavBar from "./NavBar";

import "../component-style/General.css";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          claim :false,
          request :false,
          register: false,
          claimDetails: false,
          claimEvidence: false,
          claimInitiated: false,
          loggedIn:false,
          viewOwned: false,
          initiateTransfer:false,
          coOwned:false
        }
        this.toggleClaim = this.toggleClaim.bind(this);
        this.toggleRequest = this.toggleRequest.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
        this.toggleClaimDetails = this.toggleClaimDetails.bind(this);
        this.toggleClaimEvidence = this.toggleClaimEvidence.bind(this);
        this.toggleClaimInitiated = this.toggleClaimInitiated.bind(this);
        this.toggleViewOwned = this.toggleViewOwned.bind(this);
        this.toggleInitiateTransfer = this.toggleInitiateTransfer.bind(this);
        this.toggleCoOwned = this.toggleCoOwned.bind(this);
        this.login = this.login.bind(this);
    }

    componentWillReceiveProps(props){
    }

    toggleClaim(){
      this.setState({claim: !this.state.claim, request:false, register:false, claimDetails: false})

    }

    toggleRequest(){
      this.setState({claim:false, request:!this.state.request, register:false, claimDetails: false})
    }

    toggleRegister(){
      console.log("made it")
      this.setState({claim:false, request:false, register:true, details: false, claimDetails:false})
    }

    toggleClaimDetails(){
      this.setState({claim:false, request:false, register:false, details: false, claimDetails:true})
    }

    toggleClaimEvidence(){
      this.setState({claimDetails:false, claimEvidence:true})
    }

    toggleClaimInitiated(value){
      this.setState({claimEvidence:false, claimInitiated: value})
    }

    login(isLoggedIn){
      this.setState({loggedIn: isLoggedIn, register:false});
    }

    toggleViewOwned(){
      this.setState({viewOwned:true, claim:false, request:false, register:false, details: false, claimDetails:false})
    }

    toggleInitiateTransfer(){
      console.log("yep")
      this.setState({initiateTransfer: true, viewOwned:false})
      console.log(this.state.initiateTransfer);
    }

    toggleCoOwned(value){
      console.log(value);
      this.setState({initiateTransfer:false, coOwned:value})
    }

    render(){
        let ClaimButton = null

        if (this.state.loggedIn){
          ClaimButton = <ClaimPropertyButton toggleClaim={this.toggleClaim}/>
        }
        let Popup = null
        if(this.state.claim){
          Popup = <div className="pop-up-overlay">
                    <ClaimProperty toggleClaimDetails= {this.toggleClaimDetails} />
                  </div>
        }else if(this.state.request){
          Popup = <div className="pop-up-overlay" >
                    <PropertyDetailsRequest toggleRegister={this.toggleRegister}/>
                  </div>
        }else if(this.state.register){
          Popup = <div className="pop-up-overlay">
                    <CreateAccount login={this.login}/>
                  </div>
        }else if(this.state.claimDetails){
          Popup = <div className="pop-up-overlay">
                    <ClaimPropertyDetails toggleClaimEvidence={this.toggleClaimEvidence} />
                  </div>
        }else if(this.state.claimEvidence){
          Popup = <div className="pop-up-overlay">
                    <ClaimEvidence toggleClaimInitiated={this.toggleClaimInitiated} />
                  </div>
        }else if(this.state.claimInitiated){
          Popup = <div className="pop-up-overlay">
                    <ClaimInitiated toggleClaimInitiated={this.toggleClaimInitiated}/>
                  </div>
        }else if(this.state.viewOwned){
          Popup = <div className="pop-up-overlay">
                    <ViewOwned toggleInitiateTransfer={this.toggleInitiateTransfer}/>
                  </div>
        }else if(this.state.initiateTransfer){
          Popup = <div className="pop-up-overlay">
                    <InitiateTransfer toggleCoOwned={this.toggleCoOwned}/>
                  </div>
        }else if(this.state.coOwned){
          Popup = <div className="pop-up-overlay">
                    <CoOwned toggleCoOwned={this.toggleCoOwned} />
                  </div>

        }else{
          Popup = <button className="inv-button" onClick={this.toggleRequest} ></button>
        }
        return(
          <div>
            <NavBar loggedIn={this.state.loggedIn} toggleViewOwned={this.toggleViewOwned}/>
            <img className="logo" src="/dist/assets/brydg-logo.png" />
            <div className="background-main">

                 {ClaimButton}
                 {Popup}

            </div>
          </div>
        )
    }
}
