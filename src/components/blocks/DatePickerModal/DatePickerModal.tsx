import { ReactNode } from "react";
import { createPortal } from "react-dom";
import DatePicker from "../DatePicker/DatePicker";

type DatePickerModalProps = {
  children: ReactNode;
};

const DatePickerModal = ({ children }: DatePickerModalProps) => {
  return createPortal(
    <>
      <DatePicker />
      {children}
    </>,
    document.getElementById("DatePickerModal") as HTMLElement
  );
};

export default DatePickerModal;
