import React, { useState } from 'react'
import DopdownIcon from '../assets/icon_dropdown.png';
import AllIcon from '../assets/icon_all.png';
import HighIcon from '../assets/icon_priority_high.png';
import Normalcon from '../assets/icon_priority_normal.png';
import SlowIcon from '../assets/icon_priority_slow.png';
import { useDispatch, useSelector } from 'react-redux';
import { filterInformationChangeSelector } from '../selectors/selectors';

const PrioritySelector = () => {

    const dispatch = useDispatch();
    const filterData = useSelector(filterInformationChangeSelector);
    const [showListOptions, setShowListOptions] = useState(false);

    const setStatusFilter = (priority) => {
        dispatch({
            type: 'todo/filter-change',
            payload: {
                ...filterData,
                priority: priority,
            }
        });
    }

    return (
        <div className='flex flex-row items-center px-3 rounded-md mx-2 shadow-sm shadow-slate-400 relative'>
            <span className='font-semibold text-[15px]'>Priority</span>
            <div className='w-[1px] h-4 rounded-md mx-2 bg-black-primary'></div>
            <div className='w-[100px] h-[30px] bg-transparent font-bold text-[15px] text-green-primary cursor-pointer flex flex-row justify-between items-center' onClick={() => { showListOptions ? setShowListOptions(false) : setShowListOptions(true); }}>
                <span>{filterData.priority}</span>
                <img className='w-[10px] h-[10px]' src={DopdownIcon} alt="" />
                <div className={`absolute bg-transparent shadow-md shadow-slate-500 w-full h-fit px-[7px] py-2 rounded-lg top-10 left-0 transition origin-top  ${showListOptions ? 'scale-100' : 'scale-0'}`}>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-400 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setStatusFilter('All'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>All</span>
                        <img className='w-[20px] h-[20px] mr-3' src={AllIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-950 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setStatusFilter('High'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>High</span>
                        <img className='w-[20px] h-[20px] mr-3' src={HighIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-800 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setStatusFilter('Normal'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Normal</span>
                        <img className='w-[20px] h-[20px] mr-3' src={Normalcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-600 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setStatusFilter('Slow'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Slow</span>
                        <img className='w-[20px] h-[20px] mr-3' src={SlowIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrioritySelector;