import styles from "./MovieCard.module.scss"

const MovieCard = () => {
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}> Madagascar 2</p>
      <p className={styles.Rating}> Raiting: 5/5</p>
      <p className={styles.Director}> Bon Jovi</p>
      <p className={styles.Country}> México, 1999</p>
      <details >

        <summary className={styles.Cast}>Show Cast</summary>
        <div className={styles.CastList}>
          Shrek
        </div>
      </details>


    </div>
  );
}

export default MovieCard;