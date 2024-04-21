/* eslint-disable react/prop-types */

import { Calendar } from 'primereact/calendar';

import './ui-input-date.component.scss';

const UiInputDate = ({ setInputDate, selectedDate, label, error, onBlur }) => {
  const handleDateSelection = (e) => {
    setInputDate(e?.value);
  };
  return (
    <div className="flex flex-col">
      <Calendar
        inputClassName={error ? 'control-error border border-red-600' : ''}
        value={selectedDate}
        onChange={handleDateSelection}
        placeholder={label}
        dateFormat={'dd-mm-yy'}
        showButtonBar
        onBlur={onBlur}
      />
      {error && (
        <span className={`text-red-600 text-xs ml-2 transition-all duration-200`}>{error}</span>
      )}
    </div>
  );
};

export default UiInputDate;
