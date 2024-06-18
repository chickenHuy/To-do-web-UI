import React, { useRef } from 'react';
import AddIcon from '../assets/icon_add.png';
import { useDispatch } from 'react-redux';
import { listTaskNavigateChange } from '../actions/actionCreater';

const ListTaskHeader = () => {
    const dispatch = useDispatch();

    const todoNavigateRef = useRef(null);
    const inprocessNavigateRef = useRef(null);
    const doneNavigateRef = useRef(null);
    const overdueNavigateRef = useRef(null);

    function cleanNavigateClass(className) {
        todoNavigateRef.current.classList.remove(className);
        inprocessNavigateRef.current.classList.remove(className);
        doneNavigateRef.current.classList.remove(className);
        overdueNavigateRef.current.classList.remove(className);
    }

    function addClass(navigate, className) {
        switch (navigate) {
            case 'todo':
                todoNavigateRef.current.classList.add(className);
                break;
            case 'inprocess':
                inprocessNavigateRef.current.classList.add(className);
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
                listTaskNavigateChange({
                    navigate: navigate
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
                <div className='w-fit h-fit flex flex-row'>
                    <span onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'todo')} ref={todoNavigateRef} onClick={() => updateNavigate('click', 'todo')} className='custom-list-item active item-todo mr-10 text-[18px] font-bold text-green-primary cursor-pointer relative'>To Do</span>
                    <span onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'inprocess')} ref={inprocessNavigateRef} onClick={() => updateNavigate('click', 'inprocess')} className='custom-list-item item-inprocess mr-10 text-[18px] font-bold text-green-primary cursor-pointer relative'>In Progress</span>
                    <span onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'done')} ref={doneNavigateRef} onClick={() => updateNavigate('click', 'done')} className='custom-list-item item-done mr-10 text-[18px] font-bold text-green-primary cursor-pointer relative'>Done</span>
                    <span onMouseLeave={() => updateNavigate('unhover', '')} onMouseEnter={() => updateNavigate('hover', 'overdue')} ref={overdueNavigateRef} onClick={() => updateNavigate('click', 'overdue')} className='custom-list-item item-overdue mr-10 text-[18px] font-bold text-green-primary cursor-pointer relative'>Overdue</span>
                </div>
            </div>
        </div>
    );
};

export default ListTaskHeader;
