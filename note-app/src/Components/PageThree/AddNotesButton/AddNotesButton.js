import Style from "./AddNotesButton.module.css"
import { Button } from 'antd';

export default function AddNotesButton (){
    function handleClick(){
        alert("Notes Added");

    }
    return (
        <form className={Style.AddNotesButton}>
            <Button type="primary" shape="round" value="submit" onClick={handleClick}>Submit Notes</Button>
        </form>
    )

}