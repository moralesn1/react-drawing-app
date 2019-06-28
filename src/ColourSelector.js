import React, { Component } from "react";

class ColourSelector extends Component {
  render() {
    const { hex = "#f4424b" } = this.props;

    return <input type="color" defaultValue={hex} />;
  }
}

export default ColourSelector;
