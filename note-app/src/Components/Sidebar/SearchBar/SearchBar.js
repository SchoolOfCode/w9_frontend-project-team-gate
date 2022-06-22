import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  let navigate = useNavigate();

  // async function submitSearch(e) {
  //   // get the text from event and put in var
  //   // let topic = e.
  //   // call the back end route with the text and get response
  //   // let result = fetch(`localhost:3000/topics/$topic`)
  //   // useNavigate('/pageTwo/', result)
  
  
  //   // let searchTerm = e.
  //   // let notes = await fetch(`http://localhost:3000/notes/${searchTerm}`)
  async function getAllTopics(e) {
    e.preventDefault();
    let allTopics = await fetch("http://localhost:3000/notes/");
    let allTopicJsonData = await allTopics.json();
    console.log();
    navigate('/PageTwo/', {state: allTopicJsonData.data})
    // console.log(notes.data);
  }

  // async function searchByTopics(e) {
  //   e.preventDefault();
  //   let getTopics = await fetch(`http://localhost:3000/notes/${userTopicInput}`)
  //   let topicJsonData = await getTopics.json();
  //   navigate('/PageTwo/', {state: topicJsonData.data})
  // }

  return (
    <div>
      <form>
        <input type="text" placeholder="Search by Topic" />
        <button onClick={getAllTopics}>Submit</button>
      </form>
    </div>
  );
}

