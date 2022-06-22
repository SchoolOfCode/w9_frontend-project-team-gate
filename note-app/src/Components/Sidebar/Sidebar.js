import MusicGenerator from "./MusicGenerator/MusicGenerator";
import SearchBar from "./SearchBar/SearchBar";
import SelectDate from "./SelectDate/SelectDate";
import AllNotes from "./AllNotes/AllNotes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar (){

    const [text, setText] = useState("");
    let navigate = useNavigate();

    function handleChange(event){
      setText(event.target.value);
      console.log(text);
    }

    async function getSearchedTopics(e) {
        e.preventDefault();
        let searchedTopics = await fetch(`http://localhost:3000/notes/topics/${text}`);
        let searchResults = await searchedTopics.json();
        console.log(searchResults);
        navigate('/PageTwo/', {state: searchResults.payload})
      }
    
      async function getSearchedDate(e) {
        e.preventDefault();
        let searchedDate = await fetch(`http://localhost:3000/notes/date/${text}`);
        let searchResults = await searchedDate.json();
        //console.log(searchResults);
        navigate('/PageTwo/', {state: searchResults.payload})
      }
      async function getAllTopics(e) {
        e.preventDefault();
        let allTopics = await fetch("http://localhost:3000/notes/");
        let allTopicJsonData = await allTopics.json();
        console.log();
        navigate('/PageTwo/', {state: allTopicJsonData.data})
      }

    return (
        <div>
            <MusicGenerator />
            <SearchBar handleChange={handleChange} getAllTopics={getSearchedTopics} text={text}/>
            <SelectDate handleChange={handleChange} getDate={getSearchedDate} text={text}/> 
            <AllNotes getAllTopics={getAllTopics}  />
        </div>
    )
}