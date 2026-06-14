import React from "react";

export default function NoMovie() {
  return (
    <div className="no-movie-container">
      <div className="no-movie-card">
        <div className="movie-icon">🎬</div>

        <h1>No Movie Found</h1>

        <p>
          Search for your favorite movie and discover ratings, reviews and
          details.
        </p>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
