import React from 'react'
import ListTaskHeader from './listTaskHeader';
import { useSelector } from 'react-redux';
import { listTaskNavigateChangeSelector } from '../selectors/selectors';
import ListTaskItem from './listTaskItem';

const HomeListTask = () => {
    const navigateData = useSelector(listTaskNavigateChangeSelector);

    return (
        <div className='grid grid-cols-4 gap-5 overflow-y-auto px-5 pb-5 pt-1'>
            <ListTaskItem priority={'normal'} description={"This is a long text to the next line when it exceeds the width of the container This is a long text to the next line when it exceeds the width of the container This is a long text to the next line when it exceeds the width of the container This is a long text to the next line when it exceeds the width of the container"} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"1 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"2 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"3 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"4 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"5 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"6 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"7 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"8 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"9 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"10 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"11 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"12 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"13 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"14 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"15 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"16 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"17 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"18 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"19 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"20 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"21 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"22 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
            <ListTaskItem priority={'normal'} description={"23 This is a long text to the next line when it exceeds the width the container."} deadline={'25/06/2003'} status={'inprogress'} />
        </div>
    )
}

export default HomeListTask;