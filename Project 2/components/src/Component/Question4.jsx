//3)Take one take text box and perform on change events using state less & state ful components.
import React, { Component } from 'react';

class Question4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  Change = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const css ={
        color : 'red',
        fontSize : '20px',
        fontFamily : 'cursive'
    }
    return (
      <div>
        <h2 style={css}>Stateful Component</h2>
        <input type="text" value={this.state.value} onChange={this.Change} />
        <h3>Text: {this.state.value}</h3>
      </div>
    );
  }
}

export default Question4;

