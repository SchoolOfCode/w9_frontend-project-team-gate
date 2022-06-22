import Title from "./Title/Title";
import SubTitle from "./SubTitle/SubTitle";
import Style from "./PageOne.module.css"

export default function PageOne() {
  
  return (
    <div className={Style.PageOne}>
      <Title />
      <SubTitle />
    </div>
  );
}
