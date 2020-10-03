import React, { Component } from "react";
import "./AcBtn.css";
class AcBtn extends Component {
  render() {
    return (
      <div className="AC" onClick={() => this.props.handleClick()}>
        {this.props.children}
      </div>
    );
  }
}

export default AcBtn;
