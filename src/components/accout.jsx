import React from 'react'
import { useSelector } from 'react-redux';
import { accoutInformationSelector } from '../selectors/selectors';
import DefaultAvatar from '../assets/thanh_huy.png';

const Accout = () => {

    const accoutData = useSelector(accoutInformationSelector);

    return (
        <div className='w-full h-fix py-3 pl-3 flex flex-row'>
            <div>
                <img className='w-[50px] h-[50px] rounded-[50%]' src={accoutData.avatarUrl === '' ? DefaultAvatar : accoutData.avatarUrl} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-2'>
                <span className='truncate text-black-primary dark:text-white-primary text-[17px] font-semibold'>
                    {accoutData.firstName === '' ? 'User' : accoutData.firstName}
                    <span className='ml-1 truncate'>
                        {accoutData.lastName === '' ? 'name' : accoutData.lastName}
                    </span>
                </span>
                <span className='truncate text-[14px] text-black-primary dark:text-white-primary'>{accoutData.email === '' ? 'example@gmail.com' : accoutData.email}</span>
            </div>
        </div>
    )
}

export default Accout;
