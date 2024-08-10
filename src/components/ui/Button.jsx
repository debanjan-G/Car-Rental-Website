import React from 'react'

const Button = ({ children, btnType = "button" }) => {
    return (
        <div>
            <button type={btnType} className="text-sm md:text-lg bg-blue-700 p-3 rounded-md text-white font-medium hover:bg-indigo-600 duration-300 transition">{children}</button>
        </div>
    )
}

export default Button
