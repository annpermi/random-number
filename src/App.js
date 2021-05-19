import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      min: "",
      max: "",
      result: 0
    };
  }
  lower = (e) => {
    const minVal = Number(e.target.value);
    this.setState({ min: minVal });
  };
  upper = (e) => {
    const maxVal = Number(e.target.value);
    this.setState({ max: maxVal });
  };
  generate = () => {
    const { min, max } = this.state;
    if (min < max) {
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      this.setState({ result });
    } else {
      alert("Enter valid number!");
    }
  };

  clear = () => {
    this.setState({ min: "", max: "", result: 0 });
  };

  render() {
    const { min, max, result } = this.state;
    return (
      <div className="wrapper">
        <h2>Your random number is:</h2>
        <h3>{result}</h3>
        <label htmlFor="min">Lower Limit</label>
        <input
          id="min"
          type="number"
          placeholder="enter value..."
          onChange={this.lower}
          value={min}
        />
        <br />
        <label htmlFor="max">Upper Limit</label>
        <input
          id="max"
          type="number"
          placeholder="enter value..."
          onChange={this.upper}
          value={max}
        />
        <br />
        <button id="generate" onClick={this.generate}>
          Generate
        </button>
        <button id="clear" onClick={this.clear}>
          Clear
        </button>
      </div>
    );
  }
}

export default App;
