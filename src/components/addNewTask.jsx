import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coverSheetSelector, showTaskSelectorSelector, todoInformationChangeSelector } from '../selectors/selectors';
import HighIcon from '../assets/icon_priority_high.png';
import NormalIcon from '../assets/icon_priority_normal.png';
import LowIcon from '../assets/icon_priority_slow.png';
import TodoIcon from '../assets/icon_todo.png';
import InprogressIcon from '../assets/icon_inprogress.png';
import DoneIcon from '../assets/icon_done.png';
import OverdueIcon from '../assets/icon_overdue.png';
import CloseIcon from '../assets/icon_close.png';
import EditIcon from '../assets/icon_edit.png';
import { showTaskSelectorChange, todoInformationChange } from '../actions/actionCreater';
import TaskStatusSelector from './taskStatusSelector';
import TaskDeadlineSelector from './taskDeadlineSelector';
import TaskPrioritySelector from './taskPrioritySelector';

const AddNewTask = ({ handleCloseClick, handleAddClick }) => {

    const dispatch = useDispatch();
    const todoData = useSelector(todoInformationChangeSelector);

    const showTaskSelectorData = useSelector(showTaskSelectorSelector);
    const containerRef = useRef(null);
    const textAreaRef = useRef(null);

    const [description, setDescription] = useState('');

    function setTodoInformation(description) {
        dispatch(todoInformationChange({
            ...todoData,
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
        dispatch(todoInformationChange({
            ...todoData,
            id: '',
            priority: 'normal',
            status: 'todo',
            deadline: new Date().toLocaleDateString(),
            description: '',
        }));

        textAreaRef.current.focus();

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className='w-full min-w-[425px] bg-white-primary dark:bg-dark-secondary rounded-lg px-7 shadow-lg shadow-slate-500 dark:shadow-dark-secondary border-[1px] border-slate-300 dark:border-dark-secondary py-10 relative'>
            <img className='w-[20px] h-[20px] absolute top-2 right-2 cursor-pointer hover:scale-110 duration-75' src={CloseIcon} alt="" onClick={() => {
                handleCloseClick('addNewTask', false);
                setShowListOptions('all', false);
            }} />
            <span className='px-3 pb-2 text-[20px] font-bold text-green-primary dark:text-white-primary'>Add New Task</span>
            <div>
                <div className='px-3 py-[3px] flex flex-row justify-start items-center my-2'>
                    <span className='min-w-[120px] font-bold text-[15px] dark:text-white-primary'>Priority</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary dark:bg-white-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-slate-950 flex flex-row items-center animate-bounce shadow-md shadow-slate-800 ${todoData.priority === 'high' ? '' : 'hidden'}`} style={{ animationDuration: '0.3s' }}>
                        <span className='px-5 font-semibold text-white-primary'>High</span>
                        <img className='w-[20px] h-[20px]' src={HighIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-slate-800 flex flex-row items-center animate-bounce shadow-md shadow-slate-800 ${todoData.priority === 'normal' ? '' : 'hidden'}`} style={{ animationDuration: '0.5s' }}>
                        <span className='px-5 font-semibold text-white-primary'>Normal</span>
                        <img className='w-[20px] h-[20px]' src={NormalIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-green-primary flex flex-row items-center shadow-md shadow-slate-800 ${todoData.priority === 'low' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>Low</span>
                        <img className='w-[20px] h-[20px]' src={LowIcon} alt="" />
                    </div>
                    <div className='flex-grow flex flex-row justify-end relative'>
                        <TaskPrioritySelector />
                        <img className='w-[25px] h-[25px] cursor-pointer hover:scale-110' src={EditIcon} alt="" onClick={() => {
                            setShowListOptions('priority', showTaskSelectorData.priority === '' ? false : true);
                        }} />
                    </div>
                </div>

                <div className='px-3 py-[3px] flex flex-row justify-start items-center my-2'>
                    <span className='min-w-[120px] font-bold text-[15px] dark:text-white-primary'>Deadline</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary dark:bg-white-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-green-primary flex-row items-center shadow-md shadow-slate-500 dark:shadow-dark-primary ${todoData.deadline !== '' ? '' : 'hidden'}`}>
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
                    <span className='min-w-[120px] font-bold text-[15px] dark:text-white-primary'>Status</span>
                    <div className='w-[3px] h-4 rounded-md mr-7 bg-green-primary dark:bg-white-primary'></div>
                    <div className={`py-1 px-2 rounded-[50px] bg-slate-600 flex flex-row items-center shadow-md shadow-slate-800 ${todoData.status === 'todo' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>To Do</span>
                        <img className='w-[20px] h-[20px]' src={TodoIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-slate-800 flex flex-row items-center shadow-md shadow-slate-800 ${todoData.status === 'inprogress' ? '' : 'hidden'}`}>
                        <span className='px-5 font-semibold text-white-primary'>In Progress</span>
                        <img className='w-[20px] h-[20px]' src={InprogressIcon} alt="" />
                    </div>

                    <div className={`py-1 px-2 rounded-[50px] bg-green-primary flex flex-row items-center shadow-md shadow-slate-500 dark:shadow-dark-primary ${todoData.status === 'done' ? '' : 'hidden'}`}>
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
                    <span className='min-w-[120px] font-bold text-[15px] dark:text-white-primary'>Description</span>
                    <div className='h-fit flex-grow pl-7 mr-7 border-l-[3px] border-green-primary dark:border-white-primary'>
                        <textarea ref={textAreaRef}
                            className='w-full h-fit outline-none rounded-md bg-slate-300 dark:bg-[#353433] dark:text-white-primary px-6 py-1 shadow-md shadow-slate-400 dark:shadow-dark-primary'
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                setTodoInformation(e.target.value);
                            }}
                        ></textarea>
                    </div>
                </div>
                <div className={`w-fit h-fit px-[60px] py-[7px] rounded-[70px] shadow-md shadow-slate-500 dark:shadow-dark-primary font-semibold text-[17px] mx-auto mt-5  duration-150 ${description.trim() === '' ? 'bg-gray-400' : 'bg-green-primary cursor-pointer hover:scale-105'}`} onClick={() => {
                    if (description.trim() === '') return;
                    handleAddClick();
                    handleCloseClick(false);
                }}>Add</div>
            </div>
        </div>
    )
}

export default AddNewTask;
