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
} from '@/components/ui/select';
const UiInputSelectComponenet = ({ apiFun }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    handleApiCall();
  }, []);

  const handleApiCall = () => {
    if (!apiFun) return;

    apiFun()
      .then((response) => {
        setOptions(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option._id} value={option._id}>
                {option.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UiInputSelectComponenet;
