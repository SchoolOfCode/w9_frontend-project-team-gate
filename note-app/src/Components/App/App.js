import "./App.css";
import PageOne from "../PageOne/PageOne.js";
import PageTwo from "../PageTwo/PageTwo.js";
import PageThree from "../PageThree/PageThree.js";
import { Routes, Route } from "react-router-dom";
import 'antd/dist/antd.less' 
import Sidebar from "../Sidebar/Sidebar.js";
import Style from "./App.module.css"


function App() {
  return (
    <div> 
      <div className={Style.SidebarLayout}>
        <div className={Style.Sidebar}>
      <Sidebar/>
      </div>
      </div>
      <div>
          <Routes >
            <Route path="/" element={<PageOne />} />
            <Route path="/PageOne" element={<PageOne />} />
            <Route path="/PageTwo" element={<PageTwo />} />
            <Route path="/PageThree" element={<PageThree />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

