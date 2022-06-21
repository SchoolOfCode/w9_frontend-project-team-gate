import {Link} from "react-router-dom"

export default function PageOne() {
  return (
    <div>
      <h1>Geta Note</h1>;
      <h3>Select a date or topic and share your notes</h3>;
      <Link to="/page2">
      <button>Hello</button>
      </Link>
    </div>


  );
}
