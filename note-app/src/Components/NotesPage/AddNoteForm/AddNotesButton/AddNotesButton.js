import Style from "./AddNotesButton.module.css"

export default function AddNotesButton (props){
    
    return (
        <form className={Style.AddNotesButtonPosition}>
            <button className={Style.AddNotesButton} onClick={props.postNote} value="submit">Submit Notes</button>
        </form>
    )

}