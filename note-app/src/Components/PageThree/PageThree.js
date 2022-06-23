import Title from "./Title/Title";
import NotesInput from "./NotesInput/NotesInput";
import Style from "./PageThree.module.css"
import AddNotesButton from "./AddNotesButton/AddNotesButton"
import { useLocation } from "react-router-dom";
import Note from "../PageTwo/Note/Note.js";
import React from "react";
import { useState } from "react";

export default function PageThree(props) {
  const location = useLocation();
  const data = location.state;
  //let navigate = useNavigate();
  //console.log(data);
  const [input, setInput] = useState("");

  function handleChange(e){
    setInput(e.target.value);
    console.log(input);
  }

  

  // async function newDate(e) {
  //   e.preventDefault();
  //   let searchedDate = await fetch(`http://localhost:3000/notes/date/${text}`);
  //   let searchResults = await searchedDate.json();
  //   //console.log(searchResults);
  //   navigate('/PageThree/', {state: searchResults.payload})
  // }

  return (
    <div className={Style.PageThree}>
      <Title />
      {data && data.map((note) => (
        <div>
       <Note key={note.id} date={note.date} topics={note.topics} notes={note.notes}></Note>
       <AddNotesButton input={input} currentNote={note}/>
      <NotesInput onInput={handleChange} value={note.notes} />
      </div>
      ))}

      {data && data.map((note) => {})}
      

    </div>
  );

      }
