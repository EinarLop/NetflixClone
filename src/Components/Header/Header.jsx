import Logo from "../logo/logopng.png";
import { useState, useEffect } from "react";
import Search from "../logo/lupa.png";
import React from "react";
import styles from "./HeaderStyles.module.scss";
import { BiSearchAlt } from "react-icons/bi";

const Header = (props) => {
  const [selection, setSelection] = useState("Movie name");

  const [searchBar, setSearchBar] = useState("");

  const handleOnChange = (e) => {
    console.log("search bar changed");
    console.log(e.target.value);
    setSearchBar(e.target.value);
  };

  const handleSelection = (e) => {
    console.log("Selection changed");
    console.log(e.target.value);
    setSelection(e.target.value);
  };

  const handleOnSubmit = () => {
    props.sendQuery(selection, searchBar);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoWrapper}>
        <img src={Logo} className={styles.Logo}></img>
        {/* <SiNetflix className={styles.Icon} /> */}
      </div>

      <div className={styles.InputContainer}>
        <input
          placeholder="Search"
          className={styles.InputBar}
          value={searchBar}
          onChange={handleOnChange}
        />
        <select
          className={styles.Drop}
          value={selection}
          onChange={handleSelection}
        >
          <optgroup label="Movies">
            <option value="Movie">By movie</option>
          </optgroup>
          <optgroup label="Actors">
            <option value="cast">By actor</option>
          </optgroup>
          <optgroup label="TV show">
            <option value="TV Show">By show name</option>
          </optgroup>
          <optgroup label="Stats">
            <option value="Stats,Country">Total movies by country</option>
            <option value="Stats,Titles">Movies and TV shows</option>
            <option value="Stats,Year">TV shows by release year</option>
          </optgroup>
        </select>
        <button className={styles.Button} onClick={handleOnSubmit}>
          <BiSearchAlt src={Search} className={styles.Icon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
