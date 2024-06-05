import React, { Component } from "react";

class ComponentsBottomChild extends Component {
  render() {
    let { fromDataToBottomChild } = this.props;
    return (
      <div>
        <h1>ComponentsBottomChild</h1>
        <h3>{fromDataToBottomChild}</h3>
      </div>
    );
  }
}

export default ComponentsBottomChild;
