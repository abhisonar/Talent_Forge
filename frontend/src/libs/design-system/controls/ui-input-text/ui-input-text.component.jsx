/* eslint-disable react/prop-types */
import { Input } from '@shadcnui/components/ui/input';
import { InputText } from 'primereact/inputtext';
const UiInputText = ({
  label,
  placeholder,
  id,
  type = 'text',
  name,
  isRequired = false,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="relative">
        <InputText
          id={id}
          name={name}
          type={type}
          aria-describedby={id}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          required={isRequired}
          className={`p-2 w-full border ${error ? 'border-red-600' : 'border-slate-300'}`}
        />
        <span className="absolute top-1/2 -translate-y-1/2 left-3 text-sm font-medium text-gray-900">
          {label}
        </span>
      </div>
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

export default UiInputText;
