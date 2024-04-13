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
const UiInputSelectComponenet = ({ apiFun, label }) => {
  const [displayOptions, setDisplayOptions] = useState([]);

  useEffect(() => {
    handleApiCall();
  }, []);

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

  return (
    <div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={label} />
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
