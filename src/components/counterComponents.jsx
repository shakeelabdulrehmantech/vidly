import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const filteredCounters = this.state.counters.filter(
      c => c.id !== counterId
    );
    this.setState({ counters: filteredCounters });
    console.log("Delete Event Handler Called.", counterId);
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            onDelete={this.handleDelete}
            id={counter.id}
          >
            <h2>Heading 2...</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
