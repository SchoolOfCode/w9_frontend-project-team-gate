import Title from "../Sidebar/Title/Title.js";
import Note from "./Note/Note";
import { useLocation, useNavigate } from "react-router-dom";
import Style from "./ResultsPage.module.css";


//This displays the search results for existing notes, when searched by topic 
export default function ResultsPage() {
  const location = useLocation();
  const data = location.state;
  let navigate = useNavigate();
  //console.log("state");
  //console.log(data);

  async function newDate(text) {
    let searchedDate = await fetch(`http://localhost:3000/notes/date/${text}`);
    let searchResults = await searchedDate.json();
    //console.log(searchResults);
    navigate('/NotesPage/', {state: searchResults.payload})
  }

  return (
    
    <div className={Style.ResultsPage}>
      <Title className={Style.ResultsPageTitle}/>
      {data && data.map((note) => (
        <nav>
        <button className={Style.ResultButton} onClick={()=> newDate(note.date)}>Click here to edit {note.date}</button>
       <div className={Style.SearchResults}>
       <Note key={note.id} date={note.date} notes={note.notes} topics={note.topics}></Note>
       </div>
       </nav>
      ))}
      ;
    </div>
  )}
      