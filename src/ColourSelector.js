import React, { Component } from "react";

class ColourSelector extends Component {
  static defaultProps = {
    hex: "#f4424b"
  };

  state = {
    hex: this.props.hex
  };

  onInputChange = event => {
    console.log(this.state.hex);
  };

  render() {
    const { hex } = this.state;

    return <input type="color" onChange={this.onInputChange} value={hex} />;
  }
}

export default ColourSelector;
