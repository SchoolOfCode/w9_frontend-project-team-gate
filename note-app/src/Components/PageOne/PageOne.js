import Title from "./Title/Title";
css-module
import SubTitle from "./SubTitle/SubTitle";
import Style from "./PageOne.module.css"

import Sidebar from "../Sidebar/Sidebar";
main

export default function PageOne() {
  
  return (
    <div className={Style.PageOne}>
      <Title />

      <SubTitle />

      <Sidebar/>
 main
    </div>
  );
}
