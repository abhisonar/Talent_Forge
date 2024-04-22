/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './ui-input-select.component.scss';

const UiInputSelectComponenet = ({
  apiFun,
  placeholder,
  options,
  isAsyncData,
  selectedValue,
  setSelectedValue,
  optionTemplate,
  isDropDown = true,
  error,
  onBlur,
  id,
  isClearable = true,
}) => {
  const [displayOptions, setDisplayOptions] = useState([]);
  const [filteredDisplayOptions, setFilteredDisplayOptions] = useState([]);

  const autocompleteRef = useRef();

  useEffect(() => {
    handleDataChange();
  }, [options]);

  const handleDataChange = () => {
    if (!isAsyncData) {
      setDisplayOptions(options?.length ? [...options] : []);
    } else {
      handleApiCall();
    }
  };

  const handleApiCall = () => {
    if (!apiFun) return;

    apiFun()
      .then((response) => {
        setDisplayOptions(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const selectionChange = (e) => {
    setSelectedValue && setSelectedValue(e?.value);
  };

  const defaultOptionTemplate = (option) => {
    return <div className="text-sm w-full p-1 rounded-md">{option?.label}</div>;
  };

  const handleComplete = (event) => {
    setFilteredDisplayOptions(
      event?.query
        ? displayOptions?.filter((item) =>
            item?.label?.toString().toLowerCase()?.includes(event.query)
          )
        : [...displayOptions]
    );
    autocompleteRef?.current?.show();
  };

  return (
    <div className="flex flex-col w-full">
      <Dropdown
        ref={autocompleteRef}
        itemTemplate={optionTemplate || defaultOptionTemplate}
        options={displayOptions}
        optionLabel="label"
        placeholder={placeholder}
        value={selectedValue}
        onChange={selectionChange}
        checkmark={true}
        forceSelection={isDropDown}
        showClear={isClearable}
        onBlur={onBlur}
        id={id}></Dropdown>
      <small
        id={id}
        className={`text-red-600 text-xs ml-2 transition-all duration-500 ${
          error ? 'opacity-100' : 'opacity-0'
        }`}>
        {error}
      </small>
    </div>
  );
};

export default UiInputSelectComponenet;
