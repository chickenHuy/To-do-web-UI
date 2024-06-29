import React from 'react'
import Accout from './accout';
import SettingIcon from '../assets/icon_setting.png';
import LogOutIcon from '../assets/icon_logout.png';

const AccoutOptions = ({handleSettingClick, handleLogoutClick}) => {
    return (
        <div className='w-fit h-fit bg-green-primary shadow-md shadow-slate-500 rounded-lg py-5 px-3 flex flex-col items-center'>
            <div>
                <Accout />
            </div>

            <div className='w-5/6 h-[1px] bg-black-primary my-3'></div>

            <div className='w-full h-fit flex flex-row justify-start items-center cursor-pointer p-2 rounded-md hover:shadow-md shadow-slate-600 hover:bg-green-secondary' onClick={handleSettingClick}>
                <img className='w-[20px] h-[20px] mx-1' src={SettingIcon} alt="" />
                <span>Edit profile</span>
            </div>
            <div className='w-full h-fit flex flex-row justify-start items-center cursor-pointer p-2 rounded-md hover:shadow-md shadow-slate-600 hover:bg-green-secondary' onClick={handleLogoutClick}>
                <img className='w-[20px] h-[20px] mx-1' src={LogOutIcon} alt="" />
                <span>Log out</span>
            </div>
        </div>
    )
}

export default AccoutOptions;
