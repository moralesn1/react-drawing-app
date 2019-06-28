import React, { Component } from "react";

class ColourSelector extends Component {
  static defaultProps = {
    hex: "#f4424b"
  };

  render() {
    const { hex } = this.props;

    return <input type="color" defaultValue={hex} />;
  }
}

export default ColourSelector;
