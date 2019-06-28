import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

class Canvas extends Component {
  state = {
    hex: "#f4424b"
  };

  componentDidUpdate = () => {
    console.log(this.state.hex);
  };

  render = () => {
    return (
      <div>
        <ColourSelector />
      </div>
    );
  };
}

export default Canvas;
