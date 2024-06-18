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
import { useDispatch, useSelector } from 'react-redux';
import HomeFilter from '../../components/homeFilter';
import HomeListTask from '../../components/homeListTask';
import ListTaskHeader from '../../components/listTaskHeader';
import { showOverviewSelector } from '../../selectors/selectors';
import { showOverview } from '../../actions/actionCreater';

const Home = () => {

    useEffect(() => {
        document.title = 'Home - Chicken To Do';
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const overviewData = useSelector(showOverviewSelector);

    const token = Cookies.get('auth');
    if (token === undefined) {
        navigate('/');
    }

    const hiddenFilterOptions = (event) => {
        if (event.target === event.currentTarget) {
            dispatch({
                type: 'todo/show-filter',
                payload: {
                    status: 'hidden',
                    priority: 'hidden',
                    deadline: 'hidden',
                },
            });
        }
    };


    function setShowOverview(show) {
        dispatch(showOverview({
            showOverview: show,
        }));
    }

    return (
        <div className='w-fit h-fit relative'>
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
                <div className="wrapper__body flex-grow flex flex-row overflow-hidden">
                    <div className="wrapper__navigate rounded-b-lg min-w-[200px] md:min-w-[300px] xl:min-w-[350px] h-full bg-green-primary flex flex-col items-center overflow-auto">
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
                    <div className="wrapper__body w-full h-full bg-green-secondary flex flex-col pt-5">
                        <div className="body-header w-full h-fit mb-2 flex flex-row justify-between items-center px-5">
                            <span className='text-[28px] font-semibold'>My day</span>
                            <div className='flex justify-end px-3'>
                                <div className='w-fit h-fit py-3 px-7 rounded-[50px] flex flex-row items-center bg-green-primary shadow-md shadow-slate-500 transition hover:scale-105 cursor-pointer'>
                                    <img className='w-[25px] h-[25px] mr-3' src={AddIcon} alt="" />
                                    <span className='text-[17px] font-bold'>New task</span>
                                </div>
                            </div>
                        </div>

                        <div className="body-todo flex-grow flex flex-col overflow-hidden">
                            <HomeFilter />
                            <ListTaskHeader />
                            <div className='todo-list flex-grow overflow-y-auto'>
                                <HomeListTask />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 z-10 ${overviewData.showOverview ? 'scale-1' : 'scale-0'}`}>
                <Overview />
            </div>
            <div className={`w-full h-full bg-slate-700 bg-opacity-70 absolute top-0 ${overviewData.showOverview ? '' : 'hidden'}`} onClick={() => setShowOverview(false)}></div>
        </div>
    );
}

export default Home;
