import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Alert from "react-bootstrap/Alert";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { ReactDeveloper } from "../models/Developer";
import CounterTest from "./counterTest";
import { Paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 2,
    currentPage: 1
  };
  //Watched Lesson: 39
  handleDelete = movie => {
    debugger;
    const clonedMovies = [...this.state.movies];
    const movies = clonedMovies.filter(m => m.__id !== movie.__id);
    this.setState({ movies: movies });
    console.log(movie);
    /*
    const movies = this.state.movies.filter(m => m.__id !== movie.__id);
    this.setState({ movies: movies });
    console.log(movie);
    */
  };

  handleLike = m => {
    debugger;
    /*
    var dev = new ReactDeveloper();
    console.log(dev.getName());
    const userCredentials = { firstname: "Robin", location: ["LHR", "LON"] };
    const userDetails = { nationality: "German" };

    const user = { ...userCredentials, ...userDetails };

    console.log(user);
    
    const clonedMovies = [...this.state.movies];
    let index = clonedMovies.indexOf(m);
    clonedMovies[index] = { ...clonedMovies[index], numberInStock: 20 };
    clonedMovies[index].liked = !clonedMovies[index].liked;
    this.setState({ movies: clonedMovies });
    console.log("Like Clicked!", m);
    */

    const clonedMovies = this.state.movies;
    let index = clonedMovies.indexOf(m);
    clonedMovies[index].liked = !clonedMovies[index].liked;
    this.setState({ movies: clonedMovies });
    console.log("Like Clicked!", m);
  };

  handlePageChange = page => {
    debugger;
    this.setState({ currentPage: page });
    console.log(page);
  };

  render() {
    const { length: count } = this.state.movies; // Object Destructuring
    const { currentPage, pageSize } = this.state;

    if (count === 0) return <Alert variant="danger">No record(s) found.</Alert>;
    debugger;
    var p = new Paginate();
    let paginateMovies = p.paginateItems(
      this.state.movies,
      currentPage,
      pageSize
    );
    return (
      <React.Fragment>
        <Alert variant="success">{count} record(s) found.</Alert>
        <CounterTest />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {paginateMovies.map((m, index) => (
              <tr key={index}>
                <th scope="row">{m.title}</th>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={m.liked}
                    onClick={() => this.handleLike(m)}
                  ></Like>
                </td>
                <td style={{ float: "Right" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(m)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

// Default export don't need curly braces
export default Movies;
