import React from 'react'

const PageButton = ({ pageNo }) => {
    return (
        <div className='bg-yellow-400 text-black font-semibold p-2 w-16 flex items-center justify-center '>
            <span>{pageNo}</span>
        </div>
    )
}

export default PageButton
