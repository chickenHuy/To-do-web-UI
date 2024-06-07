import React, { useState } from 'react'
import DopdownIcon from '../assets/icon_dropdown.png';
import TodoIcon from '../assets/icon_todo.png';
import InprogressIcon from '../assets/icon_inprogress.png';
import DoneIcon from '../assets/icon_done.png';
import OverdueIcon from '../assets/icon_overdue.png';
import AllIcon from '../assets/icon_all.png';
import { useDispatch, useSelector } from 'react-redux';
import { filterInformationChangeSelector } from '../selectors/selectors';

const StatusSelector = () => {

    const dispatch = useDispatch();
    const filterData = useSelector(filterInformationChangeSelector);
    const [showListOptions, setShowListOptions] = useState(false);

    const setStatusFilter = (status) => {
        dispatch({
            type: 'todo/filter-change',
            payload: {
                ...filterData,
                status: status,
            }
        });
    }

    return (
        <div className='flex flex-row items-center px-3 rounded-md mx-2 shadow-sm shadow-slate-400 relative'>
            <span className='font-semibold text-[15px]'>Status</span>
            <div className='w-[1px] h-4 rounded-md mx-2 bg-black-primary'></div>
            <div className='w-[100px] h-[30px] bg-transparent font-bold text-[15px] text-green-primary cursor-pointer flex flex-row justify-between items-center' onClick={() => { showListOptions ? setShowListOptions(false) : setShowListOptions(true); }}>
                <span>{filterData.status}</span>
                <img className='w-[10px] h-[10px]' src={DopdownIcon} alt="" />
                <div className={`absolute bg-transparent shadow-md shadow-slate-500 w-full h-fit px-[7px] py-2 rounded-lg top-10 left-0 transition origin-top  ${showListOptions ? 'scale-100' : 'scale-0'}`}>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-400 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => {setShowListOptions(false); setStatusFilter('All');}}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>All</span>
                        <img className='w-[20px] h-[20px] mr-3' src={AllIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-600 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => {setShowListOptions(false); setStatusFilter('To Do');}}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>To Do</span>
                        <img className='w-[20px] h-[20px] mr-3' src={TodoIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-800 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => {setShowListOptions(false); setStatusFilter('In Progress');}}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>In Progress</span>
                        <img className='w-[20px] h-[20px] mr-3' src={InprogressIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-green-primary flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => {setShowListOptions(false); setStatusFilter('Done');}}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Done</span>
                        <img className='w-[20px] h-[20px] mr-3' src={DoneIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-950 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => {setShowListOptions(false); setStatusFilter('Overdue');}}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Overdue</span>
                        <img className='w-[20px] h-[20px] mr-3' src={OverdueIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusSelector;