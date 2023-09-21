import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";

import {getAllMoviePage} from "../Redux/Action/actionMovies"



export default function Pagination() {
  // save pages 
  const [pageCountet, setPageCount] = useState(0);

  const despatch = useDispatch();
  const pages = useSelector((state) => state.pageCounter)

  useEffect(() => {
    setPageCount(pages)
  }, []);
  
  const handlePageClick= (data)=>{
    despatch(getAllMoviePage(data.selected + 1))
  }

  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next "
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCountet}
        previousLabel="previous"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        activeLinkClassName={"active"}

      />
  )
}
