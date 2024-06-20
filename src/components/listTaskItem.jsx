import React, { useRef } from 'react'
import HighIcon from '../assets/icon_priority_high.png';
import NormalIcon from '../assets/icon_priority_normal.png';
import SlowIcon from '../assets/icon_priority_slow.png';
import TodoIcon from '../assets/icon_todo.png';
import InprogressIcon from '../assets/icon_inprogress.png';
import DoneIcon from '../assets/icon_done.png';
import OverdueIcon from '../assets/icon_overdue.png';
import TripleDotIcon from '../assets/icon_triple_dot.png';
import { useDispatch } from 'react-redux';
import { showOverview, todoInformationChange } from '../actions/actionCreater';

const ListTaskItem = ({ id, priority, description, deadline, status }) => {
    const dispatch = useDispatch();

    function setDataOfOverview() {
        dispatch(todoInformationChange({
            priority: priority,
            deadline: deadline,
            status: status,
            description: description,
        }))
    }

    function setShowOverview(show) {
        dispatch(showOverview({
            showOverview: show,
        }));
    }

    return (
        <div className='w-full h-full bg-white-primary cursor-pointer p-3 rounded-md shadow-md shadow-slate-400 hover:scale-[1.03] duration-75 flex flex-col' onClick={() => {
            setDataOfOverview();
            setShowOverview(true);
        }}>
            <div className='flex flex-row justify-between items-center'>
                <div className={`py-1 px-2 rounded-[50px] flex flex-row items-center animate-bounce shadow-md  ${priority === 'hight' ? 'bg-slate-950 shadow-slate-800 animate-bounce' : priority === 'normal' ? 'bg-slate-700 shadow-slate-600 animate-none' : 'bg-green-primary shadow-slate-400 animate-none'}`} style={{ animationDuration: '0.25s' }}>
                    <span className='px-5 font-semibold text-white-primary'>{priority === 'high' ? 'High' : priority === 'normal' ? 'Normal' : 'Slow'}</span>
                    <img className='w-[20px] h-[20px]' src={priority === 'hight' ? HighIcon : priority === 'normal' ? NormalIcon : SlowIcon} alt="" />
                </div>
                <img className='w-[26px] h-[26px] rounded-[50%] p-[5px] hover:bg-slate-300' src={TripleDotIcon} alt="" />
            </div>
            <div className='flex-grow'>
                <div className="text-container bg-slate-100 rounded-md shadow-sm shadow-slate-300 p-3 my-3">
                    {description !== undefined ? description : ''}
                </div>
            </div>
            <div className='flex flex-row justify-end items-center'>
                <span className='font-bold text-green-primary'>Deadline: </span>
                <div className={`px-5 py-1 ml-2 rounded-[70px] flex flex-row justify-between items-center shadow-md text-white-primary ${status === 'todo' ? 'bg-slate-500 shadow-slate-400' : status === 'inprogress' ? 'bg-slate-700 shadow-slate-500' : status === 'done' ? 'bg-green-primary shadow-slate-400' : 'bg-slate-950 shadow-slate-600'}`}>
                    <span>{deadline !== undefined ? deadline : 'Chicken'}</span>
                    <img className='w-[20px] h-[20px] ml-2' src={status === 'todo' ? TodoIcon : status === 'inprogress' ? InprogressIcon : status === 'done' ? DoneIcon : OverdueIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ListTaskItem;