import { useState, useEffect, useMemo } from "react";
import styles from "./AppStyles.module.scss";
import Header from "./Components/Header/Header.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";
import StatCard from "./Components/StatsCard/StatsCard.jsx";
import axios from "axios"; // mandar http requests

const SERVER_URL = "http://localhost:3010";

function App() {
  const [cards, setCards] = useState([]);
  const [stats, setStats] = useState();
  const [showCards, setShowCards] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [status, setStatus] = useState("");

  const handleErrorMsg = (msg) => {
    setErrormsg(msg);
  };

  const sendQuery = (type, searchTerm) => {
    console.log("type:", type, " searchTerm:", searchTerm);
    let status = <p className={styles.statusp}>Sending query...</p>;
    setStatus(status);

    setType(type);
    setSearchTerm(searchTerm);

    const queryString = generateQueryUrl(type, searchTerm);
    console.log("queryString\n", queryString);

    axios
      .get(`${queryString}`)
      .then((response) => {
        status = (
          <p className={`${styles.statusp} ${styles.good}`}>Query done</p>
        );
        setStatus(status);

        if (type.split(",")[0] == "Stats") {
          // Query stats
          console.log("Stats returned:", response.data.data);
          setShowStats(true);
          setStats(response.data.data);
        } else {
          // Query movies
          console.log("Query returned:", response.data.data);
          setShowStats(false);
          setCards(response.data.data); // Array
        }
      })
      .catch((err) => {
        console.log("Query returned error");
        status = (
          <p className={`${styles.statusp} ${styles.bad}`}>{err.message}</p>
        );
        setStatus(status);
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
      <Header
        sendQuery={sendQuery}
        handleErrorMsg={handleErrorMsg}
        sendQuery={sendQuery}
      />
      <div className={styles.Wrapper}>
        <p className={styles.p}>{errormsg}</p>
        {status}
      </div>
      <div className={styles.Wrapper}>
        {showStats ? (
          stats != 0 ? (
            <StatCard stats={stats} searchTerm={searchTerm} type={type} />
          ) : (
            <p className={styles.p}>No statistics for your search😢</p>
          )
        ) : cards.length > 0 ? (
          cards.map((card) => <MovieCard cardInfo={card} />)
        ) : (
          <p className={styles.p}>No results 😢</p>
        )}
      </div>
    </>
  );
}

export default App;
