import React, { useState, useEffect, useRef } from "react";

const CustomDropdown = ({ options, selected, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block w-full z-50">
      <div
        className="text-gray-900 text-sm rounded-lg px-10 py-3 cursor-pointer shadow-lg select"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || placeholder}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg- select">
          <ul className="max-h-60 overflow-auto rounded-md py-1 text-base leading-6 shadow-xs">
            {options.map((option, index) => (
              <li
                key={index}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 bg-[rgba(221, 221, 221, 0.1)] hover:bg-gray-200 border-b border-gray-100"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
