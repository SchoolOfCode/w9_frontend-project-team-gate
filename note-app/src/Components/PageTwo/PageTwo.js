import Title from "./Title/Title";
import Note from "./Note/Note";
import { useLocation } from "react-router-dom";

export default function PageTwo() {
  const location = useLocation();
  const data = location.state;
  console.log("state");
  console.log(data);

  return (
    <div>
      <Title />
      {data[0].topics}
      {data.map((note) => (
       <Note key={note.id} date={note.date} notes={note.notes} topics={note.topics}></Note>
      ))}
      ;
    </div>
  );
}
