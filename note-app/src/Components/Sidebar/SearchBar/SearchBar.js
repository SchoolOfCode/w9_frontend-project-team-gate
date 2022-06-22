import React from "react";
export default function SearchBar(props) {

  // async function submitSearch(e) {
  //   // get the text from event and put in var
  //   // let topic = e.
  //   // call the back end route with the text and get response
  //   // let result = fetch(`localhost:3000/topics/$topic`)
  //   // useNavigate('/pageTwo/', result)
  //   // let searchTerm = e.
  //   // let notes = await fetch(`http://localhost:3000/notes/${searchTerm}`)




  // async function searchByTopics(e) {
  //   e.preventDefault();
  //   let getTopics = await fetch(`http://localhost:3000/notes/${userTopicInput}`)
  //   let topicJsonData = await getTopics.json();
  //   navigate('/PageTwo/', {state: topicJsonData.data})
  // }

  return (
    <div>
      <form>
        <input type="text" placeholder="Search by Topic" onChange= {(e) => props.handleChange(e)} value = {props.text} />
        <button onClick={props.getAllTopics}>Submit</button>
      </form>
    </div>
  );
}//onClick={getAllTopics}
