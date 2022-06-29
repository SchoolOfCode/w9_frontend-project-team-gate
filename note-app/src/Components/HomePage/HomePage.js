import Title from "../Title/Title";
import SubTitle from "./SubTitle/SubTitle";
import Style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={Style.HomePage}>
      <Title className={Style.TitleHomePage}/>
      <SubTitle />
    </div>
  );
}
