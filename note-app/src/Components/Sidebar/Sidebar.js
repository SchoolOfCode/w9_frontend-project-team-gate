import MusicGenerator from "./MusicGenerator/MusicGenerator";
import SearchBar from "./SearchBar/SearchBar";
import SelectDate from "./SelectDate/SelectDate";

export default function Sidebar (){
    return (
        <div>
            <MusicGenerator />
            <SearchBar />
            <SelectDate />
        </div>
    )
}