import React, { Component } from "react";

class ColourSelector extends Component {
  static defaultProps = {
    hex: "#f4424b"
  };

  render() {
    const { hex, onColourSelectorChange } = this.props;

    return <input type="color" onChange={onColourSelectorChange} value={hex} />;
  }
}

export default ColourSelector;
