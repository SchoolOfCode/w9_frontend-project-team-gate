import Title from "./Title/Title";
import NotesInput from "./NotesInput/NotesInput";
import Style from "./PageThree"


export default function PageThree() {
  
  return (
    <div className={Style.module.css}>
      <Title />
      <NotesInput />
    </div>
  );
}