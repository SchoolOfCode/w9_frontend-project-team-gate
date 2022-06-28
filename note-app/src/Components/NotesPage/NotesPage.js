import Title from "./Title/Title";
import NotesInput from "./AddNoteForm/NotesInput/NotesInput";
import Style from "./NotesPage.module.css";
import AddNotesButton from "./AddNoteForm/AddNotesButton/AddNotesButton";
import { useLocation } from "react-router-dom";
import Note from "../ResultsPage/Note/Note.js";
import React from "react";
import { useState } from "react";
import AddNoteForm from "./AddNoteForm/AddNoteForm";

export default function NotesPage(props) {
  const location = useLocation();
  const data = location.state;
  //let navigate = useNavigate();
  //console.log(data);

  // async function newDate(e) {
  //   e.preventDefault();
  //   let searchedDate = await fetch(`http://localhost:3000/notes/date/${text}`);
  //   let searchResults = await searchedDate.json();
  //   //console.log(searchResults);
  //   navigate('/NotesPage/', {state: searchResults.payload})
  // }

  return (
    <div className={Style.NotesPage}>
      <Title />
      {data &&
        data.map((note) => (
          <div>
            <div className={Style.NoteDisplay}>
              <Note
                key={note.id}
                date={note.date}
                topics={note.topics}
                notes={note.notes}
              ></Note>
            </div>
            <AddNoteForm />
          </div>
        ))}
    </div>
  );
}
