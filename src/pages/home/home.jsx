import React, { useEffect, useRef, useState } from 'react'
import ListItem from '../../components/listItem';
import SunIcon from '../../assets/icon_sun.png';
import MoonIcon from '../../assets/icon_moon.png';
import TaskIcon from '../../assets/icon_task.png';
import CompleteIcon from '../../assets/icon_complete.png';
import AddIcon from '../../assets/icon_add.png';
import AddIconWhite from '../../assets/icon_add_white.png';
import ListIcon from '../../assets/icon_list.png';
import ListIconWhite from '../../assets/icon_list_white.png';
import DownIcon from '../../assets/icon_down.png';
import UpIcon from '../../assets/icon_up.png';
import DownIconWhite from '../../assets/icon_down_white.png';
import UpIconWhite from '../../assets/icon_up_white.png';
import MenuIcon from '../../assets/icon_menu.png';
import Overview from '../../components/overview';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeFilter from '../../components/homeFilter';
import HomeListTask from '../../components/homeListTask';
import ListTaskHeader from '../../components/listTaskHeader';
import { accoutInformationSelector, coverSheetSelector, filterInformationChangeSelector, listTaskNavigateChangeSelector, loginInformationChangeSelector, showFilterSelector, showOverviewSelector, todoInformationChangeSelector } from '../../selectors/selectors';
import { accoutInformation, coverSheetChange, loginInformationChange, showOverview } from '../../actions/actionCreater';
import DataManager from '../../data/dataManager';
import AddNewTask from '../../components/addNewTask';
import { checkOverdue } from '../../utils/utils';
import AccoutOptions from '../../components/accoutOptions';
import DefaultAvatar from '../../assets/thanh_huy.png';
import EditProfile from '../../components/editProfile';
import AccountManager from '../../data/accoutManager';

const Home = () => {

    useEffect(() => {
        document.title = 'Home - Chicken To Do';
    }, []);

    const token = Cookies.get('auth');
    if (token === undefined) {
        navigate('/');
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dataManager = new DataManager(token);
    const accoutManager = new AccountManager();

    const accoutData = useSelector(accoutInformationSelector);
    const loginData = useSelector(loginInformationChangeSelector);
    const todoData = useSelector(todoInformationChangeSelector);
    const filterData = useSelector(filterInformationChangeSelector);
    const overviewData = useSelector(showOverviewSelector);
    const showFilterData = useSelector(showFilterSelector);
    const coverSheetData = useSelector(coverSheetSelector);
    const listTaskNavigateData = useSelector(listTaskNavigateChangeSelector);

    const [listTaskData, setListTaskData] = useState([]);
    const [listTaskCustom, setListTaskCustom] = useState(dataManager.getListCustom());
    const [showAccountOptions, setShowAccountOptions] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [listName, setListName] = useState('My day');

    const input = useRef(null);

    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
    });

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setCoverSheet(false, '', 'bg-transparent');
    };

    const hiddenFilterOptions = () => {
        dispatch({
            type: 'todo/show-filter',
            payload: {
                ...showFilterData,
                status: 'hidden',
                priority: 'hidden',
                deadline: 'hidden',
            },
        });
    }

    const setCoverSheet = (show, opacity, backgroundColor) => {
        dispatch(coverSheetChange({
            ...coverSheetData,
            showCoverSheet: show,
            opacity: opacity !== '' ? opacity : coverSheetData.opacity,
            backgroundColor: backgroundColor !== '' ? backgroundColor : coverSheetData.backgroundColor,
        }));
    }

    function setShowOverview(option, show) {
        if (option === 'overview') {
            dispatch(showOverview({
                ...overviewData,
                showOverview: show,
            }));
        } else if (option === 'addNewTask') {
            dispatch(showOverview({
                ...overviewData,
                showAddNewTask: show,
            }));
        } else {
            dispatch(showOverview({
                ...overviewData,
                showOverview: show,
                showAddNewTask: show,
            }));
        }

        setCoverSheet(show, '', '');
    }

    function getListTaskBasedOnNavigate() {
        if (listTaskNavigateData.navigate === 'my-day') {
            return dataManager.getTaskMyDay();
        }
        else if (listTaskNavigateData.navigate === 'task') {
            return dataManager.getTasks();
        }
        else if (listTaskNavigateData.navigate === 'complete') {
            return dataManager.getCompletedTasks();
        }
        else if (listTaskNavigateData.navigate === 'custom') {
            return dataManager.getTaskOfCustomItem(listTaskNavigateData.id);
        }
    }

    function getListTaskBaseOnStatus(listTask) {
        let filteredListTask = [];

        switch (filterData.status) {
            case 'todo':
                filteredListTask = listTask.filter((item) => item.status === 'todo');
                break;
            case 'inprogress':
                filteredListTask = listTask.filter((item) => item.status === 'inprogress');
                break;
            case 'done':
                filteredListTask = listTask.filter((item) => item.status === 'done');
                break;
            case 'overdue':
                filteredListTask = listTask.filter((item) => checkOverdue(item.deadline) && item.status !== 'done');
                break;
            default:
                filteredListTask = listTask;
                break;
        }
        return filteredListTask;
    }

    function getListTaskBaseOnPriority(listTask) {
        let filteredListTask = [];

        switch (filterData.priority) {
            case 'High':
                filteredListTask = listTask.filter((item) => item.priority === 'high');
                break;
            case 'Normal':
                filteredListTask = listTask.filter((item) => item.priority === 'normal');
                break;
            case 'Low':
                filteredListTask = listTask.filter((item) => item.priority === 'low');
                break;
            default:
                filteredListTask = listTask;
                break;
        }
        return filteredListTask;
    }

    function getListTaskBaseOnDeadline(listTask) {
        let filteredListTask = [];

        switch (filterData.deadline) {
            case 'All':
                filteredListTask = listTask;
                break;
            case 'Today':
                filteredListTask = listTask.filter((item) => item.deadline === new Date().toLocaleDateString());
                break;
            case 'Tomorrow':
                let tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                filteredListTask = listTask.filter((item) => item.deadline === tomorrow.toLocaleDateString());
                break;
            default:
                filteredListTask = listTask.filter((item) => item.deadline === filterData.deadline);
                break;
        }
        return filteredListTask;
    }

    function countName(name) {
        let listName = dataManager.getListNameCustom();
        let regex = /^[\w\s]+\(\d+\)$/;

        let count = listName.reduce((acc, item) => {
            if (regex.test(item)) {
                let nameOriginal = item.split(' ').slice(0, -1).join(' ');
                return nameOriginal === name ? acc + 1 : acc;
            }
            return item === name ? acc + 1 : acc;
        }, 0);

        return count;
    }

    function handleAddNewList() {
        let name = input.current.value;

        if (input.current.value === '') {
            name = 'Untitled list';
        }

        let count = countName(name);

        if (count > 0) {
            name = name + ` (${count})`;
        }

        dataManager.addNewListCustom(name);
        input.current.value = '';

        setListTaskCustom([...dataManager.getListCustom()]);
    }

    function addNewTask() {
        dataManager.addNewTask(listTaskNavigateData.navigate, listTaskNavigateData.id, todoData);
    }

    function handleActionSearch(stringSearch) {
        let listTask = getListTaskBaseOnDeadline(getListTaskBaseOnPriority(getListTaskBaseOnStatus(getListTaskBasedOnNavigate())));
        let filteredListTask = listTask.filter((item) => item.description.toLowerCase().includes(stringSearch.toLowerCase()));

        setListTaskData(filteredListTask);
    }

    function handleSettingClick() {
        setShowAccountOptions(false);
        setCoverSheet(true, '', 'bg-slate-700');
        setShowEditProfile(true);
    }

    function handleLogoutClick() {
        Cookies.remove('auth');
        dispatch(accoutInformation({
            ...accoutData,
            email: '',
            firstName: '',
            lastName: '',
            avatarUrl: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        }))

        dispatch(loginInformationChange({
            ...loginData,
            email: '',
            password: '',
            emailError: false,
        }))

        navigate('/');

        setShowAccountOptions(false);
        setCoverSheet(false, '', '');
    }

    useEffect(() => {
        let listTaskFiltered = getListTaskBaseOnDeadline(getListTaskBaseOnPriority(getListTaskBaseOnStatus(getListTaskBasedOnNavigate())));
        setListTaskData(listTaskFiltered);

        if (listTaskNavigateData.navigate !== 'custom') {
            setListName(listTaskNavigateData.name === undefined ? 'My day' : listTaskNavigateData.name);
        }
        else {
            let name = dataManager.getNameOfCustomItem(listTaskNavigateData.id);
            setListName(name);
        }
    }, [listTaskNavigateData, filterData, overviewData]);

    useEffect(() => {
        dataManager.updateTask(listTaskNavigateData.navigate, listTaskNavigateData.id, todoData)
    }, [todoData]);

    useEffect(() => {
        if (!coverSheetData.showCoverSheet) {
            setShowAccountOptions(false);
            setShowEditProfile(false);
            setListTaskCustom(dataManager.getListCustom());
            setShowMenu(false);
        }
    }, [coverSheetData.showCoverSheet]);

    useEffect(() => {
        let accout = accoutManager.getAccountByEmail(token);
        dispatch(accoutInformation({
            ...accoutData,
            email: accout.email,
            firstName: accout.firstName,
            lastName: accout.lastName,
            avatarUrl: accout.avatarUrl,
        }))
    }, []);

    return (
        <div className='w-fit h-fit relative overflow-auto'>
            <div className='wrapper w-screen min-w-[435px] h-screen flex flex-col flex-grow bg-green-secondary dark:bg-dark-secondary'>
                <div className="wrapper__header rounded-br-lg min-h-[75px]  bg-green-primary dark:bg-dark-primary flex flex-row items-center justify-between relative">
                    <div className='min-w-[250px] xl:min-w-[20%] flex justify-center items-center'>
                        <img className={`w-[35px] h-[35px] p-1 mr-2 cursor-pointer hover:scale-105 ${screenWidth <= 750 ? '' : 'hidden'}`} src={MenuIcon} alt="" onClick={() => {
                            setShowMenu(!showMenu);
                            setCoverSheet(true, '', 'bg-transparent');
                        }} />
                        <span className='text-white-primary text-[25px] font-bold'>Chicken To Do.</span>
                    </div>
                    <div className="navigate-accout w-fix h-fix px-5 flex flex-row items-center">
                        <img className='w-[50px] h-[50px] rounded-[50%]' src={accoutData.avatarUrl === '' ? DefaultAvatar : accoutData.avatarUrl} alt="" />
                        <img className='w-[25px] h-[25px] p-1 ml-2 cursor-pointer rounded-[70px]' src={showAccountOptions ? darkMode ? UpIconWhite : UpIcon : darkMode ? DownIconWhite : DownIcon} alt="" onClick={() => {
                            setShowAccountOptions(!showAccountOptions);
                            setCoverSheet(!showAccountOptions, '', 'bg-transparent');
                        }} />
                    </div>
                    <div className={`absolute z-10 right-0 top-[115%] duration-300 origin-top-right ${showAccountOptions && coverSheetData.showCoverSheet ? 'scale-100' : 'scale-0'}`}>
                        {showAccountOptions && <AccoutOptions handleLogoutClick={handleLogoutClick} handleSettingClick={handleSettingClick} />}
                    </div>
                </div>
                <div className="wrapper__body flex-grow flex flex-row overflow-hidden">
                    <div className={`wrapper__navigate rounded-b-lg xl:min-w-[20%] h-full bg-green-primary dark:bg-dark-primary flex flex-col items-center overflow-auto duration-300 origin-top-left ${screenWidth <= 750 ? showMenu ? 'min-w-[25px] absolute z-10 scale-100' : 'w-0 scale-0' : 'min-w-[250px]'}`}>
                        <div className='w-3/4 h-[1px] rounded-md bg-black-primary'></div>
                        <div className="navigate-list-main w-full h-fix my-5">
                            <ListItem name={'My day'} iconSrc={SunIcon} navigate={'my-day'} id={''} />
                            <ListItem name={'Task'} iconSrc={TaskIcon} navigate={'task'} id={''} />
                            <ListItem name={'Complete'} iconSrc={CompleteIcon} navigate={'complete'} id={''} />
                        </div>
                        <div className='w-3/4 h-[1px] rounded-md bg-black-primary'></div>

                        <div className='w-full h-fix p-3'>
                            <div className='w-full h-fix flex flex-row justify-between items-center rounded-md pl-7 pr-2 py-[6px] bg-green-secondary dark:bg-dark-secondary shadow-sm shadow-green-secondary dark:shadow-dark-secondary'>
                                <input ref={input} className='bg-transparent outline-none text-[16px] w-3/4 dark:text-white' type="text" name="" id="" placeholder='Add new list' onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleAddNewList();
                                    }
                                }} />
                                <img className='w-[35px] h-[35px] cursor-pointer' src={darkMode ? AddIconWhite : AddIcon} alt="" onClick={() => handleAddNewList()} />
                            </div>
                        </div>
                        <div className="navigate-list-custom w-full h-fix my-1 overflow-y-auto pb-20 flex-grow">
                            {listTaskCustom.map((item) => {
                                return (
                                    <ListItem name={item.name} iconSrc={darkMode ? ListIconWhite : ListIcon} navigate={'custom'} id={item.id} isCustom={true} />
                                );
                            })
                            }
                        </div>
                        <div className='w-full h-fit p-3'>
                            <div className={`w-[150px] h-[40px] px-7 py-1 mx-auto bg-green-secondary dark:bg-dark-secondary flex flex-row items-center rounded-[70px] border-[1px] border-green-secondary dark:border-dark-secondary shadow-sm shadow-green-secondary dark:shadow-dark-secondary cursor-pointer overflow-hidden relative`} onClick={toggleTheme}>
                                <div className={`absolute right-1 flex flex-row items-center duration-500 ${!darkMode ? '' : '-translate-x-[130%] scale-0'}`}>
                                    <span className='font-semibold text-[12px] text-dark-secondary'>LIGHT MODE</span>
                                    <img className='w-[37px] h-[37px] p-1 rounded-[70px] duration-500 transition ml-3' src={SunIcon} alt="" />
                                </div>
                                <div className={`absolute left-1 flex flex-row items-center duration-500 ${darkMode ? '' : 'translate-x-[130%] scale-0'}`}>
                                    <img className='w-[37px] h-[37px] p-1 rounded-[70px] duration-500 transition mr-3' src={MoonIcon} alt="" />
                                    <span className='font-semibold text-[12px] text-green-secondary'>DARK MODE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper__body w-full h-full bg-green-secondary dark:bg-dark-secondary flex flex-col pt-5">
                        <div className="body-header w-full h-fit mb-2 flex flex-row justify-between items-center px-5">
                            <span className='text-[28px] font-semibold text-black dark:text-white'>{listName}</span>
                            <div className='flex justify-end px-3'>
                                <div className={`w-fit h-fit py-3 px-7 rounded-[50px] flex flex-row items-center bg-green-primary dark:bg-dark-primary shadow-md shadow-slate-500 dark:shadow-slate-900 transition hover:scale-105 cursor-pointer ${listTaskNavigateData.navigate === 'task' || listTaskNavigateData.navigate === 'complete' ? 'scale-0' : 'scale-100'}`} onClick={() => {
                                    setShowOverview('addNewTask', true);
                                    setCoverSheet(true, 'bg-opacity-70', 'bg-slate-700');
                                }}>
                                    <img className='w-[25px] h-[25px] mr-3' src={darkMode ? AddIconWhite : AddIcon} alt="" />
                                    <span className='text-[17px] font-bold dark:text-white'>New task</span>
                                </div>
                            </div>
                        </div>

                        <div className="body-todo flex-grow flex flex-col overflow-hidden">
                            <HomeFilter handleActionSearch={handleActionSearch} />
                            <ListTaskHeader />
                            <div className='todo-list flex-grow overflow-y-auto'>
                                <HomeListTask listTask={listTaskData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute ${screenWidth <= 750 ? 'w-full' : 'w-1/2'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 z-10 ${overviewData.showOverview && coverSheetData.showCoverSheet ? 'scale-100' : 'scale-0'}`}>
                {overviewData.showOverview && <Overview />}
            </div>
            <div className={`absolute ${screenWidth <= 750 ? 'w-full' : 'w-1/2'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 z-10 ${overviewData.showAddNewTask && coverSheetData.showCoverSheet ? 'scale-100' : 'scale-0'}`}>
                {overviewData.showAddNewTask && <AddNewTask handleAddClick={addNewTask} handleCloseClick={setShowOverview} />}
            </div>
            <div className={`absolute w-[435px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 z-10 ${showEditProfile && coverSheetData.showCoverSheet ? 'scale-100' : 'scale-0'}`}>
                {showEditProfile && <EditProfile />}
            </div>
            <div className={`w-full h-full ${coverSheetData.opacity} ${coverSheetData.backgroundColor} absolute top-0 ${coverSheetData.showCoverSheet ? '' : 'hidden'}`} onClick={() => {
                setCoverSheet(false, '', '');
                hiddenFilterOptions();
                setShowOverview('all', false);
            }}></div>
        </div>
    );
}

export default Home;
