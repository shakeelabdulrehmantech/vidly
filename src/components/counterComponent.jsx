import React, { Component } from "react";

class Counter extends Component {
  //Make it controlled component
  //state = {
  //  value: this.props.value
  //};

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={this.props.onDecrements}
          className="btn btn-primary btn-sm m-2"
        >
          Decrement
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  formatCount() {
    //const { value } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    //let classes = "badge m-2 badge-";
    //if (this.state.value < 0) {
    //  classes += "danger";
    //} else {
    //  classes += this.state.value === 0 ? "warning" : "primary";
    //}

    let classes = "badge m-2 badge-";
    if (this.props.counter.value < 0) {
      classes += "danger";
    } else {
      classes += this.props.counter.value === 0 ? "warning" : "primary";
    }
    return classes;
  }

  //handleIncrements = () => {
  //cannot assign/update value to props because it is read only property
  ////this.props.value = 0;
  //console.log("Increment Clicked", this);
  //this.setState({ value: this.state.value + 1 });
  //};

  //handleDecrements = () => {
  //  console.log("Decrement Clicked", this);
  //  this.setState({ value: this.state.value - 1 });
  //};
}

export default Counter;
