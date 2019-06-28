import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

class Canvas extends Component {
  state = {
    hex: "#f4424b"
  };

  componentDidUpdate = () => {
    console.log(this.state.hex);
  };

  onColourSelectorChange = hex => {
    this.setState({ hex });
  };

  render = () => {
    const { hex } = this.state;
    return (
      <div>
        <ColourSelector
          hex={hex}
          onColourSelectorChange={this.onColourSelectorChange}
        />
      </div>
    );
  };
}

export default Canvas;
