import { Navigate } from 'react-router-dom';


export default function Note(props) {
    return (
    
      <div onClick = {() => <Navigate to = {`/PageTwo/${props.id}`}/> } >
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


