import React from 'react';
import MathQuill from 'mathquill';
import Keyboard from './keyboard.jsx';
import $ from 'jquery';

export default class Mathquill extends React.Component {

    componentWillMount() {
        this.MQ = MathQuill.getInterface(2);
		this.a="";
    }
	print(n,k){
		this.a = this.a+n;
    var mathFieldSpan = $('#math');
var mathField = this.MQ.MathField(mathFieldSpan[0]);
mathFieldSpan.appendTo(document.body);
if(k=="k"){
  mathField.keystroke(n);
}
else mathField.cmd(n);
		console.log("n",n);
	}
    componentDidMount() {

    }

    render() {
        return ( < div >
          <span id="math"></span>
            <Keyboard method = {this.print.bind(this)} />

            < /div>
        );
    }
}
