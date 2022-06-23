import Style from "./AddNotesButton.module.css"
import { Button } from "@nextui-org/react";
import {useState} from 'react'



export default function AddNotesButton ({input, currentNote}){
const [newInput, setNewInput] = useState("")
// const currentNote = currentNote.note
console.log(currentNote.notes)


    function handleClick(){
        setNewInput({input})
        console.log(newInput)
    }
    

    
    return (
        <form className={Style.AddNotesButtonPosition}>
            <Button className={Style.AddNotesButton} auto color="warning" value="submit" onClick={(e) =>handleClick(e)}>Submit Notes</Button>
        </form>
    )

}