import React, { Component } from "react";
import "./ClearBtn.css";
class ClearBtn extends Component {
  render() {
    return (
      <div className="clearbtn" onClick={() => this.props.handleClick()}>
        {this.props.children}
      </div>
    );
  }
}

export default ClearBtn;
