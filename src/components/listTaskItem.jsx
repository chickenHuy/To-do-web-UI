import React, { useEffect, useState } from 'react'
import HighIcon from '../assets/icon_priority_high.png';
import NormalIcon from '../assets/icon_priority_normal.png';
import LowIcon from '../assets/icon_priority_slow.png';
import TodoIcon from '../assets/icon_todo.png';
import InprogressIcon from '../assets/icon_inprogress.png';
import DoneIcon from '../assets/icon_done.png';
import OverdueIcon from '../assets/icon_overdue.png';
import TripleDotIcon from '../assets/icon_triple_dot.png';
import { useDispatch, useSelector } from 'react-redux';
import { coverSheetChange, showOverview, todoInformationChange } from '../actions/actionCreater';
import { coverSheetSelector, listTaskNavigateChangeSelector, todoInformationChangeSelector } from '../selectors/selectors';
import DataManager from '../data/dataManager';
import { checkOverdue } from '../utils/utils';
import Cookies from 'js-cookie';

const ListTaskItem = ({ id, priority, description, deadline, status }) => {
    const dispatch = useDispatch();
    const todoData = useSelector(todoInformationChangeSelector);
    const coverSheetData = useSelector(coverSheetSelector);
    const [showAction, setShowAction] = useState(true);
    const [overDue, setOverDue] = useState(false);

    const dataManager = new DataManager(Cookies.get('auth'));
    const taskNavigateData = useSelector(listTaskNavigateChangeSelector);

    function setDataOfOverview() {
        dispatch(todoInformationChange({
            ...todoData,
            id: id,
            priority: priority,
            deadline: deadline,
            status: status,
            description: description,
        }))
    }

    function setShowCoverSheet(show, backgroundColor) {
        dispatch(coverSheetChange({
            ...coverSheetData,
            showCoverSheet: show,
            backgroundColor: backgroundColor,
        }))
    }

    function setShowOverview(show) {
        dispatch(showOverview({
            showOverview: show,
        }));
    }

    function handleRemoveTaskClick() {
        dataManager.removeTask(taskNavigateData.navigate, taskNavigateData.id, id);
    }

    useEffect(() => {
        if (coverSheetData.showCoverSheet === false) {
            setShowAction(coverSheetData.showCoverSheet);
        }
    }, [coverSheetData.showCoverSheet]);

    useEffect(() => {
        setOverDue(checkOverdue(deadline));
    },);

    return (
        <div className={`w-full h-full bg-white-primary dark:bg-[#353433] cursor-pointer p-3 rounded-md shadow-md shadow-slate-400 dark:shadow-dark-primary ${coverSheetData.showCoverSheet ? '' : 'hover:scale-[1.03]'}  duration-75 flex flex-col`} onClick={() => {
            if (taskNavigateData.navigate === 'my-day' || taskNavigateData.navigate === 'custom') {
                setDataOfOverview();
                setShowOverview(true);
                setShowCoverSheet(true, 'bg-slate-700');
            }
        }}>
            <div className='flex flex-row justify-between items-center relative'>
                <div className={`py-1 px-2 rounded-[50px] flex flex-row items-center animate-bounce shadow-md dark:shadow-dark-secondary  ${priority === 'high' ? 'bg-slate-950 shadow-slate-800 animate-bounce' : priority === 'normal' ? 'bg-slate-700 shadow-slate-600 animate-none' : 'bg-green-primary shadow-slate-400 animate-none'}`} style={{ animationDuration: '0.25s' }}>
                    <span className='px-5 font-semibold text-white-primary'>{priority === 'high' ? 'High' : priority === 'normal' ? 'Normal' : 'Low'}</span>
                    <img className='w-[20px] h-[20px]' src={priority === 'high' ? HighIcon : priority === 'normal' ? NormalIcon : LowIcon} alt="" />
                </div>
                <img className='w-[26px] h-[26px] rounded-[50%] p-[5px] hover:bg-slate-300' src={TripleDotIcon} alt="" onClick={(e) => {
                    if (taskNavigateData.navigate === 'my-day' || taskNavigateData.navigate === 'custom') {
                        e.stopPropagation();
                        setShowAction(true);
                        setShowCoverSheet(true, 'bg-transparent');
                    }
                }} />
                <div className={`absolute z-10 top-full right-0 py-2 px-2 rounded-md bg-red-500 shadow-md shadow-slate-400 transition origin-top ${showAction && coverSheetData.showCoverSheet ? 'scale-100' : 'scale-0'}`}>
                    <span onClick={(e) => {
                        e.stopPropagation();
                        setShowAction(false);
                        setShowCoverSheet(false, 'bg-slate-700');
                        handleRemoveTaskClick();
                    }}>Remove</span>
                </div>
            </div>
            <div className='flex-grow'>
                <div className={`text-container bg-slate-100 dark:bg-dark-secondary rounded-md shadow-sm shadow-slate-300 dark:shadow-dark-secondary dark:text-white-primary p-3 my-3 ${status === 'done' ? 'line-through' : ''}`}>
                    {description !== undefined ? description : ''}
                </div>
            </div>
            <div className='flex flex-row justify-end items-center'>
                <div className={`px-5 py-1 ml-2 rounded-[70px] flex flex-row justify-between items-center shadow-md text-white-primary dark:shadow-dark-secondary ${status === 'todo' ? 'bg-slate-500 shadow-slate-400' : status === 'inprogress' ? 'bg-slate-700 shadow-slate-500' : status === 'done' ? 'bg-green-primary shadow-slate-400' : ''}`}>
                    <span>{deadline !== undefined ? deadline : 'Chicken'}</span>
                    <img className='w-[20px] h-[20px] ml-2' src={status === 'todo' ? TodoIcon : status === 'inprogress' ? InprogressIcon : status === 'done' ? DoneIcon : ''} alt="" />
                </div>
                <img className={`w-[28px] h-[28px] px-[2px] ml-1 bg-slate-900 rounded-md ${overDue && status !== 'done' ? '' : 'hidden'}`} src={OverdueIcon} alt="" />
            </div>
        </div>
    )
}

export default ListTaskItem;