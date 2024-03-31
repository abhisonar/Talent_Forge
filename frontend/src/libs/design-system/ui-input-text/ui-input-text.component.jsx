// eslint-disable-next-line react/prop-types
const UiInputText = ({
  label,
  id,
  type = "text",
  name,
  isRequired = false,
}) => {
  return (
    <>
      <div htmlFor={id} className="text-sm font-medium text-gray-900">
        {label}
      </div>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={isRequired}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

export default UiInputText;
