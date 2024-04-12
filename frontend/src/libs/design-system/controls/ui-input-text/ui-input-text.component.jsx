/* eslint-disable react/prop-types */
import { Input } from '@shadcnui/components/ui/input';
const UiInputText = ({
  label,
  placeholder,
  id,
  type = 'text',
  name,
  isRequired = false,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={isRequired}
        />
        {/* <span className="absolute top-1/2 -translate-y-1/2 left-3 text-sm font-medium text-gray-900">
          {label}
        </span> */}
      </div>
      {error && (
        <span className={`text-red-600 text-xs ml-2 transition-all duration-200`}>{error}</span>
      )}
    </div>
  );
};

export default UiInputText;
