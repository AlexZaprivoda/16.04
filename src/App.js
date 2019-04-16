import React, { Component } from "react";
import "./App.css";

import Checkbox from "./Checkbox";
// import Checkbox from "./Checkbox/index";

class App extends Component {
  state = {
    ch1: false,
    ch2: true
  };

  render() {
    const { ch1, ch2 } = this.state;

    return (
      <div className="App">
        hi react
        <Checkbox
          labelCheck="1"
          labelUnCheck="0"
          label=" test1"
          checked={ch1}
          on_click={() => {
            this.setState({ ch1: !ch1 });
          }}
        />
        <Checkbox
          labelCheck="1"
          labelUnCheck="0"
          checked={ch2}
          on_click={() => {
            this.setState({ ch2: !ch2 });
          }}
        />
      </div>
    );
  }
}

export default App;
