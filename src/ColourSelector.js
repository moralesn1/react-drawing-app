import React, { Component } from "react";

class ColourSelector extends Component {
  static defaultProps = {
    hex: "#f4424b"
  };

  onInputChange = event => {
    const { onColourSelectorChange } = this.props;
    const hex = event.target.value;
    onColourSelectorChange(hex);
  };

  render() {
    const { hex } = this.props;

    return <input type="color" onChange={this.onInputChange} value={hex} />;
  }
}

export default ColourSelector;
