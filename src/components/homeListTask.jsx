import React from 'react'
import ListTaskHeader from './listTaskHeader';
import { useSelector } from 'react-redux';
import { listTaskNavigateChangeSelector } from '../selectors/selectors';
import ListTaskItem from './listTaskItem';

const HomeListTask = () => {
    const navigateData = useSelector(listTaskNavigateChangeSelector);

    return (
        <div className='w-full h-fit bg-green-primary flex-grow flex flex-col py-5 overflow-y-auto'>
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
            <ListTaskItem />
        </div>
    )
}

export default HomeListTask;