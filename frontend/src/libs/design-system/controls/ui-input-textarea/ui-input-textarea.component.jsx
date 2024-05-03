/* eslint-disable react/prop-types */
import { InputTextarea } from "primereact/inputtextarea";

const UiInputTextAreaComponent = ({
  value,
  onChange,
  row = 3,
  autoResize = true,
  placeholder,
  
}) => {
  return (
    <InputTextarea
      className="w-full"
      autoResize={autoResize}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={row}
      placeholder={placeholder}
    />
  );
};

export default UiInputTextAreaComponent;
