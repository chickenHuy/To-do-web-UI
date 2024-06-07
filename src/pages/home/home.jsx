import React, { useEffect } from 'react'
import Accout from '../../components/accout';
import ListItem from '../../components/listItem';
import SunIcon from '../../assets/icon_sun.png';
import TaskIcon from '../../assets/icon_task.png';
import CompleteIcon from '../../assets/icon_complete.png';
import AddIcon from '../../assets/icon_add.png';
import ListIcon from '../../assets/icon_list.png';
import NotifyIcon from '../../assets/icon_notify.png';
import Overview from '../../components/overview';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import StatusSelector from '../../components/statusSelector';
import PrioritySelector from '../../components/prioritySelector';
import DeadlineSelector from '../../components/deadlineSelector';

const Home = () => {

    useEffect(() => {
        document.title = 'Home - Chicken To Do';
    }, []);

    const navigate = useNavigate();

    const token = Cookies.get('auth');
    if (token === undefined) {
        navigate('/');
    }

    return (
        <div className='wrapper w-screen h-screen flex flex-col flex-grow bg-green-secondary'>
            <div className="wrapper__header rounded-br-lg h-fix w-full bg-green-primary flex flex-row items-center justify-between">
                <div className='min-w-[200px] sm:min-w-[300px] md:min-w-[350px] flex justify-center items-center'>
                    <span className='text-white-primary text-[25px] font-bold'>Chicken To Do.</span>
                </div>
                <div className='flex-grow flex flex-row justify-end items-center'>
                    <div className='p-2 rounded-[50%] hover:bg-green-secondary transition cursor-pointer relative'>
                        <img className='w-[30px h-[30px]' src={NotifyIcon} alt="" />
                        <span className='absolute -top-1 -right-1 w-5 h-5 rounded-[50%] bg-red-500 text-[12px] text-center'>1</span>
                    </div>
                    <div className='w-[1px] h-12 ml-5 bg-gray-700'></div>
                </div>
                <div className="navigate-accout w-fix h-fix px-5">
                    <Accout />
                </div>
            </div>
            <div className="wrapper__body h-full flex flex-row">
                <div className="wrapper__navigate rounded-b-lg min-w-[200px] sm:min-w-[300px] md:min-w-[350px] h-full bg-green-primary flex flex-col items-center overflow-auto">
                    <div className='w-3/4 h-[1px] rounded-md bg-black-primary'></div>
                    <div className="navigate-list-main w-full h-fix my-5">
                        <ListItem name={'My day'} iconSrc={SunIcon} />
                        <ListItem name={'Task'} iconSrc={TaskIcon} />
                        <ListItem name={'Complete'} iconSrc={CompleteIcon} />
                    </div>
                    <div className='w-3/4 h-[1px] rounded-md bg-black-primary'></div>

                    <div className='w-full h-fix'>
                        <div className='h-fix flex flex-row justify-between items-center rounded-md m-3 pl-7 pr-2 py-[6px] bg-green-secondary cursor-pointer hover:scale-105 transition shadow-sm shadow-white'>
                            <span className='text-[17px] font-semibold'>Add new list</span>
                            <img className='w-[35px] h-[35px]' src={AddIcon} alt="" />
                        </div>
                    </div>
                    <div className="navigate-list-custom w-full h-fix my-1">
                        <ListItem iconSrc={ListIcon} isCustom={true} />
                        <ListItem iconSrc={ListIcon} isCustom={true} />
                        <ListItem iconSrc={ListIcon} isCustom={true} />
                        <ListItem iconSrc={ListIcon} isCustom={true} />
                        <ListItem iconSrc={ListIcon} isCustom={true} />
                    </div>
                </div>
                <div className="wrapper__body w-full h-full bg-green-secondary flex flex-col">
                    <div className="body-overview p-3">
                        <Overview />
                    </div>


                    <div className="body-todo mx-3 mb-3 flex-grow">
                        <div className='todo-header w-full h-fit py-1 flex flex-row justify-between items-center'>
                            <div className='w-fit h-fit flex flex-row'>
                                <span className='custom-list-item mx-5 text-[18px] font-bold text-green-primary cursor-pointer relative'>To Do</span>
                                <span className='custom-list-item mx-5 text-[18px] font-bold text-green-primary cursor-pointer relative'>In Progress</span>
                                <span className='custom-list-item mx-5 text-[18px] font-bold text-green-primary cursor-pointer relative'>Done</span>
                                <span className='custom-list-item mx-5 text-[18px] font-bold text-green-primary cursor-pointer relative'>Overdue</span>
                            </div>
                            <div className='flex flex-row items-center'>
                                <div>
                                    <PrioritySelector />
                                </div>
                                <div>
                                    <StatusSelector />
                                </div>
                                <div>
                                    <DeadlineSelector />
                                </div>
                            </div>
                            <div className='flex justify-end px-3'>
                                <div className='w-fit h-fit py-3 px-7 rounded-[50px] flex flex-row items-center bg-green-primary shadow-md shadow-slate-500 transition hover:scale-105 cursor-pointer'>
                                    <img className='w-[25px] h-[25px] mr-3' src={AddIcon} alt="" />
                                    <span className='text-[17px] font-bold'>New task</span>
                                </div>
                            </div>
                        </div>
                        <div className='todo-list'>
                            <div className="list-todo">

                            </div>
                            <div className="list-inprocess">

                            </div>
                            <div className="list-done">

                            </div>
                            <div className="list-overview">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
