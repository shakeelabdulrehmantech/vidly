import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counterComponents";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const cloneCounters = [...this.state.counters];
    const index = cloneCounters.indexOf(counter);
    //cloneCounters[index] = { ...counter };
    cloneCounters[index].value++;
    console.log(this.state.counters[index].value);
    this.setState({ counters: cloneCounters });
  };

  handleDecrement = counter => {
    const cloneCounters = [...this.state.counters];
    const index = cloneCounters.indexOf(counter);
    //cloneCounters[index] = { ...counter };
    cloneCounters[index].value--;
    console.log(this.state.counters[index].value);
    this.setState({ counters: cloneCounters });
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
      <React.Fragment>
        <NavBar />
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Hello, world!</h1>
              <p>
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="/" role="button">
                  Learn more &raquo;
                </a>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Counters
                  counters={this.state.counters}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </div>
            </div>

            <hr />
          </div>
        </main>
        <footer class="container">
          <p>&copy; Company 2017-2019</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
