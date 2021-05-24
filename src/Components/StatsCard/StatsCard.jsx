import React, { useEffect, useState } from 'react';
import styles from "./StatCardStyles.module.scss"





const StatsCard = (props) => {
  const [message, setMessage] = useState();
  const {type, searchTerm, stats} = props;

  useEffect(() => {
    if (type === "Stats,Country") {
      setMessage(`Total number of movies from ${searchTerm}: ${stats} `)
    }
    else if (type === "Stats,Year") {
      setMessage(`Total number of TV shows released in ${searchTerm}: ${stats}`)
    }
    else {
      setMessage(`Total number of movies and TV shows on Netflix: ${stats}`)
    }
  }, [stats, searchTerm, type]);

  return (
    <div className={styles.Wrapper}>
      <p className={styles.Stats}>{message}</p>

    </div>
  );
}

export default StatsCard;