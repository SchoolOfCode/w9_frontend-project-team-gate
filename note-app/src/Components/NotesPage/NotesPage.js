import Style from "./NotesPage.module.css";
import { useLocation } from "react-router-dom";
import Note from "../ResultsPage/Note/Note.js";
import React from "react";
import AddNoteForm from "./AddNoteForm/AddNoteForm";
import Title from "../Sidebar/Title/Title";

//This displays the existing notes and allows new notes to be added
export default function NotesPage(props) {
  const location = useLocation();
  const data = location.state;

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
              <Title className={Style.NotesPageTitle}/>
            </div>
            <AddNoteForm />
          </div>
        ))}
    </div>
  );
}
