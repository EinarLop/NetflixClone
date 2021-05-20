import styles from "./MovieCard.module.scss"
import { GiFilmProjector, GiTv } from "react-icons/gi"


const MovieCard = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconContainer}>
        <GiFilmProjector className={styles.Icon} />
      </div>



      {/* <GiTv className={styles.Icon} /> */}
      <p className={styles.Title}> Madagascar 2</p>
      <p className={styles.YearDirector}>1999, Bon Jovi</p>
      <div className={styles.DurationRatingContainer}>

        <p className={styles.Duration}>123 min</p>
        <p className={styles.Rating}> PG-13</p>

      </div>



      <p className={styles.Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum non tenetur ipsa accusantium quos ipsum quia!
        Sequi nam aliquam, molestias quia, libero quam atque neque in nihil,
      tempore est dolor.</p>
      {/* <p className={styles.Rating}> Raiting: 5/5</p> */}


      <div className={styles.GenresContainer}>

        <p className={styles.Genre}>Comedy </p>
        <p className={styles.Genre}>Romantic</p>

      </div>

      <details className={styles.Cast} >
        <summary className={styles.ShowCast}>Cast</summary>
        <div className={styles.CastList}>
          <p className={styles.Actor}>Joe Rogan</p>
          <p className={styles.Actor}>Joe Rogan</p>
          <p className={styles.Actor}>Joe Rogan</p>
          <p className={styles.Actor}>Joe Rogan</p>
          <p className={styles.Actor}>Joe Rogan</p>
          <p className={styles.Actor}>Joe Rogan</p>
        </div>
      </details>



      <button className={styles.Button}>▶</button>


    </div>
  );
}

export default MovieCard;