import React, { Component } from "react";

class CounterTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    //The binding of class methods in the constructor -- and having a constructor in the first place -- becomes a tedious implementation detail
    ////this.onIncrement = this.onIncrement.bind(this);
  }

  /*
  onIncrement() {
    console.log("onIncrement", this);
    this.setState({ counter: this.state.counter + 1 });
  }
 */

  //JavaScript arrow functions, you can auto-bind class methods without having to bind them in the constructor
  onIncrement = () => {
    let incrementclicked = "increment clicked";
    console.log(`This method called ${incrementclicked}`); //string interpolation:
    console.log("onIncrement", this);
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  getUserByLocation = users => {
    debugger;

    var out = users.filter(function(item) {
      return item.Location.some(function(loc) {
        return loc === "LON";
      });
    });

    let filterObject = [];
    users.forEach(element => {
      element.Location.forEach(loc => {
        if (loc === "MEN") {
          element.Location.filter(x => x === loc);
          filterObject.push(element);
        }
      });
    });

    filterObject.map(function(obj, index) {
      return <li>{obj.name}</li>;
    });
  };

  render() {
    let users = [
      { name: "David", isDeveloper: true, Location: ["LHR", "LON"] },
      { name: "Gasner", isDeveloper: false, Location: ["LHR", "MEN"] }
    ];
    return (
      <div>
        <ul>{this.getUserByLocation(users)}</ul>

        <hr />

        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>

        <p>{this.state.counter}</p>
        <button
          onClick={this.onIncrement}
          type="button"
          className="btn btn-primary m-2"
        >
          Increment
        </button>
        <button
          onClick={this.onDecrement}
          type="button"
          className="btn btn-primary m-2"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default CounterTest;
