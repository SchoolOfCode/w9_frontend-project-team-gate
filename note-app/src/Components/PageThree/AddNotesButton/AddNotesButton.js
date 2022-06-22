import Style from "./AddNotesButton.module.css"
import { Button } from 'antd';

export default function AddNotesButton (props){
    return (
        <form className={Style.AddNotesButton}>
            <Button type="primary" shape="round" value="submit" onClick={props.postNote}>Submit Notes</Button>
        </form>
    )

}