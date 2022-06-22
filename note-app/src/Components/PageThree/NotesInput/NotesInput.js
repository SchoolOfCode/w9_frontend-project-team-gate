import Style from "./NotesInput.module.css"
import { Input } from "antd";
const { TextArea } = Input;

export default function NotesInput() {
  return (
    <div className={Style.NotesInput}>
      <TextArea rows={50} placeholder="Enter Text Here..." maxLength={50} />
    </div>
  );
}


