import Title from "./Title/Title";
import Note from "./Note/Note";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Style from "./PageTwo.module.css"




export default function PageTwo() {
  const location = useLocation();
  const data = location.state;
  console.log("state");
  console.log(data);
  let navigate = useNavigate();

 async function linkPage(e) {
    e.preventDefault();
   
    let linkJsonData = await data.json();
    
  navigate('/PageTwo/', {state: linkJsonData.data})
  
  //const linkData = data && data[0].date
  }


  return (
    
    <div className={Style.PageTwo}>
      <Title />
      <nav>
      <Link to="/PageTwo" state={{ from: data }}>
      
      {data.map((note) => (
       <Note  key ={note.id} id = {note.id} date={note.date} topics={note.topics}></Note>))};
       
      </Link>
      </nav>
     
  
    </div>
  );
}





// <div className={Style.PageTwo}>
//       <Title />
//       <nav>
//       <Link to="/PageThree">{data && data[0].date}</Link>
//       </nav>
//       {data && data.map((note) => (
//        <Note key={note.id} date={note.date} notes={note.notes} topics={note.topics}></Note>
//       ))}
//       ;
//     </div>