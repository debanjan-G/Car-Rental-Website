import React from 'react'

const PageButton = ({ pageNo, currentPage, setCurrentPage, catalogueRef }) => {


    const changePage = () => {
        catalogueRef.current.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(pageNo)
    }

    return (
        <button className={` ${currentPage === pageNo && "bg-blue-500 text-white"}  hover:bg-blue-300 rounded-full text-black font-semibold p-2 w-16 flex items-center justify-center `} onClick={changePage}>
            {pageNo}
        </button>
    )
}

export default PageButton
