import Title from "./Title/Title";
import SelectDate from "../Sidebar/SelectDate/SelectDate.js";
import SearchBar from "../Sidebar/SearchBar/SearchBar";
import MusicGenerator from "../Sidebar/MusicGenerator/MusicGenerator";

export default function PageTwo() {
  
  return (
    <div>
      <Title />
      <SelectDate />
      <SearchBar />
      <MusicGenerator />
    </div>
  );
}