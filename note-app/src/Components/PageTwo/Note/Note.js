export default function Note(props) {
    return (
      <div>
      
          <h2>{props.topics}</h2>
          <p>{props.date}</p>
          <p>{props.notes}</p>
        </div>
    );
  }

//   <div>
//   <form>
//     <li>
//       <h2>{props.topics}</h2>
//       <p>{props.date}</p>
//     </li>
//     <button onClick={() => {seeInfo(index)}}>View Notes</button>
//     </form>
   
//     <p>{props.notes}</p>
    
//   </div>
// );