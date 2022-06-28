export default function Note(props) {
  //This is displaying the existing notes in the search results
    return (
      <div>
        <h2>{props.topics}</h2>
        <p>{props.date}</p>
        <p>{props.notes}</p>
      </div>
    );
  }