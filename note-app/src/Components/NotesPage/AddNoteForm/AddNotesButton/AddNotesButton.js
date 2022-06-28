import Style from "./AddNotesButton.module.css";

export default function AddNotesButton(props) {
  // This adds new notes to the database, viewable via search by topic
  return (
    <form className={Style.AddNotesButtonPosition}>
      <button
        className={Style.AddNotesButton}
        onClick={props.postNote}
        value="submit"
      >
        Submit Notes
      </button>
    </form>
  );
}
