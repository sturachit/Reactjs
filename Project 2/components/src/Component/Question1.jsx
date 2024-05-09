//  1)Perform add,sub,mult,div using Class bassed and Function based components.

//Class bassed components

import React from 'react';

class Question1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };    
  }

  add = () => this.setState({ result: this.state.num1 + this.state.num2 });
  sub = () => this.setState({ result: this.state.num1 - this.state.num2 });
  mult = () => this.setState({ result: this.state.num1 * this.state.num2 });
  division = () => this.setState({result : this.state.num1 / this.state.num2});



  render() {

    const css ={
        color : 'red',
        fontSize : '20px',
        fontFamily : 'cursive'
    }
    const button ={
        marginRight : '10px',
        marginTop : '10px',
        color:"#008B8B",
        backGroundColor :"#2F4F4FF",
        border : " solid #008B8B",
        width :"100px",
        height: "30px",
    }

    const text ={
        marginRight : '10px',
        marginTop : '10px',
    }
    return (
      <div>
        <h2 style={css}>Class Based Component</h2>
        <input type="text" style={text} value={this.state.num1} onChange={(e) => this.setState({ num1: Number(e.target.value) })}/>
        <input type="text" style={text} value={this.state.num2} onChange={(e) => this.setState({ num2: Number(e.target.value) })} />
        <br />
        <button style={button} onClick={this.add}>Addion</button>
        <button style={button} onClick={this.sub}>Subtraction</button>
        <button style={button} onClick={this.mult}>Multiplication</button>
        <button style={button} onClick={this.division}>Division</button>
        <br />
        <h3>Result: {this.state.result}</h3><br />
      </div>
    );
  }
}

export default Question1;
