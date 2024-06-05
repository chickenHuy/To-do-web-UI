import React, { useState } from 'react'
import DefaultIcon from '../assets/thanh_huy.png'

const ListItem = ({ name, iconSrc }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className='h-fix cursor-pointer rounded-md bg-transparent hover:bg-green-secondary transition flex flex-row flex-grow items-center justify-start px-7 py-[10px] mx-3' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <img className='w-[30px] h-[30px] rounded-[50%]' src={iconSrc !== undefined ? iconSrc : DefaultIcon} alt="" />
            <span className={`ml-3 text-[16px] ${isHover ? 'text-black-primary font-semibold' : 'text-white-primary'}`}>{name !== undefined ? name : 'List item name'}</span>
        </div>
    )
}

export default ListItem;