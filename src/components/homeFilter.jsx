import React from 'react'
import PrioritySelector from './filterPrioritySelector';
import StatusSelector from './filterStatusSelector';
import DeadlineSelector from './filterDeadlineSelector';

const HomeFilter = () => {
    return (
        <div>
            <div className="header-search flex xl:flex-row flex-col xl:items-center mt-2 mb-3 px-5">
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <PrioritySelector />
                    </div>
                    <div>
                        <StatusSelector />
                    </div>
                    <div>
                        <DeadlineSelector />
                    </div>
                </div>
                <div className='xl:w-[25%] xl:mt-0 xl:ml-3 mt-2 w-full flex-grow xl:flex-grow-0'>
                    <input className='w-full h-[40px] rounded-[70px] px-5 outline-none text-black-primary bg-transparent shadow-sm shadow-slate-400 border-[1px] border-slate-300' type="text" placeholder='Search task' />
                </div>
            </div>
        </div>
    )
}

export default HomeFilter;