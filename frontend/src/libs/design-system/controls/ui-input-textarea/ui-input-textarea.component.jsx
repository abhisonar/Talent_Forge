/* eslint-disable react/prop-types */
import {InputTextarea} from "primereact/inputtextarea";

const UiInputTextAreaComponent =
    ({
         value,
         onChange,
         row = 3,
         autoResize = true,
         placeholder,
         error,
         className
     }) => {
        return (
            <div className={`flex flex-col ${className}`}>
                <InputTextarea
                    className="w-full"
                    autoResize={autoResize}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={row}
                    placeholder={placeholder}
                />
                {error && (
                    <span className={`text-red-600 text-xs ml-2 transition-all duration-200`}>{error}</span>
                )}
            </div>
        );
    };

export default UiInputTextAreaComponent;
