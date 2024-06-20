import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showTaskSelectorSelector, todoInformationChangeSelector } from '../selectors/selectors';
import HighIcon from '../assets/icon_priority_high.png';
import NormalIcon from '../assets/icon_priority_normal.png';
import SlowIcon from '../assets/icon_priority_slow.png';
import TodoIcon from '../assets/icon_todo.png';
import InprogressIcon from '../assets/icon_inprogress.png';
import DoneIcon from '../assets/icon_done.png';
import OverdueIcon from '../assets/icon_overdue.png';
import CloseIcon from '../assets/icon_close.png';
import EditIcon from '../assets/icon_edit.png';
import { showOverview, showTaskSelectorChange, todoInformationChange } from '../actions/actionCreater';
import TaskStatusSelector from './taskStatusSelector';
import TaskDeadlineSelector from './taskDeadlineSelector';
import TaskPrioritySelector from './taskPrioritySelector';

const Overview = () => {

    const dispatch = useDispatch();
    const todoData = useSelector(todoInformationChangeSelector);

    const showTaskSelectorData = useSelector(showTaskSelectorSelector);
    const containerRef = useRef(null);

    const [description, setDescription] = useState(todoData.description);

    function setShowOverview(show) {
        dispatch(showOverview({
            showOverview: show,
        }));
    }

    function setTodoInformation(description) {
        dispatch(todoInformationChange({
            priority: todoData.priority,
            status: todoData.status,
            deadline: todoData.deadline,
            description: description,
        }));
    }

    const setShowListOptions = (option, show) => {
        const status = show ? '' : 'hidden';

        if (option === 'priority') {
            dispatch(showTaskSelectorChange({
                ...showTaskSelectorData,
                priority: status,
                deadline: 'hidden',
                status: 'hidden',
            }));
            return;
        }
        if (option === 'status') {
            dispatch(showTaskSelectorChange({
                ...showTaskSelectorData,
                status: status,
                priority: 'hidden',
                deadline: 'hidden',
            }));
            return;
        }
        if (option === 'deadline') {
            dispatch(showTaskSelectorChange({
                ...showTaskSelectorData,
                deadline: status,
                priority: 'hidden',
                status: 'hidden',
            }));
            return;
        }
        if (option === 'all') {
            dispatch(showTaskSelectorChange({
                ...showTaskSelectorData,
                priority: status,
                status: status,
                deadline: status,
            }));
            return;
        }
    }

    const handleClickOutside = (event) => {
        if (containerRef.current === event.target) {
            setShowListOptions('all', false);
        }
    }

    useEffect(() => {
        setDescription(todoData.description);
    }, [todoData.description]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className='w-full min-w-[425px] bg-white-primary rounded-lg px-7 shadow-lg shadow-slate-500 border-[1px] border-slate-300 py-10 relative'>
            <img className='w-[20px] h-[20px] absolute top-2 right-2 cursor-pointer hover:scale-110 duration-75' src={CloseIcon} alt="" onClick={() => {
                setShowOverview(false);
                setShowListOptions('all', false);
            }} />
            <span className='px-3 pb-2 text-[20px] font-bold text-green-primary'>Task Overview</span>
            <div>
                <div className='px-3 py-[3px] flex flex-row justify-start items-center my-2'>
                    <span className='min-w-[120px] font-bold text-[15px]'>Priority</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-slate-950 flex flex-row items-center animate-bounce shadow-md shadow-slate-800 ${todoData.priority === 'high' ? '' : 'hidden'}`} style={{ animationDuration: '0.3s' }}>
                        <span className='px-5 font-semibold text-white-primary'>High</span>
                        <img className='w-[20px] h-[20px]' src={HighIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-slate-800 flex flex-row items-center animate-bounce shadow-md shadow-slate-800 ${todoData.priority === 'normal' ? '' : 'hidden'}`} style={{ animationDuration: '0.5s' }}>
                        <span className='px-5 font-semibold text-white-primary'>Normal</span>
                        <img className='w-[20px] h-[20px]' src={NormalIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-green-primary flex flex-row items-center shadow-md shadow-slate-800 ${todoData.priority === 'slow' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>Slow</span>
                        <img className='w-[20px] h-[20px]' src={SlowIcon} alt="" />
                    </div>
                    <div className='flex-grow flex flex-row justify-end relative'>
                        <TaskPrioritySelector />
                        <img className='w-[25px] h-[25px] cursor-pointer hover:scale-110' src={EditIcon} alt="" onClick={() => {
                            setShowListOptions('priority', showTaskSelectorData.priority === '' ? false : true);
                        }} />
                    </div>
                </div>

                <div className='px-3 py-[3px] flex flex-row justify-start items-center my-2'>
                    <span className='min-w-[120px] font-bold text-[15px]'>Deadline</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-green-primary flex-row items-center shadow-md shadow-slate-500 ${todoData.deadline !== '' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>{todoData.deadline}</span>
                    </div>
                    <div className='flex-grow flex flex-row justify-end relative'>
                        <TaskDeadlineSelector />
                        <img className='w-[25px] h-[25px] cursor-pointer hover:scale-110' src={EditIcon} alt="" onClick={() => {
                            setShowListOptions('all', false);
                            setShowListOptions('deadline', showTaskSelectorData.deadline === '' ? false : true);
                        }} />
                    </div>
                </div>

                <div className='px-3 py-[3px] flex flex-row justify-start items-center my-2'>
                    <span className='min-w-[120px] font-bold text-[15px] break-words'>Status</span>
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
                    <div className='flex-grow flex flex-row justify-end relative'>
                        <TaskStatusSelector />
                        <img className='w-[25px] h-[25px] cursor-pointer hover:scale-110' src={EditIcon} alt="" onClick={() => {
                            setShowListOptions('all', false);
                            setShowListOptions('status', showTaskSelectorData.status === '' ? false : true);
                        }} />
                    </div>
                </div>

                <div className='px-3 pt-[5px] flex flex-row justify-start items-start my-2'>
                    <span className='min-w-[120px] font-bold text-[15px]'>Description</span>
                    <div className='h-fit flex-grow pl-7 mr-7 border-l-[3px] border-green-primary'>
                        <textarea
                            className='w-full h-fit outline-none rounded-md bg-slate-300 px-6 py-1 shadow-md shadow-slate-400'
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;
