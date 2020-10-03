import React, { Component } from "react";
import "./CalcuInput.css";

class CalcuInput extends Component {
  render() {
    return <div className="result">{this.props.children}</div>;
  }
}

export default CalcuInput;
