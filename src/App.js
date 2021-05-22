import { useState, useEffect, useMemo } from "react";
import styles from "./AppStyles.module.scss";
import Header from "./Components/Header/Header.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";
import axios from "axios"; // mandar http requests

const SERVER_URL = "http://localhost:3010";

function App() {
  const [cards, setCards] = useState([]);
  const [stats, setStats] = useState([]);
  const [showCards, setShowCards] = useState(true);

  const sendQuery = (type, searchTerm) => {
    console.log("type", type);
    console.log("search term", searchTerm);
    const queryString = generateQueryUrl(type, searchTerm);
    console.log("queryString\n", queryString);
    axios
      .get(`${queryString}`)
      .then((response) => {
        console.log("Succesful query");
        if (type.split(",")[0] == "Stats") {
          // Query stats
          console.log("Stats returned:", response.data.data);
          setShowCards(false);
          setStats(response.data.data); // Number
        } else {
          console.log("Query returned:", response.data.data);
          setShowCards(true);
          setCards(response.data.data); // Array
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const generateQueryUrl = (type, searchTerm) => {
    // Movie Cards query
    if (type == "Movie" || type == "TV Show") {
      return `${SERVER_URL}/titles/query/?type=${type}&title=${searchTerm}&country=`;
    } else if (type == "cast") {
      return `${SERVER_URL}/titles/actor/?cast=${searchTerm}`;
    }
    // Stats query
    else {
      let typeS = type.split(",")[1];
      console.log("Stats type is", typeS);
      if (typeS == "Country") {
        return `${SERVER_URL}/titles/stats/?type=Movie&release_year=&country=${searchTerm}`;
      } else if (typeS == "Titles") {
        return `${SERVER_URL}/titles/stats/?type=&release_year=&country=`;
      } else if (typeS == "Year") {
        return `${SERVER_URL}/titles/stats/?type=TV+Show&release_year=${searchTerm}&country=`;
      }
    }

    return `${SERVER_URL}/titles`; // default movie cards
  };
  // Initialize some default movie cards
  useEffect(() => {
    console.log("Fetching movies...");
    axios
      .get(`${SERVER_URL}/titles/`)
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <>
      <Header sendQuery={sendQuery} />
      <div className={styles.Wrapper}>
        {showCards &&
          (cards.length > 0 ? (
            cards.map((card) => <MovieCard cardInfo={card} />)
          ) : (
            <p className={styles.p}>No results 😢</p>
          ))}
      </div>
    </>
  );
}

export default App;
