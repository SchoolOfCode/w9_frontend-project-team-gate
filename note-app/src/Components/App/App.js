import "./App.css";
import PageOne from "../PageOne/PageOne.js";
import PageTwo from "../PageTwo/PageTwo.js";
import PageThree from "../PageThree/PageThree.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/PageTwo" element={<PageTwo />} />
          <Route path="/PageThree" element={<PageThree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
