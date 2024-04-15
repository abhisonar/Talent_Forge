/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { AutoComplete } from 'primereact/autocomplete';

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
        className="p-2 border border-slate-300 w-full"
        itemTemplate={optionTemplate || defaultOptionTemplate}
        options={displayOptions}
        optionLabel="label"
        placeholder={placeholder}
        value={selectedValue}
        onChange={selectionChange}
        checkmark={true}
        forceSelection={isDropDown}
        panelClassName="p-1 gap-2"></Dropdown>
      {error && (
        <span className={`text-red-600 text-xs ml-2 transition-all duration-200`}>{error}</span>
      )}
    </div>
  );
};

export default UiInputSelectComponenet;
