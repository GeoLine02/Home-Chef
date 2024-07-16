import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDatePicker } from "../../../store/actions/actionCreator";
import DatePicker from "../../blocks/DatePicker/DatePicker";
import { RootState } from "../../../store/state/rootReducers";

const DatePickerBtn = () => {
  const dispatch = useDispatch();
  const isDatePickerOpen = useSelector(
    (state: RootState) => state.DatePicker.isDatePickerOpen
  );

  function handleOpenDatePicker() {
    dispatch(toggleDatePicker());
  }

  return (
    <div className="relative">
      <h1 className="w-max" onClick={handleOpenDatePicker}>
        Choose delivery date
      </h1>
      <div>{isDatePickerOpen && <DatePicker />}</div>
    </div>
  );
};

export default DatePickerBtn;
