const SelectDate = (props) => {

    return (
      <div>
        <form>
          <input type="text" placeholder="DD-MM-YYYY" onChange= {(e) => props.handleChange(e)} value = {props.text} />
          <button onClick={props.getDate}>Submit</button>
        </form>
      </div>
    );
  }
export default SelectDate;



