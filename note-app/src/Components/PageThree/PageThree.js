import Title from "./Title/Title";
import NotesInput from "./NotesInput/NotesInput";
import Style from "./PageThree.module.css"
import AddNotesButton from "./AddNotesButton/AddNotesButton"
import { useLocation, useNavigate } from "react-router-dom";
import Note from "../PageTwo/Note/Note.js";
import React from "react";

export default function PageThree(note) {
  const location = useLocation();
  const data = location.state;
  let navigate = useNavigate();
  

  //console.log(data);

    async function updateNotes(text) {
      const putNotes = {
        method: 'PUT',
        body: JSON.stringify({notes : text})
    };
      let notesUpdate = await fetch(`http://localhost:3000/notes/date/${text}`, putNotes);
      let searchResults = await notesUpdate.json();
      navigate('/PageThree/', {state: searchResults.payload})
      //console.log(searchResults);
  
    }


  // function handleChange(input){
  //   setInput(input.target.value);
  //   console.log(input);
  // }
  
  return (
    <div className={Style.PageThree}>
      <Title />
      {data && data.map((note) => (
        <div>
        <div className={Style.NoteDisplay}>
       <Note key={note.id} date={note.date} topics={note.topics} notes={note.notes}></Note>
       </div>
       <AddNotesButton onClick={()=> updateNotes(NotesInput)}/>
       <NotesInput />
      </div>
      ))}
    </div>
  );
      }


