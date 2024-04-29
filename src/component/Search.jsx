import React from "react";
import { useGlobalContext } from "./context";
import { Form } from "react-router-dom";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h1>Search Your Favourite Movie</h1>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
