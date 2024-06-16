import React from 'react'
import HighIcon from '../assets/icon_priority_high.png';
import TripleDotIcon from '../assets/icon_triple_dot.png';

const ListTaskItem = () => {
    return (
        <div className='w-1/4 h-fit bg-white-primary'>
            <div className='flex flex-row justify-between items-center'>
                <div className={`w-fit py-1 px-2 rounded-[50px] bg-slate-950 flex flex-row items-center shadow-md shadow-slate-800`}>
                    <span className='px-5 font-semibold text-white-primary'>High</span>
                    <img className='w-[20px] h-[20px]' src={HighIcon} alt="" />
                </div>
                <img className='w-[20px] h-[20px]' src={TripleDotIcon} alt="" />
            </div>
            <div className="text-container">
                This is a long text that should wrap to the next line when it exceeds the width of the container. Let's add some more text to make sure it is really long enough to demonstrate the wrapping behavior.
            </div>
            <div>Deadline: Chicken - Chicken</div>
        </div>
    )
}

export default ListTaskItem;