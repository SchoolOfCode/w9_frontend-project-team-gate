import Title from "./Title/Title";
import NotesInput from "./NotesInput/NotesInput";
import TopicInput from "./TopicInput/TopicInput";
import Style from "./PageThree";
import AddNotesButton from "./AddNotesButton/AddNotesButton";
import React, { useState } from "react";

export default function PageThree(props) {
 

  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");
  //console.log(data);

  function postNote(){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topics: topic, notes: text, date: date }),
    };
    fetch("http://localhost:3000/notes/", requestOptions)
      .then((response) => response.json())

  };

  function textChange(e) {
    let newText = e.target.value;
    setText(newText);
    console.log(text)
  };

  function topicChange(e) {
    let newTopic = e.target.value;
    setTopic(newTopic);
    console.log(topic)
  };

  const date = "22-06-2022";



  return (
    <div className={Style.PageThree}>
      <Title />
        <TopicInput topicChange={topicChange} />
        <NotesInput textChange={textChange} />
        <AddNotesButton postNote={postNote} />
    </div>
  );
} 
