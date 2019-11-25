const movies = [
  {
    __id: "1",
    title: "Terminator",
    genre: { __id: "11", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03-T19:04:28:809Z",
    liked: true
  },
  {
    __id: "2",
    title: "Die Hard",
    genre: { __id: "21", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03-T19:04:28:809Z"
  },
  {
    __id: "3",
    title: "Trip to Italy",
    genre: { __id: "31", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03-T19:04:28:809Z"
  },
  {
    __id: "4",
    title: "Airplane",
    genre: { __id: "41", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03-T19:04:28:809Z"
  },
  {
    __id: "5",
    title: "Get Out",
    genre: { __id: "51", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 1.5,
    publishDate: "2018-01-03-T19:04:28:809Z"
  }
];
// Named export
export function getMovies() {
  return movies;
}
// Name export
export function getMovie(id) {
  return movies.find(m => m.__id === id);
}
