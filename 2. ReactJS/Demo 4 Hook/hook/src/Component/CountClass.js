import React, { Component } from "react";

class CountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleTRU = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleClick}
            >
              Click vào đây
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleTRU}
            >
              {" "}
              - đi
            </button>
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <p>Số lần button được click: {this.state.count}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CountClass;
