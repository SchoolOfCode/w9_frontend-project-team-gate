import { Input } from "antd";
const { TextArea } = Input;

export default function NotesInput() {
  return (
    <>
      <TextArea rows={50} placeholder="Enter Text Here..." maxLength={50} />
    </>
  );
}


