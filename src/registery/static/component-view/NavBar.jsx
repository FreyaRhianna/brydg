import React, { Component } from 'react';
import '../component-style/NavBar.css';

class ClaimInitiated extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn : props.loggedIn
    }
    this.toggleViewOwned = this.toggleViewOwned.bind(this);
  }

  toggleViewOwned(){
    const { toggleViewOwned } =this.props;
    console.log("was reached");
    toggleViewOwned();
  }
  componentWillReceiveProps(props){
    this.setState({loggedIn:props.loggedIn});
  }

  render() {
    let UserDetails = null;
    if(this.state.loggedIn){
      UserDetails =
      <div>

        <h1 className="welcome-title" onClick={this.toggleViewOwned}> 1 <i class="fas fa-home"></i></h1>
        <h1 className="pull-right welcome-title"> Welcome Freya</h1>


      </div>
    }
    return (
       <div className="nav-bar">
            {UserDetails}
       </div>
    )
  }
};

export default ClaimInitiated;
