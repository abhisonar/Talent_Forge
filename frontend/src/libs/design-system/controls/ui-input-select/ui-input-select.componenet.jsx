/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@shadcnui/components/ui/select';
const UiInputSelectComponenet = ({
  apiFun,
  placeholder,
  options,
  isAsyncData,
  selectedValue,
  setSelectedValue,
}) => {
  const [displayOptions, setDisplayOptions] = useState([]);

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

  return (
    <div>
      <Select onValueChange={selectionChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {displayOptions.map((option) => (
            <SelectItem key={option.id} value={option.id}>
              {option.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default UiInputSelectComponenet;
