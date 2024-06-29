import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterInformationChange } from '../actions/actionCreater';
import { coverSheetSelector, filterInformationChangeSelector } from '../selectors/selectors';

const ListTaskHeader = () => {
    const dispatch = useDispatch();
    const filterData = useSelector(filterInformationChangeSelector);
    const coverSheetData = useSelector(coverSheetSelector);

    const allNavigateRef = useRef(null);
    const todoNavigateRef = useRef(null);
    const inprogressNavigateRef = useRef(null);
    const doneNavigateRef = useRef(null);
    const overdueNavigateRef = useRef(null);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.contains('dark') ? setDarkMode(true) : setDarkMode(false);
    }, [coverSheetData]);

    useEffect(() => {
        if(darkMode) {
            allNavigateRef.current.classList.add('dark');
            todoNavigateRef.current.classList.add('dark');
            inprogressNavigateRef.current.classList.add('dark');
            doneNavigateRef.current.classList.add('dark');
            overdueNavigateRef.current.classList.add('dark');
        }
        else{
            cleanNavigateClass('dark');
        }
    }, [darkMode]);

    function cleanNavigateClass(className) {
        allNavigateRef.current.classList.remove(className);
        todoNavigateRef.current.classList.remove(className);
        inprogressNavigateRef.current.classList.remove(className);
        doneNavigateRef.current.classList.remove(className);
        overdueNavigateRef.current.classList.remove(className);
    }

    function addClass(navigate, className) {
        switch (navigate) {
            case 'all':
                allNavigateRef.current.classList.add(className);
                break;
            case 'todo':
                todoNavigateRef.current.classList.add(className);
                break;
            case 'inprogress':
                inprogressNavigateRef.current.classList.add(className);
                break;
            case 'done':
                doneNavigateRef.current.classList.add(className);
                break;
            case 'overdue':
                overdueNavigateRef.current.classList.add(className);
                break;
            default:
                break;
        }
    }

    const updateNavigate = (action, navigate) => {
        if (action === 'click') {
            cleanNavigateClass('active');
            addClass(navigate, 'active');

            dispatch(
                filterInformationChange({
                    ...filterData,
                    status: navigate,
                })
            );
        }
        else if (action === 'hover') {
            cleanNavigateClass('hover');
            addClass(navigate, 'hover');
        }
        else {
            cleanNavigateClass('hover');
        }
    }

    return (
        <div>
            <div className="header-navigate mb-5 px-5">
                <div className='w-fit h-fit flex flex-row sm:gap-10 gap-5'>
                    <div onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'all')} ref={allNavigateRef} onClick={() => updateNavigate('click', 'all')} className='custom-list-item active item-todo text-[18px] font-bold text-green-primary dark:text-white-primary cursor-pointer relative'>All</div>
                    <div onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'todo')} ref={todoNavigateRef} onClick={() => updateNavigate('click', 'todo')} className='custom-list-item item-todo text-[18px] font-bold text-green-primary dark:text-white-primary cursor-pointer relative'>To Do</div>
                    <div onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'inprogress')} ref={inprogressNavigateRef} onClick={() => updateNavigate('click', 'inprogress')} className='custom-list-item item-inprogress text-[18px] font-bold text-green-primary dark:text-white-primary cursor-pointer relative'>In Progress</div>
                    <div onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'done')} ref={doneNavigateRef} onClick={() => updateNavigate('click', 'done')} className='custom-list-item item-done text-[18px] font-bold text-green-primary dark:text-white-primary cursor-pointer relative'>Done</div>
                    <div onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'overdue')} ref={overdueNavigateRef} onClick={() => updateNavigate('click', 'overdue')} className='custom-list-item item-overdue text-[18px] font-bold text-green-primary dark:text-white-primary cursor-pointer relative'>Overdue</div>
                </div>
            </div>
        </div>
    );
};

export default ListTaskHeader;
