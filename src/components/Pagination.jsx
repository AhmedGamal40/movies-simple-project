import React from 'react'
import ReactPaginate from 'react-paginate';


export default function Pagination({getPage, pageCountet}) {
  const handlePageClick= (data)=>{
    console.log(data.selected + 1 );
    getPage(data.selected + 1)
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
