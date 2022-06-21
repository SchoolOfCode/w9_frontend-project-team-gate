import "./App.css";
import Sidebar from "../Sidebar/Sidebar.js"
import PageOne from "../PageOne/PageOne.js";
import PageTwo from "../PageTwo/PageTwo.js";
import PageThree from "../PageThree/PageThree.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.less' 




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
      <div>
      <Sidebar/>
      </div>
    </div>
  );
}

export default App;
