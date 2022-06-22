import Style from "./AddNotesButton.module.css"
import { Button } from 'antd';

export default function AddNotesButton (){
        return (
          <div className={Style.AddNotesButton}>
            <form>
              <input type="text" placeholder="Search by Date" />
              <button>Submit</button>
            </form>
          </div>
        )
      }