import React from 'react'
import PrioritySelector from './filterPrioritySelector';
import DeadlineSelector from './filterDeadlineSelector';
import CleanIcon from '../assets/icon_clean.png';
import { useDispatch, useSelector } from 'react-redux';
import { filterInformationChangeSelector } from '../selectors/selectors';
import { filterInformationChange } from '../actions/actionCreater';

const HomeFilter = ({ handleActionSearch }) => {
    const filterData = useSelector(filterInformationChangeSelector);
    const dispatch = useDispatch();

    function handleCleanClick() {
        dispatch(filterInformationChange({
            ...filterData,
            priority: 'All',
            deadline: 'All',
        }));
    }
    return (
        <div>
            <div className="header-search flex lg:flex-row flex-col xl:items-center mt-2 mb-3 px-5">
                <div className='flex sm:flex-row flex-col justify-start gap-3 items-start'>
                    <div>
                        <PrioritySelector />
                    </div>
                    {/* <div>
                        <StatusSelector />
                    </div> */}
                    <div className='flex flex-row gap-3'>
                        <DeadlineSelector />
                        <img className='w-[30px] h-[30px] p-1 rounded-md border-[1px] border-slate-300 shadow-sm shadow-slate-400 cursor-pointer' src={CleanIcon} alt="" onClick={() => handleCleanClick()} />
                    </div>
                </div>
                <div className='xl:w-[25%] lg:mt-0 lg:ml-3 mt-2 w-full flex-grow lg:flex-grow-0'>
                    <input className='w-full h-[40px] rounded-[70px] px-5 outline-none text-black-primary bg-transparent shadow-sm shadow-slate-400 border-[1px] border-slate-300' type="text" placeholder='Search task' onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleActionSearch(e.target.value.trim());
                            e.target.value = '';
                        }
                    }} />
                </div>
            </div>
        </div>
    )
}

export default HomeFilter;