import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  
  constructor(props)
  {
    super(props);
    var exp;
    var resultexp;
    var result;
  }
  exp = "";
  resultexp = "";
  lengthnum = 0;
  result = 0;

  onClick(value,option){
    var resultbox = document.getElementById('num1');
  if(option === 1){
    switch(value){
      case '+':
        this.resultexp = "add";
        break;
      case '-':
        this.resultexp = "sub";
        break;
      case '*':
        this.resultexp = "mul";
        break;
      case '/':
        this.resultexp = "div";
        break;
    }
  }
      this.exp=this.exp+value;
      resultbox.value = this.exp;
      console.log(this.exp);
  };

  Result(expression){
    var resultbox = document.getElementById('num1');
    var splitted;
    if(expression === 'clr'){
      this.exp = "";
      resultbox.value = "";
      console.log("Cleared!");
    }else{
         
        switch(this.resultexp){
          case 'add':
            splitted = this.exp.split('+');
            this.result = Number(splitted[0])+Number(splitted[1]);
            break;
          case 'sub':
            splitted = this.exp.split('-');
            this.result = Number(splitted[0])-Number(splitted[1]);
            break;
          case 'mul':
            splitted = this.exp.split('*');
            this.result = Number(splitted[0])*Number(splitted[1]);
            break;
          case 'div':
            splitted = this.exp.split('/');
            this.result = Number(splitted[0])/Number(splitted[1]);
            break;
          }
        this.resultexp = "";
        resultbox.value = this.result;
        this.exp = ""+this.result;
        console.log(this.result);
      }
  };
  
  render() {
    var divStyle = {
      width: "70px",
      height: "70px",
      margin:"5px",
    };

    return (
      <div className="App">
        <br/>

        <input type="text"  id="num1" style={{ width:"310px",height:"50px", margin:"5px"}}/> 
        <br/>
        <br/>
        <button id="zero" onClick={()=>{this.onClick(0,0)}} 
        style={{ width: "230px",
                 height: "70px",
                 margin:"5px" }}> 0 </button>

        <button id="three"onClick={()=>{this.onClick('+',1)}}
        style={divStyle}> + </button>
        <br/>
        <button id="one"onClick={()=>{this.onClick(1,0)}}
        style={divStyle}> 1 </button>
        <button id="two" onClick={()=>{this.onClick(2,0)}}
        style={divStyle}> 2 </button>
        <button id="three"onClick={()=>{this.onClick(3,0)}}
        style={divStyle}> 3 </button>
        <button id="three"onClick={()=>{this.onClick('-',1)}}
        style={divStyle}> - </button>
        <br/>

        <button id="four" onClick={()=>{this.onClick(4,0)}}
        style={divStyle}> 4 </button>
        <button id="five" onClick={()=>{this.onClick(5,0)}}
        style={divStyle}> 5 </button>
        <button id="six" onClick={()=>{this.onClick(6,0)}}
        style={divStyle}> 6 </button> 
        <button id="three"onClick={()=>{this.onClick('*',1)}}
        style={divStyle}> * </button>
        <br/>

        <button id="seven" onClick={()=>{this.onClick(7,0)}}
        style={divStyle}> 7 </button>
        <button id="eight" onClick={()=>{this.onClick(8,0)}}
        style={divStyle}> 8 </button>
        <button id="nine" onClick={()=>{this.onClick(9,0)}}
        style={divStyle}> 9 </button>
        <button id="three"onClick={()=>{this.onClick('/',1)}}
        style={divStyle}> / </button>
        <br/>
        <button id="three"onClick={()=>{this.Result('clr')}}
        style={{ width:"310px",height:"50px", margin:"5px"}}> CLEAR </button>
        <br/>
        <button id="three"onClick={()=>{this.Result('=')}}
        style={{ width:"310px",height:"50px", margin:"5px"}}> ANSWER </button>
      </div>
    );
  }
}

export default App;
