import Style from "./AddNotesButton.module.css"
import {useState} from 'react'



export default function AddNotesButton ({input}){
const [newInput, setNewInput] = useState("")

    function handleClick(){
        setNewInput({input})
        console.log(newInput)
    }

    
    return (
        <form className={Style.AddNotesButtonPosition}>
            <button className={Style.AddNotesButton} onClick={(e) =>handleClick(e)}>Submit Notes</button>
        </form>
    )

}