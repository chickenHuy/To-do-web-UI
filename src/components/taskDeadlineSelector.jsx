import { useDispatch, useSelector } from 'react-redux';
import { showTaskSelectorSelector, todoInformationChangeSelector } from '../selectors/selectors';
import { showTaskSelectorChange, todoInformationChange } from '../actions/actionCreater';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { convertDateToISO } from '../utils/utils';

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

    const handleSelectDay = (day) => {
        setDeadlineOfTaskOverview(day.toLocaleDateString());
        setShowListOptions(false);
    }

    return (
        <div className={`absolute bg-green-primary top-0 right-10 rounded-md shadow-md shadow-slate-500 dark:shadow-dark-primary ${showTaskSelectorData.deadline === '' ? '' : 'hidden'}`}>
            <DayPicker mode="single" selected={new Date(convertDateToISO(todoData.deadline))} onSelect={handleSelectDay} />
        </div>
    )
}

export default TaskDeadlineSelector;