import React, { Component } from "react";
import "./Buttons";
import Buttons from "./Buttons";
import CalcuInput from "./CalcuInput";
import ClearBtn from "./ClearBtn";
import AcBtn from "./AcBtn";
import * as math from "mathjs";

class Calculator extends Component {
  constructor(props) {
    super(props);
    /// not working
    this.state = {
      calc: "0",
    };
    this.baseState = this.state;
  }

  //// errors input not showing up and function not found (push)
  //the if condition is checking whether Number(button) result will not return NAN.Number.isNaN() method determines whether the passed value is NaN and its type is Number.
  clickHandler = (button) => {
    const { calc } = this.state;
    this.setState({
      calc: calc === "0" ? button : calc + button,
    });
  };
  handleCalculate = () => {
    const { calc } = this.state;
    this.setState({ calc: math.evaluate(calc) });
  };

  clearHandler = () => {
    this.setState(this.baseState);
  };

  //This needs to be fixed....
  CEhandler = () => {
    if (
      this.state.lastclicked === "" &&
      this.state.operator === "" &&
      this.state.calc !== ""
    ) {
      this.setState({ calc: this.state.calc.slice(0, -1) });
    } else if (
      this.state.calc !== "" &&
      this.state.operator !== "" &&
      this.state.operator.length === 1
    ) {
      this.setState({ calc: this.state.calc.slice(0, -1) });
    }
  };
  componentDidUpdate() {
    console.log(` calc: ${this.state.calc}`);
    this.state.calc === "" && this.setState({ calc: "0" });
  }

  inputZero = (button) => {
    this.state.calc !== "" && this.setState({ calc: this.state.calc + button });
  };

  inputDecimal = (button) => {
    this.state.calc.indexOf(".") === -1 &&
      this.setState({ calc: this.state.calc + button });
  };

  render() {
    return (
      <div className="container">
        <div className="container-wrapper">
          <div className="container-row">
            <CalcuInput>{this.state.calc}</CalcuInput>
          </div>
          <div className="container-row">
            <ClearBtn handleClick={this.clearHandler}>AC</ClearBtn>
            <AcBtn handleClick={this.CEhandler}>CE</AcBtn>
          </div>
          <div className="container-row">
            <Buttons handleClick={this.clickHandler}>7</Buttons>
            <Buttons handleClick={this.clickHandler}>8</Buttons>
            <Buttons handleClick={this.clickHandler}>9</Buttons>
            <Buttons handleClick={this.clickHandler}>-</Buttons>
          </div>
          <div className="container-row">
            <Buttons handleClick={this.clickHandler}>4</Buttons>
            <Buttons handleClick={this.clickHandler}>5</Buttons>
            <Buttons handleClick={this.clickHandler}>6</Buttons>
            <Buttons handleClick={this.clickHandler}>*</Buttons>
          </div>
          <div className="container-row">
            <Buttons handleClick={this.clickHandler}>1</Buttons>
            <Buttons handleClick={this.clickHandler}>2</Buttons>
            <Buttons handleClick={this.clickHandler}>3</Buttons>
            <Buttons handleClick={this.clickHandler}>/</Buttons>
          </div>
          <div className="container-row">
            <Buttons handleClick={this.inputDecimal}>.</Buttons>
            <Buttons handleClick={this.inputZero}>0</Buttons>
            <Buttons handleClick={this.handleCalculate}>=</Buttons>
            <Buttons handleClick={this.clickHandler}>+</Buttons>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
