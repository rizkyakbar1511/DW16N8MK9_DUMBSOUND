import React from "react";
import "../components/assets/css/Pagination.css";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const cardNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    cardNumbers.push(i);
  }

  return (
    <nav className="pagination-wrapper">
      <ul className="pagination custom-pagination">
        {cardNumbers.map((number) => (
          <li key={number} className="page-item custom-page-item">
            <button
              onClick={() => paginate(number)}
              className="page-link custom-page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
