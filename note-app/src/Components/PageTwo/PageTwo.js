import Title from "./Title/Title";
import Note from "./Note/Note";
import { useLocation } from "react-router-dom";
import Style from "./PageTwo.module.css"




export default function PageTwo() {
  const location = useLocation();
  const data = location.state;
  console.log("state");
  console.log(data);

  return (
    
    <div className={Style.PageTwo}>
      <Title />
      {data.map((note) => (
       <Note key={note.id} date={note.date} notes={note.notes} topics={note.topics}></Note>
      ))};
    </div>
  );
}
