import React, { useState } from 'react';
import slidersetting from "../../../src/assets/slidersetting.png"
import './Filtersmall.css';

// MobileFilterButton component to display a filter button and options for mobile view
const MobileFilterButton = () => {
  // State to track whether the filter options are open or closed
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Function to toggle the visibility of filter options
  const toggleFilter = () => {
    setIsFilterOpen((prevIsFilterOpen) => !prevIsFilterOpen);
  };

  // Function to close the filter options
  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    <div className="mobile-filter-button-container">
      {/* Filter button to toggle the filter options */}
      <button className="mobile-filter-button" onClick={toggleFilter}>
        <div className='button-content'>Filter <span><img className='filter-icon-mobile' src={slidersetting} alt="filter-icon" /></span></div>
      </button>
      {/* Render the filter overlay and options when the filter is open */}
      {isFilterOpen && <div className="mobile-filter-overlay" onClick={closeFilter}></div>}
      {isFilterOpen && (
        <div className="mobile-filter-options">
          {/* Button to close the filter options */}
          <button className="close-button" onClick={closeFilter}>
            &times;
          </button>
          <div className="filter-content">
            {/* Filter header */}
            <h3 className='filter-label'>Filter</h3>

            {/* Sort By options */}
            <label className='sort-label' htmlFor="sortBy">Sort By:</label>
            <div className='sortdiv'>
              {/* Radio buttons for sorting options */}
              <div className='radio-group'><input className='sort-radio' type='radio' /><label className='sort-label-inner'>Featured</label></div>
              <div className='radio-group'><input className='sort-radio' type='radio' /><label className='sort-label-inner'>Newest</label></div>
              <div className='radio-group'><input className='sort-radio' type='radio' /><label className='sort-label-inner'>Price:High-Low</label></div>
              <div className='radio-group'><input className='sort-radio' type='radio' /><label className='sort-label-inner'>Price:Low-High</label></div>
            </div>
            {/* Line separator */}
            <div className='line' />

            {/* Gender options */}
            <label className='sort-label' htmlFor="sortBy">Gender</label>
            <div className='sortdiv'>
              {/* Checkbox options for gender */}
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>Men</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>Women</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>Unisex</label></div>
            </div>
            {/* Line separator */}
            <div className='line' />

            {/* Shop By Price options */}
            <label className='sort-label' htmlFor="sortBy">Shop By Price</label>
            <div className='sortdiv'>
              {/* Checkbox options for price range */}
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>Under ₹2500.00</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>₹2501.00 - ₹7500.00</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>₹7501.00 - ₹12 999.00</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>Over ₹13 000.00</label></div>
            </div>
            {/* Line separator */}
            <div className='line' />

            {/* Sale & Offer options */}
            <label className='sort-label' htmlFor="sortBy">Sale & Offer</label>
            <div className='sortdiv'>
              {/* Checkbox option for sale */}
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>Sale</label></div>
            </div>
            {/* Line separator */}
            <div className='line' />

            {/* Size options */}
            <label className='sort-label' htmlFor="sortBy">Size</label>
            <div className='sortdiv'>
              {/* Checkbox options for size */}
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>L</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>XL</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>XXL</label></div>
              <div className='radio-group'><input className='sort-radio' type='checkbox' /><label className='sort-label-inner'>XXXL</label></div>
            </div>
            {/* Line separator */}
            <div className='line' />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilterButton;
