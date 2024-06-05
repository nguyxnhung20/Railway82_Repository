import React, { Component } from "react";

class ComponentsTopChild extends Component {
  render() {
    let { fromDataToTopChild } = this.props;
    console.log("fromDataToTopChild: ", fromDataToTopChild);
    return (
      <div>
        <h3>this is ComponentsTopChild</h3>
        <h4>{fromDataToTopChild}</h4>
      </div>
    );
  }
}

export default ComponentsTopChild;
