import React from 'react'
import { useSelector } from 'react-redux';
import { todoInformationChangeSelector } from '../selectors/selectors';
import HighIcon from '../assets/icon_priority_high.png';
import NormalIcon from '../assets/icon_priority_normal.png';
import SlowIcon from '../assets/icon_priority_slow.png';
import TodoIcon from '../assets/icon_todo.png';
import InprogressIcon from '../assets/icon_inprogress.png';
import DoneIcon from '../assets/icon_done.png';
import OverdueIcon from '../assets/icon_overdue.png';

const Overview = () => {

    const todoData = useSelector(todoInformationChangeSelector);

    return (
        <div className='w-full bg-white-primary rounded-lg py-3 px-7 shadow-md'>
            <div className='flex flex-row justify-between items-center'>
                <span className='px-3 pb-2 text-[20px] font-bold text-green-primary'>Task Overview</span>
                <div className='w-fit h-hit py-1 px-9 rounded-lg bg-green-primary font-semibold text-black-primary shadow-md shadow-slate-500 transition hover:scale-105 cursor-pointer'>Edit</div>
            </div>
            <div>
                <div className='px-3 py-[3px] flex flex-row justify-start items-center'>
                    <span className='w-[15%] min-w-[100px] font-bold text-[15px]'>Priority</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-slate-950 flex flex-row items-center animate-bounce shadow-md shadow-slate-800 ${todoData.priority === 'high' ? '' : 'hidden'}`} style={{ animationDuration: '0.3s' }}>
                        <span className='px-5 font-semibold text-white-primary'>High</span>
                        <img className='w-[20px] h-[20px]' src={HighIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-slate-800 flex flex-row items-center animate-bounce shadow-md shadow-slate-800 ${todoData.priority === 'normal' ? '' : 'hidden'}`} style={{ animationDuration: '0.5s' }}>
                        <span className='px-5 font-semibold text-white-primary'>Normal</span>
                        <img className='w-[20px] h-[20px]' src={NormalIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-slate-700 flex flex-row items-center shadow-md shadow-slate-800 ${todoData.priority === 'slow' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>Slow</span>
                        <img className='w-[20px] h-[20px]' src={SlowIcon} alt="" />
                    </div>
                </div>
                <div className='px-3 py-[3px] flex flex-row justify-start items-center'>
                    <span className='w-[15%] min-w-[100px] font-bold text-[15px]'>Deadline</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-green-primary flex-row items-center shadow-md shadow-slate-500 ${todoData.deadline !== '' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>{todoData.deadline}</span>
                    </div>
                </div>
                <div className='px-3 py-[3px] flex flex-row justify-start items-center'>
                    <span className='w-[15%] min-w-[100px] font-bold text-[15px] break-words'>Status</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-slate-600 flex flex-row items-center shadow-md shadow-slate-800 ${todoData.status === 'todo' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>To Do</span>
                        <img className='w-[20px] h-[20px]' src={TodoIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-slate-800 flex flex-row items-center shadow-md shadow-slate-800 ${todoData.status === 'inprogress' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>In Progress</span>
                        <img className='w-[20px] h-[20px]' src={InprogressIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-green-primary flex flex-row items-center shadow-md shadow-slate-500 ${todoData.status === 'done' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>Done</span>
                        <img className='w-[20px] h-[20px]' src={DoneIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-slate-950 flex flex-row items-center animate-bounce shadow-md shadow-slate-800 ${todoData.status === 'overdue' ? '' : 'hidden'}`} style={{ animationDuration: '0.3s' }}>
                        <span className='px-5 font-semibold text-white-primary'>Overdue</span>
                        <img className='w-[20px] h-[20px]' src={OverdueIcon} alt="" />
                    </div>
                </div>
                <div className='px-3 pt-[5px] flex flex-row justify-start items-start'>
                    <span className='w-[15%] min-w-[100px] font-bold text-[15px]'>Description</span>
                    <div className='h-fit flex-grow pl-7 border-l-[3px] border-green-primary'>
                        <div className={`flex-grow h-fit bg-slate-300 shadow-md shadow-slate-400 rounded-[50px] p-1 ${todoData.description !== '' ? '' : 'bg-transparent shadow-none'}`}>
                            <textarea className='w-full h-5 px-5 outline-none bg-transparent text-[16px]' readOnly>{todoData.description}</textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;