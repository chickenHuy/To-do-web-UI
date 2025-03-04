import DopdownIcon from '../assets/icon_dropdown.png';
import DopdownIconWhite from '../assets/icon_dropdown_white.png';
import AllIcon from '../assets/icon_all.png';
import HighIcon from '../assets/icon_priority_high.png';
import Normalcon from '../assets/icon_priority_normal.png';
import LowIcon from '../assets/icon_priority_slow.png';
import { useDispatch, useSelector } from 'react-redux';
import { coverSheetSelector, filterInformationChangeSelector, showFilterSelector } from '../selectors/selectors';
import { coverSheetChange } from '../actions/actionCreater';
import { useEffect, useState } from 'react';

const PrioritySelector = () => {

    const dispatch = useDispatch();
    const filterData = useSelector(filterInformationChangeSelector);
    const showFilterData = useSelector(showFilterSelector);
    const coverSheetData = useSelector(coverSheetSelector);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.contains('dark') ? setDarkMode(true) : setDarkMode(false);
    }, [coverSheetData]);

    const setStatusFilter = (priority) => {
        dispatch({
            type: 'todo/filter-change',
            payload: {
                ...filterData,
                priority: priority,
            }
        });
    }

    const setShowCoverSheet = (show, opacity, backgroundColor) => {
        dispatch(coverSheetChange({
            ...coverSheetData,
            showCoverSheet: show,
            opacity: opacity !== '' ? opacity : 'bg-opacity-70',
            backgroundColor: backgroundColor !== '' ? backgroundColor : 'bg-slate-700',
        }))
    }

    const setShowListOptions = (show) => {
        const priority = show ? '' : 'hidden';

        dispatch({
            type: 'todo/show-filter',
            payload: {
                ...showFilterData,
                priority: priority,
            }
        });
    }

    return (
        <div className='flex flex-row items-center px-3 rounded-md shadow-sm shadow-slate-400 dark:shadow-dark-primary border-[1px] border-slate-300 dark:border-dark-primary relative'>
            <span className='font-semibold text-[15px] dark:text-white'>Priority</span>
            <div className='w-[1px] h-4 rounded-md mx-2 bg-black-primary dark:bg-white'></div>
            <div className='w-[100px] h-[30px] bg-transparent font-bold text-[15px] text-green-primary dark:text-white cursor-pointer flex flex-row justify-between items-center' onClick={() => { setShowListOptions(true); setShowCoverSheet(true, '', 'bg-transparent'); }}>
                <span>{filterData.priority}</span>
                <img className='w-[10px] h-[10px]' src={darkMode ? DopdownIconWhite : DopdownIcon} alt="" />
                <div className={`z-10 absolute bg-green-secondary dark:bg-dark-secondary shadow-md shadow-slate-500 dark:shadow-dark-primary border-[1px] border-slate-300 dark:border-dark-primary w-full h-fit px-[7px] py-2 rounded-lg top-10 left-0 transition origin-top  ${showFilterData.priority === '' && coverSheetData.showCoverSheet ? 'scale-100' : 'scale-0'}`}>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-400 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={(e) => { e.stopPropagation(); setShowListOptions(false); setShowCoverSheet(false, '', ''); setStatusFilter('All'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>All</span>
                        <img className='w-[20px] h-[20px] mr-3' src={AllIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-950 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={(e) => { e.stopPropagation(); setShowListOptions(false); setShowCoverSheet(false, '', ''); setStatusFilter('High'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>High</span>
                        <img className='w-[20px] h-[20px] mr-3' src={HighIcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-800 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={(e) => { e.stopPropagation(); setShowListOptions(false); setShowCoverSheet(false, '', ''); setStatusFilter('Normal'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Normal</span>
                        <img className='w-[20px] h-[20px] mr-3' src={Normalcon} alt="" />
                    </div>
                    <div className={`py-1 px-2 my-2 rounded-[50px] bg-green-primary flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={(e) => { e.stopPropagation(); setShowListOptions(false); setShowCoverSheet(false, '', ''); setStatusFilter('Low'); }}>
                        <span className='px-5 font-semibold text-white-primary text-[14px]'>Low</span>
                        <img className='w-[20px] h-[20px] mr-3' src={LowIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrioritySelector;