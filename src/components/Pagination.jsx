import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Supply from "./Supply";
import "./Pagination.css";

const Pagination = ({ supplies }) => {
  

  console.log(supplies);
  console.log(supplies?.length);
 
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(supplies.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(supplies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, supplies]);

    const handlePageClick = (e) =>{
      const newOffset = (e.selected * itemsPerPage) % supplies.length;
      setItemOffset(newOffset);
    }
  return (
    <>
   <div className="flex flex-wrap border-2 rounded-2xl shadow-lg pt-5 pb-5 mt-5 justify-center items-center w-5/6 mx-auto gap-5">
   {currentItems?.map((item, index) => {
            return <Supply key={index} {...item} />;
          })}
   </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  );
};

export default Pagination;
