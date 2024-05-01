/* eslint-disable react/prop-types */

const UiTextInfo = ({ label, children, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-sm text-gray-700">{children}</span>
    </div>
  );
};

export default UiTextInfo;
