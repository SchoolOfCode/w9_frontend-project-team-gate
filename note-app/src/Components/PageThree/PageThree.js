import Title from "./Title/Title";
import NotesInput from "./NotesInput/NotesInput";
import Style from "./PageThree"
import AddNotesButton from "./AddNotesButton/AddNotesButton"


export default function PageThree() {
  
  return (
    <div className={Style.PageThree}>
      <Title />
      <NotesInput />
      <AddNotesButton />
    </div>
  );
}