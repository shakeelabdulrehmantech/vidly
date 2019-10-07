import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  //Watched Lesson: 39
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m.__id !== movie.__id);
    this.setState({ movies: movies });
    console.log(movie);
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((m, index) => (
            <tr key={index}>
              <th scope="row">{m.title}</th>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
              <td>{m.dailyRentalRate}</td>
              <td>
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
    );
  }
}

// Default export don't need curly braces
export default Movies;
