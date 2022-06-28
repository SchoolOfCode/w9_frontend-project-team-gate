import React from "react";
import Style from "./SearchBar.module.css";

//This is the search bar for search by topic
export default function SearchBar(props) {
  return (
    <div className={Style.SearchBar}>
      <form>
        <input
          type="text"
          placeholder="Search by Topic"
          onChange={(e) => props.handleChange(e)}
          value={props.text}
        />
        <button className={Style.Button} onClick={props.getAllTopics}>
          Submit
        </button>
      </form>
    </div>
  );
}
