import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="movie-section">Loading....</div>;
  }
  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((currMovie) => {
          const { imdbID, Poster, Title } = currMovie;
          const movieName = Title.substring(0, 15);
          return (
            <NavLink to={`Movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{Title.length >= 16 ? `${movieName}....` : movieName}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
