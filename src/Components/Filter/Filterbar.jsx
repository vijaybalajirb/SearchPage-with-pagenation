import React, { useState } from 'react';
import DropdownWithOptions from '../DropdownWithOptions/DropdownWithOptions';
import filtericon from '../../../src/assets/filtericon.png';
import './Filterbar.css';

const FilterBar = () => {
  // State to track whether the filter dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Sample options for different filter categories
  const optionsCategory = [
    { label: 'SKATEBOARD', number: 12, type: "normal" },
    { label: 'CLOTHING', number: 23, type: "normal" },
    { label: 'ACCESSORIES', number: 123, type: "normal" },
  ];
  const optionsGender = [
    { label: 'Male', number: 12, type: 'twoColumn' },
    { label: 'Female', number: 12, type: 'twoColumn' },
  ];
  const optionsColors = [
    { label: 'Red', number: 12 },
    { label: 'Green', number: 12 },
  ];
  const optionsPrice = [
    { label: '1000+', number: 12 },
    { label: '2000+', number: 12 },
  ];
  const size = [
    { label: 'S', number: 8 },
    { label: 'M', number: 12 },
    { label: 'L', number: 13 },
    { label: 'xl', number: 10 },
    { label: 'XXL', number: 7 },
    { label: 'ONE', number: 5 },
    { label: '8"', number: 7 },
    { label: '8.125"', number: 5 },
    { label: '8.25"', number: 8 },
    { label: '8.325"', number: 8 },
    { label: '8.25"', number: 8 },
    { label: '9"', number: 8 },
  ];

  return (
    <div className="filter-container">
      {/* Button to toggle the filter dropdown */}
      <button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} className="filter-button">
        <span className="filtericonspan">
          <img className="filter-icon" src={filtericon} alt="filtericon" />
        </span>
        Filter
      </button>

      {/* Render the filter options when the dropdown is open */}
      {isOpen && <div className="filter-innercontainer">
        {/* Dropdown for category */}
        <DropdownWithOptions options={optionsCategory} header={"Category"} type={"normal"} />

        {/* Dropdown for gender */}
        <DropdownWithOptions options={optionsGender} header={"Gender"} type={"twoColumn"} />

        {/* Dropdown for colors */}
        <DropdownWithOptions options={optionsColors} header={"Colors"} type={"normal"} />

        {/* Dropdown for size */}
        <DropdownWithOptions options={size} header={"Size"} />

        {/* Dropdown for price */}
        <DropdownWithOptions options={optionsPrice} header={"Price"} type={"normal"} />
      </div>}
    </div>
  );
};

export default FilterBar;
