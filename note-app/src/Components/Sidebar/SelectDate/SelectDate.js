import { DatePicker } from 'antd';
import { Alert, Calendar } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import Style from "./SelectDate.module.css";

const SelectDate = () => {
  const [value, setValue] = useState(moment('2022-04-25'));
  const [selectedValue, setSelectedValue] = useState(moment('2022-08-13'));

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <DatePicker/>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar class={Style.Calendar} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </>
  );
};






export default SelectDate;

