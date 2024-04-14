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

  const selectionChange = (value) => {
    setSelectedValue && setSelectedValue(value);
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
    <AutoComplete
      ref={autocompleteRef}
      inputClassName="p-2 pr-6 border border-slate-300 w-full"
      itemTemplate={optionTemplate || defaultOptionTemplate}
      suggestions={filteredDisplayOptions}
      placeholder={placeholder}
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.value)}
      completeMethod={handleComplete}
      checkmark={true}
      onFocus={handleComplete}
      forceSelection={isDropDown}
      field="label"
      panelClassName="p-1 gap-2"></AutoComplete>
  );
};

export default UiInputSelectComponenet;
