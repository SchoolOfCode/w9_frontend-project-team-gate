import Style from "./SelectDate.module.css"

const SelectDate = (props) => {

    return (
      <div className={Style.SelectDate}>
        <form>
          <input type="text" placeholder="DD-MM-YYYY" onChange= {(e) => props.handleChange(e)} value = {props.text} />
          <button className={Style.button}onClick={props.getDate}>Submit</button>
        </form>
      </div>
    );
  }
export default SelectDate;



