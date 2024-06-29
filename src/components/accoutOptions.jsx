import React, { useEffect, useState } from 'react'
import Accout from './accout';
import SettingIcon from '../assets/icon_setting.png';
import LogOutIcon from '../assets/icon_logout.png';
import SettingIconWhite from '../assets/icon_setting_white.png';
import LogOutIconWhite from '../assets/icon_logout_white.png';

const AccoutOptions = ({ handleSettingClick, handleLogoutClick }) => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.contains('dark') ? setDarkMode(true) : setDarkMode(false);
    }, []);

    return (
        <div className='w-fit h-fit bg-green-primary dark:bg-dark-primary shadow-md shadow-slate-500 dark:shadow-dark-primary rounded-lg py-5 px-3 flex flex-col items-center'>
            <div>
                <Accout />
            </div>

            <div className='w-5/6 h-[1px] bg-black-primary dark:bg-white-primary my-3'></div>

            <div className='w-full h-fit flex flex-row justify-start items-center cursor-pointer p-2 rounded-md hover:shadow-md shadow-slate-600 hover:bg-green-secondary dark:hover:bg-dark-secondary dark:text-white-primary' onClick={handleSettingClick}>
                <img className='w-[20px] h-[20px] mx-1' src={darkMode ? SettingIconWhite : SettingIcon} alt="" />
                <span>Edit profile</span>
            </div>
            <div className='w-full h-fit flex flex-row justify-start items-center cursor-pointer p-2 rounded-md hover:shadow-md shadow-slate-600 hover:bg-green-secondary dark:hover:bg-dark-secondary dark:text-white-primary' onClick={handleLogoutClick}>
                <img className='w-[20px] h-[20px] mx-1' src={darkMode ? LogOutIconWhite : LogOutIcon} alt="" />
                <span>Log out</span>
            </div>
        </div>
    )
}

export default AccoutOptions;
