import React from 'react'
import ListTaskItem from './listTaskItem';

const HomeListTask = ({ listTask }) => {

    return (

        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 overflow-y-auto px-5 pb-5 pt-1'>
            {listTask.map((task) => {
                return (
                    <ListTaskItem id={task.id} priority={task.priority} status={task.status} deadline={task.deadline} description={task.description} />
                )
            })}
        </div>
    )
}

export default HomeListTask;