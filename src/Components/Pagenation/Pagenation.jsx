import React from 'react';
import './Pagenation.css'

// PaginationControls component to handle pagination controls
const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  // Function to handle clicking on the "Previous" button
  const handlePrevPage = () => {
    onPageChange(currentPage - 1); // Call the onPageChange function with the previous page number
  };

  // Function to handle clicking on the "Next" button
  const handleNextPage = () => {
    onPageChange(currentPage + 1); // Call the onPageChange function with the next page number
  };

  // Function to handle clicking on a specific page number
  const handlePageClick = (page) => {
    onPageChange(page); // Call the onPageChange function with the selected page number
  };

  // Function to generate the page numbers for pagination
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`} // Add 'active' class to the current page number
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  // Render the pagination controls
  return (
    <div className="pagination-controls">
      {/* "Previous" button */}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        &lt; Prev
      </button>

      {/* Render the generated page numbers */}
      {generatePageNumbers()}

      {/* "Next" button */}
      <button onClick={handleNextPage} disabled={currentPage >= totalPages-1}>
        Next &gt;
      </button>
    </div>
  );
};

export default PaginationControls;
