import { createContext, useContext, useEffect, useState } from "react";

export const api_url = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}`;
// Creating Context

const AppContext = createContext();

// Creating Provider

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("Titanic");
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsError({
          show: false,
          msg: "",
        });
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      getMovies(`${api_url}&s=${query}`);
    }, 600);
    // cleanup function . this clean the output of pervious invoke of useEffect
    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  return (
    <AppContext.Provider value={{ movie, isError, isLoading, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

//Global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
