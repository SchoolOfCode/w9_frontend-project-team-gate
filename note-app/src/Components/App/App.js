import "./App.css";
import PageOne from "../PageOne/PageOne.js";
import PageTwo from "../PageTwo/PageTwo.js";
import PageThree from "../PageThree/PageThree.js";
import PageFour from "../PageFour/PageFour.js";
import { Routes, Route } from "react-router-dom";
import 'antd/dist/antd.less' 
import Sidebar from "../Sidebar/Sidebar";


function App() {
  return (
    <div> 
          <Routes >
            <Route path="/" element={<PageOne />} />
            <Route path="/PageOne" element={<PageOne />} />
            <Route path="/PageTwo" element={<PageTwo />} />
            <Route path="/PageThree" element={<PageThree />} />
            <Route path="/PageTwo/:id" element={<PageFour />} />
          </Routes>
      <div>
      <Sidebar/>
      </div>
    </div>
  );
}

export default App;

