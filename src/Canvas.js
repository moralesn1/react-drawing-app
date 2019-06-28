import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

const styles = {
  border: "6px solid black"
};

class Canvas extends Component {
  state = {
    hex: "#f4424b",
    coords: null,
    height: 400,
    width: 400
  };

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.context = null;
  }

  componentDidMount() {
    console.log(this.canvasRef);
  }

  componentDidUpdate = () => {
    this.setContext();
  };

  setContext = () => {
    this.context = this.canvasRef.current.getContext("2d");
    this.context.strokeStyle = this.state.hex;
    this.context.lineJoin = "round";
    this.context.lineWidth = 3;
  };

  onColourSelectorChange = hex => {
    this.setState({ hex });
  };

  onCanvasMouseDown = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    this.setState({ coords: [x, y] });
  };

  onCanvasMouseMove = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const coords = this.state.coords;
    const { height, width } = this.state;

    if (x > 0 && x < width && y > 0 && y < height) {
      if (coords) {
        this.context.beginPath();
        this.context.moveTo(coords[0], coords[1]);
        this.context.lineTo(x, y);
        this.context.closePath();
        this.context.stroke();
        this.setState({ coords: [x, y] });
      }
    } else {
      this.setState({ coords: null });
    }
  };

  onCanvasMouseUp = event => {
    this.setState({ coords: null });
  };

  render = () => {
    const { hex } = this.state;
    return (
      <>
        <div>
          <ColourSelector
            hex={hex}
            onColourSelectorChange={this.onColourSelectorChange}
          />
        </div>
        <div>
          <canvas
            ref={this.canvasRef}
            width="400"
            height="400"
            style={styles}
            onMouseMove={this.onCanvasMouseMove}
            onMouseDown={this.onCanvasMouseDown}
            onMouseUp={this.onCanvasMouseUp}
          />
        </div>
      </>
    );
  };
}

export default Canvas;
