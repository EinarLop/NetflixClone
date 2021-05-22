import styles from "./AppStyles.module.scss";
import Header from "./Components/Header/Header.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";

function App() {
  return (
    <>
      <Header />
      <div className={styles.Wrapper}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default App;
