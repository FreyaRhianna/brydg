import React, { Component } from 'react';
import '../component-style/CoOwned.css';

class CoOwned extends Component {
  constructor(props){
    super(props);
    this.toggleCoOwned = this.toggleCoOwned.bind(this);
  }

  toggleCoOwned(){
    console.log("and this one");
    const { toggleCoOwned } = this.props;
    toggleCoOwned(false);
  }

  render() {
    return (
       <div className="coBg">
         <div className="coFg">
          <div className = "Title">
            Transfer Initiated
          </div>

          <div className="Line"></div>

          <div>
          <img className = "coPlaceholder" src ="/dist/assets/CoOwned.jpeg"/>
          </div>

         </div>
          <button className="ButtonBackground" onClick={this.toggleCoOwned}>  Close  </button>
       </div>
    )
  }
};

export default CoOwned;
