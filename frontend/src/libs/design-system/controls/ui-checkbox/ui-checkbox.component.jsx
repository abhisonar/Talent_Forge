/* eslint-disable react/prop-types */
import { Checkbox } from "primereact/checkbox";

const UiCheckBoxComponent = ({ ischecked, onChange, label, id , value}) => {
  return (
    <div className="flex justify-content-center">
    
      <Checkbox
      value={ischecked}
        inputId={id}
        onChange={(e) => onChange(e.checked)}
        checked={ischecked}
      ></Checkbox>
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default UiCheckBoxComponent;
