import { ReactComponent as Logo } from './logo/netflix.png';
import React from "react";
import styles from "./HeaderStyles.module.scss";

const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Logo}>
        {/* <Logo /> */}
        <p className={styles.Title}>Netflix</p>
      </div>
      <div>
        <input placeholder='Introduce la palabra clave' className={styles.InputBar} />
      </div>


    </div>
  );
}

export default Header;
