import styles from "./MovieCard.module.scss";
import { GiConsoleController, GiFilmProjector, GiTv } from "react-icons/gi";
import { ImPlay2, ImStumbleupon } from "react-icons/im";

const MovieCard = (props) => {
  const {
    type,
    title,
    director,
    cast,
    country,
    release_year,
    listed_in,
    description,
    duration,
    rating,
  } = props.cardInfo;

  const castList = cast.split(", ");
  const genreList = listed_in.split(", "); // Array
  const isMovie = type==="Movie";

  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconContainer}>
        {isMovie ? (
          <GiFilmProjector className={styles.Icon} />
        ) : (
          <GiTv className={styles.Icon}/>
        )}

      </div>

      {/* <GiTv className={styles.Icon} /> */}
      <p className={styles.Title}> {title}</p>
      <p className={styles.YearDirector}>
        {release_year}
        {director.trim() == "" ? "" : ", "}
        {director}
      </p>
      <div className={styles.DurationRatingContainer}>
        <p className={styles.Duration}>{duration}</p>
        <p className={styles.Rating}> {rating}</p>
      </div>

      <p className={styles.Description}>{description}</p>

      <div className={styles.GenresContainer}>
        {genreList.map((genre) => (
          <p className={styles.Genre}>{genre}</p>
        ))}
      </div>

      <details className={styles.Cast}>
        <summary className={styles.ShowCast}>Cast</summary>
        <div className={styles.CastList}>
          {castList.map((actor) => (
            <p className={styles.Actor}>{actor}</p>
          ))}
        </div>
      </details>

      {/* <button className={styles.Button}>▶</button> */}
      <ImPlay2 className={styles.PlayIcon} />
    </div>
  );
};

export default MovieCard;
