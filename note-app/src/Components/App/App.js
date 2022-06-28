import "./App.css";
import HomePage from "../HomePage/HomePage.js";
import ResultsPage from "../ResultsPage/ResultsPage.js";
import NotesPage from "../NotesPage/NotesPage.js";
import { Routes, Route } from "react-router-dom";
import 'antd/dist/antd.less' 
import Sidebar from "../Sidebar/Sidebar.js";
import Style from "./App.module.css"

// The routes are linked to each of the pages
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
            <Route path="/" element={<HomePage />} />
            <Route path="/ResultsPage" element={<ResultsPage />} />
            <Route path="/NotesPage" element={<NotesPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

