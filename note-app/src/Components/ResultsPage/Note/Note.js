export default function Note(props) {
    return (
      <div>
        <h2>{props.topics}</h2>
        <p>{props.date}</p>
        <p>{props.notes}</p>
      </div>
    );
  }