import Title from "./Title/Title";
import SubTitle from "./SubTitle/SubTitle";
import Style from "./PageOne.module.css"
import Sidebar from "../Sidebar/Sidebar";

export default function PageOne() {
  
  return (
    <div className={Style.PageOne}>
      <Title />
      <SubTitle />
      <Sidebar/>
    </div>
  );
}
