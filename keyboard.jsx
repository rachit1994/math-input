import React from 'react';
export default class Mathquill extends React.Component {
   render() {
   
      return (
      <div className="keyboard">
      	<ul className="container">
      		<li onClick={()=>{this.props.method("\\sqrt")}}>1</li>
      		<li onClick={()=>{this.props.method("2")}}>2</li>
      		<li>3</li>
      		<li>4</li>
      		<li>5</li>
      		<li>1</li>
      		<li>2</li>
      		<li>3</li>
      		<li>4</li>
      		<li>5</li>
      		<li>1</li>
      		<li>2</li>
      		<li>3</li>
      		<li>4</li>
      		<li>5</li>
      		<li>1</li>
      		<li>2</li>
      		<li>3</li>
      		<li>4</li>
      		<li>5</li>
      	</ul>
      </div>
      );
   }
}