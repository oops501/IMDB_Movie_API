import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies = [], onSelectMovie }) {
  return (
    <ul className="list">
      {Array.isArray(movies) &&
        movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            movie={movie}
            onSelectMovie={onSelectMovie}
          />
        ))}
    </ul>
  );
}
