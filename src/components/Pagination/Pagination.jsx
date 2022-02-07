import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "../GetCountries/Card";
import "./Pagination.css";

const Items = ({ currentItems }) => {
  return (
    <>
      <div className=" flex  flex-wrap w-11/12 justify-center mx-auto max-w-screen-xxl ">
        {currentItems != null && currentItems.length > 0
          ? currentItems.map(
              (item) =>
                item !== null && <Card key={item.name.common} country={item} />
            )
          : null}
      </div>
    </>
  );
};

export const PaginatedItems = ({ data }) => {
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
      ) : null}
    </>
  );
};
