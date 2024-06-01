import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dayjs from 'dayjs';
const DeliveryTimeWrapper = () => {

  return (
    <div className="flex flex-col gap-4 ">
    <h2>Today</h2>
    <div className="flex gap-4 ">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="From" />
      </DemoContainer>
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Till" />
      </DemoContainer>
     
    </LocalizationProvider> 
    </div>

    <div className="flex gap-4 ">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
          <DatePicker defaultValue={dayjs('2022-04-17')} />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker label="Time" />
    </LocalizationProvider>
    
    </div>
  </div>
  )
}

export default DeliveryTimeWrapper;
