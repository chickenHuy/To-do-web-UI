import React from 'react'
import { useSelector } from 'react-redux';
import { accoutInformationSelector } from '../selectors/selectors';
import DefaultAvatar from '../assets/thanh_huy.png';

const Accout = () => {

    const accoutData = useSelector(accoutInformationSelector);
    if (accoutData.avatarUrl === '') {
        console.log('avatarUrl is empty');
    }

    return (
        <div className='w-full h-fix py-7 pl-3 flex flex-row'>
            <div>
                <img className='w-[70px] h-[70px] rounded-[50%]' src={accoutData.avatarUrl === '' ? DefaultAvatar : accoutData.avatarUrl} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-2'>
                <span className='truncate text-black-primary text-[20px] font-semibold'>
                    {accoutData.firstName === '' ? 'First name' : accoutData.firstName}
                    <span className='ml-1 truncate'>
                        {accoutData.lastName === '' ? 'Last name' : accoutData.lastName}
                    </span>
                </span>
                <span className='truncate text-[15px] text-black-primary'>{accoutData.email === '' ? 'example@gmail.com' : accoutData.email}</span>
            </div>
        </div>
    )
}

export default Accout;
