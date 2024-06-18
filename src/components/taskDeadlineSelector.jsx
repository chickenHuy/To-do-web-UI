import AllIcon from '../assets/icon_all.png';
import WeekIcon from '../assets/icon_week.png';
import TodayIcon from '../assets/icon_today.png';
import { useDispatch, useSelector } from 'react-redux';
import { showTaskSelectorSelector, todoInformationChangeSelector } from '../selectors/selectors';
import { showTaskSelectorChange, todoInformationChange } from '../actions/actionCreater';

const TaskDeadlineSelector = () => {

    const dispatch = useDispatch();
    const todoData = useSelector(todoInformationChangeSelector);
    const showTaskSelectorData = useSelector(showTaskSelectorSelector);

    const setShowListOptions = (show) => {
        const status = show ? '' : 'hidden';
        dispatch(showTaskSelectorChange({
            ...showTaskSelectorData,
            deadline: status,
        }));
    }

    const setDeadlineOfTaskOverview = (deadline) => {
        dispatch(todoInformationChange({
            ...todoData,
            deadline: deadline,
        }));
    }

    return (
        <div className={`z-10 absolute bg-green-secondary shadow-md shadow-slate-500 border-[1px] border-slate-300 w-fit h-fit cursor-pointer px-[7px] py-2 rounded-lg top-0 right-8 transition origin-top  ${showTaskSelectorData.deadline === '' ? 'scale-100' : 'scale-0'}`}>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-400 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setDeadlineOfTaskOverview('Today'); }}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>All</span>
                <img className='w-[20px] h-[20px] mr-3' src={AllIcon} alt="" />
            </div>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-600 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setDeadlineOfTaskOverview('Tomorrow'); }}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>Today</span>
                <img className='w-[20px] h-[20px] mr-3' src={TodayIcon} alt="" />
            </div>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-950 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setDeadlineOfTaskOverview('This week'); }}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>This week</span>
                <img className='w-[20px] h-[20px] mr-3' src={WeekIcon} alt="" />
            </div>
        </div>
    )
}

export default TaskDeadlineSelector;