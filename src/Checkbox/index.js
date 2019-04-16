import React from "react";
import "./index.css";

class Checkbox extends React.Component {
  // state = {
  //   status: this.props.defaultValue || false
  // };

  // check = () => {
  //   const { status } = this.state;

  //   this.setState({
  //     status: !status
  //   });
  // };
  state = {
    labelCheck: this.props.labelCheck || "+",
    labelUnCheck: this.props.labelUnCheck || "-"
  };
  render() {
    // const { status } = this.state;
    const { checked, on_click, label } = this.props;
    const { labelCheck, labelUnCheck } = this.state;
    return (
      <button onClick={on_click} className={`status-${checked ? "on" : "off"}`}>
        {checked ? labelCheck : labelUnCheck}
        {label || ""}
      </button>
    );
  }
}

export default Checkbox;
