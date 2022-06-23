import Style from "./AddNotesButton.module.css"
import { Button } from "@nextui-org/react";


export default function AddNotesButton (){
    function handleClick(){

    }
    return (
        <form className={Style.AddNotesButtonPosition}>
            <Button className={Style.AddNotesButton} auto color="warning" value="submit" onClick={handleClick}>Submit Notes</Button>
        </form>
    )

}