import AddNotesButton from "./AddNotesButton/AddNotesButton";
import NotesInput from "./NotesInput/NotesInput";
import { useState } from "react";
import TopicInput from "./TopicInput/TopicInput";
import DateInput from "./DateInput/DateInput";

//Enables notes to be posted to the database
export default function AddNoteForm() {
  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");

  function postNote() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topics: topic, notes: text, date: date }),
    };
    fetch("http://localhost:3000/notes/", requestOptions).then((response) =>
      response.json()
    );
  }

  function textChange(e) {
    let newText = e.target.value;
    setText(newText);
    console.log(text);
  }

  function topicChange(e) {
    let newTopic = e.target.value;
    setTopic(newTopic);
    console.log(topic);
  }

  function dateChange(e) {
    let newDate = e.target.value;
    setDate(newDate);
    console.log(topic);
  }

//This is displaying the components to add new notes
  return (
    <div>
      <AddNotesButton postNote={postNote} />
      <TopicInput topicChange={topicChange} />
      <DateInput dateChange={dateChange} />
      <NotesInput textChange={textChange} />
    </div>
  );
}
