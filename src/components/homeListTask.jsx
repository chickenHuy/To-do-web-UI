import React from 'react'
import ListTaskHeader from './listTaskHeader';
import { useSelector } from 'react-redux';
import { listTaskNavigateChangeSelector } from '../selectors/selectors';
import ListTaskItem from './listTaskItem';

const HomeListTask = () => {
    const navigateData = useSelector(listTaskNavigateChangeSelector);

    return (
        <div className='grid grid-cols-4 gap-5 overflow-y-auto px-5 pb-5 pt-1'>
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container                            <textarea className='w-full h-5 px-5 outline-none bg-transparent text-[16px]' readOnly>{todoData.description}</textarea>."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container."} deadline={'25/06/2003'} status={'inprogress'} />
        </div>
    )
}

export default HomeListTask;