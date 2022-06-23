import Title from "./Title/Title";
import Note from "./Note/Note";
import { useLocation, useNavigate } from "react-router-dom";
import Style from "./PageTwo.module.css"

export default function PageTwo() {
  const location = useLocation();
  const data = location.state;
  let navigate = useNavigate();
  //console.log("state");
  //console.log(data);

  async function newDate(text) {
    let searchedDate = await fetch(`http://localhost:3000/notes/date/${text}`);
    let searchResults = await searchedDate.json();
    //console.log(searchResults);
    navigate('/PageThree/', {state: searchResults.payload})
  }

  return (
    
    <div className={Style.PageTwo}>
      <Title />
      {data && data.map((note) => (
        <nav>
       <button onClick={()=> newDate(note.date)}>{note.date}</button>
       <Note key={note.id} date={note.date} notes={note.notes} topics={note.topics}></Note>
       </nav>
      ))}
      ;
    </div>
  )}
      