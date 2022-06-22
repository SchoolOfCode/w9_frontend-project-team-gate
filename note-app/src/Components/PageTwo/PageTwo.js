import Title from "./Title/Title";
import Note from "./Note/Note";
import { useLocation, Link } from "react-router-dom";
import Style from "./PageTwo.module.css"

export default function PageTwo() {
  const location = useLocation();
  const data = location.state;
  //console.log("state");
  //console.log(data);

  return (
    
    <div className={Style.PageTwo}>
      <Title />
      <nav>
      <Link to="/PageThree">{data[0].topics}</Link>
      {data.map((note) => (
       <Note key={note.id} date={note.date} notes={note.notes} topics={note.topics}/>
      ))}
      </nav>
    </div>
  );
}