import React, { useEffect, useRef, useState } from 'react'
import DefaultAvatar from '../assets/thanh_huy.png';
import { useDispatch, useSelector } from 'react-redux';
import { accoutInformationSelector, coverSheetSelector } from '../selectors/selectors';
import { Input } from './input';
import Cookies from 'js-cookie';
import AccountManager from '../data/accoutManager';
import { accoutInformation, coverSheetChange } from '../actions/actionCreater';
import CloseIcon from '../assets/icon_close.png';
import SuccessIcon from '../assets/icon_success.png';
import ErrorIcon from '../assets/icon_error.png';
import { checkComfirmPassword } from '../utils/utils';

const EditProfile = () => {

    const dispatch = useDispatch();
    const accountManager = new AccountManager();
    const accountData = useSelector(accoutInformationSelector);
    const coverSheetData = useSelector(coverSheetSelector);

    const [changePassword, setChangePassword] = useState(false);
    const [showNotify, setShowNotify] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('Chicken Hy is the best developer in the world');

    const notifyContainer = useRef(null);

    function setShowCoverSheet(show) {
        dispatch(coverSheetChange({
            ...coverSheetData,
            showCoverSheet: show,
        }))
    }

    function setAutoHideNotify() {
        setTimeout(() => {
            setShowNotify(false);
        }, 3500);
    }

    function setNotify(status, message) {
        setError(status);
        setMessage(message);
        setShowNotify(true);
        setAutoHideNotify();
    }

    function handleSaveChangeClick() {
        if (!changePassword) {
            if (accountData.firstName === '' || accountData.lastName === '') {
                setNotify(true, 'Please fill in all the information');
                return;
            }
            if (accountManager.changeInformation(accountData.email, accountData.firstName, accountData.lastName, accountData.avatarUrl)) {
                setNotify(false, 'Change information successfully');
                return;
            }
            else {
                setNotify(true, 'Change information failed');
                return;
            }
        }
        else {
            if (accountData.currentPassword === '' || accountData.newPassword === '' || accountData.confirmPassword === '') {
                setNotify(true, 'Please fill in all the information');
                return;
            }
            if (!checkComfirmPassword(accountData.newPassword, accountData.confirmPassword)) {
                setNotify(true, 'Confirm password is not correct');
                return;
            }
            if (!accountManager.checkPassword(accountData.email, accountData.currentPassword)) {
                setNotify(true, 'Current password is not correct');
                return;
            }
            if (accountManager.changeInformation(accountData.email, accountData.firstName, accountData.lastName, accountData.avatarUrl) && accountManager.changePassword(accountData.email, accountData.newPassword)) {
                setNotify(false, 'Change password successfully');
                return;
            }
            else {
                setNotify(true, 'Change password failed');
                return;
            }
        }
    }

    useEffect(() => {
        const account = accountManager.getAccountByEmail(Cookies.get('auth'));
        dispatch(accoutInformation({
            ...accountData,
            email: account.email,
            firstName: account.firstName,
            lastName: account.lastName,
            avatarUrl: account.avatarUrl,
        }))
    }, []);

    useEffect(() => {
        if (coverSheetData.showCoverSheet === false) {
            setChangePassword(false);
        }
    }, [coverSheetData]);


    return (
        <div className='z-10 bg-white-primary dark:bg-dark-secondary flex flex-col items-center py-7 rounded-md shadow-sm shadow-slate-300 dark:shadow-dark-primary relative overflow-hidden'>
            <div ref={notifyContainer} className={`absolute right-0 top-[40px] px-3 py-2 max-w-[90%] rounded-md shadow-md shadow-slate-500 dark:shadow-dark-primary duration-300 ${showNotify ? '-translate-x-[5%]' : 'translate-x-[105%]'} ${error ? 'bg-red-500' : 'bg-green-primary'}`}>
                <div className='flex flex-row items-center'>
                    <img className='w-[20px] h-[20px]' src={error ? ErrorIcon : SuccessIcon} alt="" />
                    <span className='font-semibold mx-2'>{error ? 'Error' : 'Success'}</span>
                </div>
                <span className='pl-7'>{message}</span>
            </div>
            <img className='w-[20px] h-[20px] absolute top-2 right-2 cursor-pointer hover:scale-110 duration-75' src={CloseIcon} alt="" onClick={() => {
                setShowCoverSheet(false);
            }} />

            <img className='w-[100px] h-[100px] rounded-[50%]' src={accountData.avatarUrl === '' ? DefaultAvatar : accountData.avatarUrl} alt="" />

            <Input tittle={'Email'} type={'email'} placeHolder={'Enter your email'} selector={accoutInformationSelector} fieldName={'email'} value={accountData.email} readOnly={true} />
            <Input tittle={'First name'} type={'text'} placeHolder={'Enter your first name'} selector={accoutInformationSelector} value={accountData.firstName} fieldName={'firstName'} />
            <Input tittle={'Last name'} type={'text'} placeHolder={'Enter your last name'} selector={accoutInformationSelector} value={accountData.lastName} fieldName={'lastName'} />

            <div className='w-full h-fit px-11 my-4'>
                <span className={`w-fit h-fit px-3 py-2 rounded-md shadow-md shadow-slate-400 dark:shadow-dark-primary font-semibold cursor-pointer dark:text-white-primary ${changePassword ? 'bg-gray-300 dark:bg-gray-500' : 'bg-green-secondary dark:bg-[#353433]'}`} onClick={() => setChangePassword(!changePassword)}>{changePassword ? 'Cancel change password' : 'Change password'}</span>
            </div>
            <div className={`${changePassword ? '' : 'hidden'}`}>
                <Input tittle={'Current password'} type={'password'} placeHolder={'Enter current password'} selector={accoutInformationSelector} fieldName={'currentPassword'} />
                <Input tittle={'New password'} type={'password'} placeHolder={'Enter new password'} selector={accoutInformationSelector} fieldName={'newPassword'} />
                <Input tittle={'Confirm password'} type={'password'} placeHolder={'Confirm password'} selector={accoutInformationSelector} fieldName={'confirmPassword'} />
            </div>

            <span className='w-fit h-fit px-7 py-2 mt-5 mb-3 rounded-md shadow-md shadow-slate-400 dark:shadow-dark-primary font-semibold cursor-pointer bg-green-primary' onClick={() => {
                handleSaveChangeClick();
            }}>Save change</span>
        </div>
    )
}

export default EditProfile;
