import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }
  remove(id) {
    const leftOver = this.state.boxes.filter(box => box.id !== id);
    this.setState({
      boxes: leftOver
    });
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        remove={() => this.remove(box.id)}
      />
    ));
    return (
      <div>
        <h1>Color Box Mkaer Thingy</h1>
        <NewBoxForm create={this.create} />
        {boxes}
      </div>
    );
  }
}
export default BoxList;
