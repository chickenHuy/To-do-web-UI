import TodoIcon from '../assets/icon_todo.png';
import InprogressIcon from '../assets/icon_inprogress.png';
import DoneIcon from '../assets/icon_done.png';
import { useDispatch, useSelector } from 'react-redux';
import { showTaskSelectorSelector, todoInformationChangeSelector } from '../selectors/selectors';
import { showTaskSelectorChange, todoInformationChange } from '../actions/actionCreater';

const TaskStatusSelector = () => {

    const dispatch = useDispatch();
    const todoData = useSelector(todoInformationChangeSelector);
    const showTaskSelectorData = useSelector(showTaskSelectorSelector);

    const setShowListOptions = (show) => {
        const status = show ? '' : 'hidden';
        dispatch(showTaskSelectorChange({
            ...showTaskSelectorData,
            status: status,
        }));
    }

    const setStatusOfTaskOverview = (status) => {
        dispatch(todoInformationChange({
            ...todoData,
            status: status,
        }));
    }

    return (
        <div className={`z-10 absolute bg-green-secondary shadow-md shadow-slate-500 border-[1px] border-slate-300 w-fit h-fit cursor-pointer px-[7px] py-2 rounded-lg top- right-8 transition origin-top ${showTaskSelectorData.status === '' ? 'scale-100' : 'scale-0'}`}>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-600 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setStatusOfTaskOverview('todo'); }}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>To Do</span>
                <img className='w-[20px] h-[20px] mr-3' src={TodoIcon} alt="" />
            </div>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-800 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setStatusOfTaskOverview('inprogress'); }}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>In Progress</span>
                <img className='w-[20px] h-[20px] mr-3' src={InprogressIcon} alt="" />
            </div>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-green-primary flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setStatusOfTaskOverview('done'); }}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>Done</span>
                <img className='w-[20px] h-[20px] mr-3' src={DoneIcon} alt="" />
            </div>
        </div>
    )
}

export default TaskStatusSelector;