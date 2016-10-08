import React from 'react';
export default class Mathquill extends React.Component {
   render() {
   
      return (
      <div className="keyboard">
            <ul className="container" id="numbers">
                  <li onClick={()=>{this.props.method("1")}}>1</li>
                  <li onClick={()=>{this.props.method("2")}}>2</li>
                  <li onClick={()=>{this.props.method("3")}}>3</li>
                  <li onClick={()=>{this.props.method("4")}}>4</li>
                  <li onClick={()=>{this.props.method("5")}}>5</li>
                  <li onClick={()=>{this.props.method("6")}}>6</li>
                  <li onClick={()=>{this.props.method("7")}}>7</li>
                  <li onClick={()=>{this.props.method("8")}}>8</li>
                  <li onClick={()=>{this.props.method("9")}}>9</li>
                  <li onClick={()=>{this.props.method("0")}}>0</li>
                  <li onClick={()=>{this.props.method("(")}}>(</li>
                  <li onClick={()=>{this.props.method(")")}}>)</li>
            </ul>       
            <ul className="container" id="arthmetic">
                  <li onClick={()=>{this.props.method("+")}}>+</li>
                  <li onClick={()=>{this.props.method("-")}}>-</li>
                  <li onClick={()=>{this.props.method("*")}}>*</li>
                  <li onClick={()=>{this.props.method("\/")}}>/</li>
                  <li onClick={()=>{this.props.method("^")}}>^</li>
            </ul>       
            <ul className="container" id="trigno">
                  <li onClick={()=>{this.props.method("cos")}}>cos</li>
                  <li onClick={()=>{this.props.method("sin")}}>sin</li>
                  <li onClick={()=>{this.props.method("tan")}}>tan</li>
                  <li onClick={()=>{this.props.method("\\sqrt")}}>sqrt</li>
                  <li onClick={()=>{this.props.method("Right","k")}}>Right</li>
            </ul>
      </div>
      );
   }
}