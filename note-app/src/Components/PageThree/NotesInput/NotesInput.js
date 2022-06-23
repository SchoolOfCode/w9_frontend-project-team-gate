import Style from "./NotesInput.module.css"
import { Input } from "antd";
import { useState } from "react";
const { TextArea } = Input;





export default function NotesInput() {
  /*const [input, setInput] = useState("");

  function handleChange(e){
    setInput(e.target.value);
    console.log(input);
  }*/
  
  return (
    <div className={Style.NotesInputPosition}>
      <TextArea type="text" className={Style.NotesInput} /*rows={50}*/ maxLength={50}/>
    </div>
  );
}


