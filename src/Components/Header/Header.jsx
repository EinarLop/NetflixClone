import Logo from "../logo/logopng.png";
import { useState, useEffect } from "react";
import Search from "../logo/lupa.png";
import React from "react";
import styles from "./HeaderStyles.module.scss";
import { BiSearchAlt } from "react-icons/bi";
import axios from 'axios'

const SERVER_URL = "http://localhost:3010";

const Header = (props) => {
  const [selection, setSelection] = useState("Movie name");
  const [searchBar, setSearchBar] = useState("");
  const [countryOptions, setCountryOptions] = useState(["Country name"]);

  useEffect(() => {
    // solicita country names 
    console.log("Effect countries")
    axios.get(`${SERVER_URL}/titles/countries`).then(response => {
      const countryList = response.data.data;
      console.log(countryList);
      setCountryOptions(countryList);
    }).catch(err => {
      console.error(err);
    })
  }, []);

  const handleOnChange = (e) => {
    // console.log("search bar changed");
    // console.log(e.target.value);
    setSearchBar(e.target.value);
  };

  const handleSelection = (e) => {
    // console.log("Selection changed");
    // console.log(e.target.value);
    if (e.target.value == "Stats,Country") {
      setSearchBar("");
    }
    setSelection(e.target.value);
  };

  const handleOnSubmit = () => {
    props.handleErrorMsg("");
    if (selection != "Stats,Titles" && searchBar.trim() === "") {
      props.handleErrorMsg("Input is empty, cannot send query");
      console.log("Input is empty, cannot send query");
      return;
    }

    if (
      selection == "Stats,Year" &&
      searchBar.trim() !== "" &&
      isNaN(searchBar)
    ) {
      props.handleErrorMsg("Year query needs a numeric input");
      console.log("Year query needs a numeric input");
      return;
    }

    props.sendQuery(selection, searchBar);
  };

  const normalInput = selection !== "Stats,Country";

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoWrapper}>
        <img src={Logo} className={styles.Logo}></img>
        {/* <SiNetflix className={styles.Icon} /> */}
      </div>

      <div className={styles.InputContainer}>
        {normalInput ?
          (
            <input
              placeholder="Search"
              className={styles.InputBar}
              value={searchBar}
              onChange={handleOnChange}
            />
          ) :
          (
            <select className={styles.Drop} value={searchBar} onChange={handleOnChange}>
              {countryOptions.map(c => (
                <option value={c}>{c}</option>
              ))}
            </select>
          )
        }
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
            <option value="Stats,Titles">Total number of movies and TV shows</option>
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
