import Style from "./SelectDate.module.css";
import { DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const SelectDate = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    {/* <DatePicker onChange={onChange} picker="week" /> */}
    {/* <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" /> */}
  </Space>
);

export default SelectDate;


















