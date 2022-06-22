import { Calendar } from 'antd';
import Style from "./SelectDate.module.css";

const SelectDate = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div className={Style.SelectDate}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};
export default SelectDate;



