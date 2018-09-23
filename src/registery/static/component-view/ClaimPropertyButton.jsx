import React from 'react';
import "../component-style/ClaimPropertyButton.css";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(props){
    }

    toggle(){
      const { toggleClaim } = this.props;
      toggleClaim();
    }



    render(){
        return(
            <button className="btn btn-info claim-property" onClick={this.toggle}> Claim Property
            </button>
        )
    }
}
