import { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const UiInputSelectComponenet = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/colleges")
      .then((response) => {
        const titles = response.data.map((college) => college.title);
        setOptions(titles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
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
