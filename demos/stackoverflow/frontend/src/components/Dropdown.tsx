import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function Dropdown({ options, onSelect }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(options[0] || '');
    const dropdownRef = useRef<HTMLDivElement>(null);


    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option); // Trigger the callback with the selected option
        setIsOpen(false); // Close the dropdown after selection
      };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          >
            {selectedOption}
            <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
  
        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="py-1">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)} 
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  

