import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "../GetCountries/Card";

function Items({ currentItems }) {
  return (
    <>
      <div>
        {currentItems &&
          currentItems.map((item) => (
            <Card key={item.name.common} country={item} />
          ))}
      </div>
    </>
  );
}

export function PaginatedItems({ data }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 10;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / 10));
  }, [itemOffset, data]);

  useEffect(() => {
    setItemOffset(0);
  }, [data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {data.length > 0 ? (
        <>
          <p className="results">
            {data.length} {data.length > 1 ? "results" : "result"}
          </p>
          <Items currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={0}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName="containerPagination"
            activeClassName="current"
          />
        </>
      ) : (
        <h6 className="results">No results found</h6>
      )}
    </>
  );
}
