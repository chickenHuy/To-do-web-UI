import DopdownIcon from '../assets/icon_dropdown.png';
import AllIcon from '../assets/icon_all.png';
import WeekIcon from '../assets/icon_week.png';
import TomorrowIcon from '../assets/icon_tomorrow.png';
import TodayIcon from '../assets/icon_today.png';
import { useDispatch, useSelector } from 'react-redux';
import { coverSheetSelector, filterInformationChangeSelector, showFilterSelector } from '../selectors/selectors';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from 'react';
import { coverSheetChange } from '../actions/actionCreater';
import { convertDateToISO } from '../utils/utils';

const DeadlineSelector = () => {

    const dispatch = useDispatch();
    const filterData = useSelector(filterInformationChangeSelector);
    const showFilterData = useSelector(showFilterSelector);
    const [showDayPicker, setShowDayPicker] = useState(false);
    const coverSheetData = useSelector(coverSheetSelector);

    const setStatusFilter = (deadline) => {
        dispatch({
            type: 'todo/filter-change',
            payload: {
                ...filterData,
                deadline: deadline,
            }
        });
    }

    const setShowListOptions = (show) => {
        const status = show ? '' : 'hidden';
        dispatch({
            type: 'todo/show-filter',
            payload: {
                ...showFilterData,
                deadline: status,
            }
        });

        setShowDayPicker(false);
    }

    const setShowCoverSheet = (show, opacity, backgroundColor) => {
        dispatch(coverSheetChange({
            ...coverSheetData,
            showCoverSheet: show,
            opacity: opacity !== '' ? opacity : 'bg-opacity-70',
            backgroundColor: backgroundColor !== '' ? backgroundColor : 'bg-slate-700',
        }))
    }

    const handleOnSelectDay = (day) => {
        setStatusFilter(day.toLocaleDateString());
        setShowListOptions(false);
        setShowCoverSheet(false, '', '');
    }

    return (
        <div className='flex flex-row items-center px-3 rounded-md shadow-sm shadow-slate-400 border-[1px] border-slate-300 relative'>
            <span className='font-semibold text-[15px]'>Deadline</span>
            <div className='w-[1px] h-4 rounded-md mx-2 bg-black-primary'></div>
            <div className='w-[100px] h-[30px] bg-transparent font-bold text-[15px] text-green-primary cursor-pointer flex flex-row justify-between items-center' onClick={() => { setShowListOptions(true); setShowCoverSheet(true, '', 'bg-transparent') }}>
                <span>{filterData.deadline}</span>
                <img className='w-[10px] h-[10px]' src={DopdownIcon} alt="" />
                <div className={`z-10 absolute bg-green-secondary shadow-md shadow-slate-500 border-[1px] border-slate-300 w-full h-fit px-[7px] py-2 rounded-lg top-10 left-0 transition origin-top  ${showFilterData.deadline === '' && coverSheetData.showCoverSheet ? 'scale-100' : 'scale-0'}`}>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-400 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={(e) => { e.stopPropagation(); setShowListOptions(false); setStatusFilter('All'); setShowCoverSheet(false, '', ''); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>All</span>
                        <img className='w-[20px] h-[20px] mr-3' src={AllIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-600 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={(e) => { e.stopPropagation(); setShowListOptions(false); setStatusFilter('Today'); setShowCoverSheet(false, '', ''); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Today</span>
                        <img className='w-[20px] h-[20px] mr-3' src={TodayIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-800 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={(e) => { e.stopPropagation(); setShowListOptions(false); setStatusFilter('Tomorrow'); setShowCoverSheet(false, '', ''); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Tomorrow</span>
                        <img className='w-[20px] h-[20px] mr-3' src={TomorrowIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-green-primary flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105 relative`} onClick={(e) => {
                        e.stopPropagation();
                        setShowDayPicker(true);
                    }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Select date</span>
                        <img className='w-[20px] h-[20px] mr-3' src={WeekIcon} alt="" />
                        <div className={`absolute bg-green-primary text-black font-medium top-0 left-[105%] rounded-md shadow-md shadow-slate-500`}>
                            {showDayPicker && <DayPicker mode="single" selected={new Date(convertDateToISO(filterData.deadline))} onSelect={handleOnSelectDay} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeadlineSelector;