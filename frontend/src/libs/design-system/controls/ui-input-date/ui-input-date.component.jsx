/* eslint-disable react/prop-types */
import * as React from 'react';

import { Calendar } from 'primereact/calendar';

import './ui-input-date.component.scss';
import { DATE_FORMAT, RFC3339_FORMAT } from '@libs/resources/constant/date.constant';

const UiInputDate = ({ setInputDate, selectedDate, label, error }) => {
  const [date, setDate] = React.useState();

  const handleDateSelection = (e) => {
    setInputDate(e?.value);
  };
  return (
    <div className="flex flex-col">
      <Calendar
        inputClassName="p-2 !border !border-slate-300 w-full"
        value={selectedDate}
        onChange={handleDateSelection}
        placeholder={label}
        dateFormat={'dd-mm-yy'}
        showButtonBar
      />
      {error && (
        <span className={`text-red-600 text-xs ml-2 transition-all duration-200`}>{error}</span>
      )}
    </div>
  );
};

export default UiInputDate;
