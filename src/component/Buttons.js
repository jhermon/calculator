import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <div
        className={`bbtn ${
          this.isOperator(this.props.children) ? "" : "operator"
        } `}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Buttons;
