import React, { useEffect, useState } from 'react';
import styles from "./StatCardStyles.module.scss"





const StatsCard = (props) => {
  const [message, setMessage] = useState();
  const [type, setType] = useState("")


  useEffect(() => {
    setType(props.type.split(",")[1])
    if (type === "Country") {

      setMessage(`Total number of movies from ${props.searchTerm}: ${props.stats} `)
    }
    else if (type === "Year") {
      setMessage(`Total number of TV shows released in ${props.searchTerm}: ${props.stats}`)
    }
    else {
      setMessage(`Total number of movies and TV shows on Netflix: ${props.stats}`)
    }
  }, [props.stats, props.searchTerm]);

  return (
    <div className={styles.Wrapper}>
      <p className={styles.Stats}>{message}</p>

    </div>
  );
}

export default StatsCard;