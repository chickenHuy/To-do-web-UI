import React from 'react'

export const Button = ({ text, width, handleOnClick }) => {
    return (
        <div className={`bg-green-primary w-full h-fix rounded-md sm:${width !== undefined ? width : 'w-1/2'} py-[10px] mx-auto cursor-pointer font-bold text-[15px] text-white-primary text-center hover:scale-105 transition`} onClick={handleOnClick !== undefined ? handleOnClick : () => { }}>
            {text !== undefined ? text : 'Button'}
        </div>
    )
}

