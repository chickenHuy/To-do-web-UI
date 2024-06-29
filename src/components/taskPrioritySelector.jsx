import HighIcon from '../assets/icon_priority_high.png';
import Normalcon from '../assets/icon_priority_normal.png';
import LowIcon from '../assets/icon_priority_slow.png';
import { useDispatch, useSelector } from 'react-redux';
import { listTaskNavigateChangeSelector, showTaskSelectorSelector, todoInformationChangeSelector } from '../selectors/selectors';
import { showTaskSelectorChange, todoInformationChange } from '../actions/actionCreater';

const TaskPrioritySelector = () => {

    const dispatch = useDispatch();
    const todoData = useSelector(todoInformationChangeSelector);
    const showTaskSelectorData = useSelector(showTaskSelectorSelector);

    const setShowListOptions = (show) => {
        const status = show ? '' : 'hidden';
        dispatch(showTaskSelectorChange({
            ...showTaskSelectorData,
            priority: status,
        }));
    }

    const setPriorityOfTaskOverview = (status) => {
        dispatch(todoInformationChange({
            ...todoData,
            priority: status,
        }));
    }

    return (
        <div className={`z-10 absolute bg-green-secondary shadow-md shadow-slate-500 border-[1px] border-slate-300 w-fit h-fit cursor-pointer px-[7px] py-2 rounded-lg top-0 right-9 transition origin-top  ${showTaskSelectorData.priority === '' ? 'scale-100' : 'scale-0'}`}>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-950 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setPriorityOfTaskOverview('high');}}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>High</span>
                <img className='w-[20px] h-[20px] mr-3' src={HighIcon} alt="" />
            </div>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-slate-800 flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setPriorityOfTaskOverview('normal');}}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>Normal</span>
                <img className='w-[20px] h-[20px] mr-3' src={Normalcon} alt="" />
            </div>
            <div className={`py-1 px-2 my-2 rounded-[50px] bg-green-primary flex flex-row items-center justify-between shadow-md shadow-slate-800 transition hover:scale-105`} onClick={() => { setShowListOptions(false); setPriorityOfTaskOverview('low');}}>
                <span className='px-5 font-semibold text-white-primary text-[14px]'>Low</span>
                <img className='w-[20px] h-[20px] mr-3' src={LowIcon} alt="" />
            </div>
        </div>
    )
}

export default TaskPrioritySelector;