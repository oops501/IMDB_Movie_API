import { useEffect, useState } from "react";
import StarRating from "./../StarRating";
import Loader from "./Loader";

const APIKEY = "de1d97d0";
export default function SelectedMovie({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
  controller,
}) {
  const [movie, SetMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const {
    Title,
    Year,
    Poster,
    Plot,
    Runtime,
    imdbRating,
    Released,
    Actors,
    Director,
    Gener,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

  useEffect(() => {
    function callback() {
      (e) => {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      };
    }
    document.addEventListener("keydown", callback);

    return removeEventListener("keydown", callback);
  }, [onCloseMovie]);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?&apikey=${APIKEY}&i=${selectedId}`,
        { signal: controller.signal },
      );
      const data = await res.json();
      SetMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!Title) return;
    document.title = `Movie | ${Title}`;

    return function () {
      document.title = "IMDb API";
    };
  }, [Title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={Poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    color={"yellow"}
                    onSetRating={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  Already Rated this movie with {watchedUserRating}{" "}
                  <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </>
      )}
    </div>
  );
}
