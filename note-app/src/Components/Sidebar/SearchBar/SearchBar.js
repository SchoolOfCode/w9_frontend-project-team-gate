import React from "react";
export default function SearchBar(props) {

  return (
    <div>
      <form>
        <input type="text" placeholder="Search by Topic" onChange= {(e) => props.handleChange(e)} value = {props.text} />
        <button onClick={props.getAllTopics}>Submit</button>
      </form>
    </div>
  );
}//onClick={getAllTopics}
