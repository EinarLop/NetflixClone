import Logo from "../logo/logopng.png";
import Search from "../logo/lupa.png";
import React from "react";
import styles from "./HeaderStyles.module.scss";
import { BiSearchAlt } from "react-icons/bi"
const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoWrapper}>

        <img alt='logo' src={Logo} className={styles.Logo}></img>
        {/* <SiNetflix className={styles.Icon} /> */}
      </div>

      <div className={styles.InputContainer}>

        <input
          placeholder="Search"
          className={styles.InputBar}
        />
        <select className={styles.Drop}>
          <optgroup label="Movies">
            <option value="By movie">By movie</option>
          </optgroup>
          <optgroup label="Actors">
            <option value="By Actor">By actor</option>
          </optgroup>
          <optgroup label="TV show">
            <option value="By show name">By show name</option>
          </optgroup>
          <optgroup label="Totals">
            <option value="Movies by country">Total movies by country</option>
            <option value="Movies and TV show">Movies and TV show</option>
            <option value="TV show by release year">
              TV show by release year
            </option>
          </optgroup>
        </select>
        <BiSearchAlt src={Search} className={styles.Icon} />
      </div>
    </div>
  );
};

export default Header;
