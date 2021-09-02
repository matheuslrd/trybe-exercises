import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    
    this.btnClick1 = this.btnClick1.bind(this);
    this.btnClick2 = this.btnClick2.bind(this);
    this.btnClick3 = this.btnClick3.bind(this);
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
      classColor: 'classColorNone'
    }
  }

  btnClick1(event) {
    this.setState((prevState, _props) => ({
      btn1: prevState.btn1 + 1,
    }));

  } 

  btnClick2(event) {
    this.setState((prevState, _props) => ({
      btn2: prevState.btn2 + 1,
    }));
  }

  btnClick3(event) {
    this.setState((prevState, _props) => ({
      btn3: prevState.btn3 + 1,
    }));
  }

  changeColor(valueBtn) {
    return (valueBtn % 2 === 0) ? 'green' : 'white';
  }
  
  render() {
    const { btn1, btn2, btn3 } = this.state;
    return (
      <div className="app">
        <button style={{ backgroundColor: this.changeColor(btn1) }} id="btn1" onClick={this.btnClick1}>Btn 1 {this.state.btn1}</button>
        <button style={{ backgroundColor: this.changeColor(btn2) }} id="btn2" onClick={this.btnClick2}>Btn 2 {this.state.btn2}</button>
        <button style={{ backgroundColor: this.changeColor(btn3) }} id="btn3" onClick={this.btnClick3}>Btn 3 {this.state.btn3}</button>
      </div>
    );
  }
}

export default App;
