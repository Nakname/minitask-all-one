import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, currentPage + 1, currentPage + 2, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      {getPages().map((page, index) =>
        page === '...' ? (
          <span key={index}>...</span>
        ) : (
          <button
            key={index}
            className={page === currentPage ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
