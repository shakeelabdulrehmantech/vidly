import React from "react";
import _ from "lodash";

const Pagination = props => {
  debugger;
  const { itemsCount, pageSize, currentPage, onPageChange } = props; // Object Destructuring

  console.log(currentPage);

  const pageCount = Math.ceil(itemsCount / pageSize);

  const pages = _.range(1, pageCount + 1);

  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link">Previous</a>
          </li>
          {pages.map(function(item, index) {
            return (
              <li
                key={index}
                className={
                  item == currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  className="page-link"
                  onClick={() => onPageChange(item)}
                  href
                >
                  {item}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
