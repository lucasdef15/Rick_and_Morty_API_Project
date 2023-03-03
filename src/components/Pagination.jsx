import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import '../styles/Pagination.css';

const Pagination = ({ totalPages, currentPage, onPageClick }) => {
  const MAX_PAGE_BUTTONS = 5;
  const pageButtons = [];

  const getPageButtons = () => {
    // determine the range of page numbers to display
    let startPage, endPage;
    if (totalPages <= MAX_PAGE_BUTTONS) {
      // display all page numbers if the total number of pages is less than or equal to MAX_PAGE_BUTTONS
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= Math.floor(MAX_PAGE_BUTTONS / 2) + 1) {
      // display the first MAX_PAGE_BUTTONS page numbers if the current page is in the first half
      startPage = 1;
      endPage = MAX_PAGE_BUTTONS;
    } else if (currentPage > totalPages - Math.floor(MAX_PAGE_BUTTONS / 2)) {
      // display the last MAX_PAGE_BUTTONS page numbers if the current page is in the last half
      startPage = totalPages - MAX_PAGE_BUTTONS + 1;
      endPage = totalPages;
    } else {
      // display MAX_PAGE_BUTTONS page numbers centered around the current page
      startPage = currentPage - Math.floor(MAX_PAGE_BUTTONS / 2);
      endPage = currentPage + Math.floor(MAX_PAGE_BUTTONS / 2);
    }

    // create page buttons for the range of page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`Pagination__button ${
            currentPage === i ? 'Pagination__button--active' : ''
          }`}
          onClick={() => onPageClick(i)}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="Pagination">
      <button
        className="Pagination__button"
        onClick={() => onPageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FiArrowLeft />
      </button>
      {getPageButtons()}
      <button
        className="Pagination__button"
        onClick={() => onPageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
