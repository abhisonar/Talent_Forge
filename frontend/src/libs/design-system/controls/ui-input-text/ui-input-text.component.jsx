// eslint-disable-next-line react/prop-types
const UiInputText = ({ label, id, type = 'text', name, isRequired = false, onChange, error }) => {
  return (
    <>
      <div htmlFor={id} className="text-sm font-medium text-gray-900">
        {label}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        required={isRequired}
        autoComplete="off"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none p-2"
      />
      {error && <span className={`text-red-600`}>{error}</span>}
    </>
  );
};

export default UiInputText;
