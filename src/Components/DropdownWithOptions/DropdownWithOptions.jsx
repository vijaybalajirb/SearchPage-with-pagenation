import React, { useState, useEffect, useRef } from 'react';
import './DropdownWithOptions.css';

const DropdownWithOptions = ({ options, header, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={handleHeaderClick}>
        {header}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {type === 'normal' ? (
            <div className="options-grid">
              {options.map((option, index) => (
                <div key={index} className="option-item" onClick={handleOptionClick}>
                  <span className="option-label">{option.label}</span>
                  <span className="option-number">{option.number}</span>
                </div>
              ))}
            </div>
          ) : type === 'twoColumn' ? (
            <div className="options-grid-twoColumn">
              {options.map((option, index) => (
                <div key={index} className="option-item-twoColumn" onClick={handleOptionClick}>
                  <span className="option-label-twoColumn">{option.label}</span>
                  <span className="option-number-twoColumn">{option.number}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="options-grid-fourColumn">
              {options.map((option, index) => (
                <div key={index} className="option-item-fourColumn" onClick={handleOptionClick}>
                  <span className="option-label">{option.label}</span>
                  <span className="option-number">{option.number}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownWithOptions;


