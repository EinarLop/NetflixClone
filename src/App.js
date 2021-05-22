import { useState, useEffect } from "react";
import styles from "./AppStyles.module.scss";
import Header from "./Components/Header/Header.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";
import axios from "axios"; // mandar http requests

function App() {
  const [cards, setCards] = useState([]);

  const sendQuery = (type, searchTerm) => {
    console.log("Send Query...");
    console.log(type);
    console.log(searchTerm);
  };

  // Initialize some default movie cards
  useEffect(() => {
    console.log("Fetching movies...");
    axios
      .get("http://localhost:3010/titles/")
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
        {cards.length > 0 ? (
          cards.map((card) => <MovieCard cardInfo={card} />)
        ) : (
          <p className={styles.p}>No results 😢</p>
        )}
      </div>
    </>
  );
}

export default App;
