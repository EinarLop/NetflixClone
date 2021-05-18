import styles from "./AppStyles.module.scss";
import Header from "./Components/Header/Header.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";

function App() {
  return (
    <div className={styles.Wrapper}>
      <Header />
      <MovieCard />
    </div>
  );
}

export default App;
