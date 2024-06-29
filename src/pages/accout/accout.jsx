import React, { useRef, useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { loginInformationChangeSelector, registerInformationChangeSelector } from '../../selectors/selectors';
import { useSelector } from 'react-redux';
import IconError from '../../assets/icon_error.png';
import IconSuccess from '../../assets/icon_success.png';
import { useNavigate } from 'react-router-dom';
import AccountManager from '../../data/accoutManager';

const Account = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState(false);
    const [showNotify, setShowNotify] = useState(false);

    const loginData = useSelector(loginInformationChangeSelector);
    const registerData = useSelector(registerInformationChangeSelector);

    const navigate = useNavigate();
    const accountManager = new AccountManager();
    const notifyMessage = useRef(null);

    const setNotify = (status, message) => {
        setError(status);
        setErrorMessage(message);
        setShowNotify(true);
    };

    const setErrorMessage = (message) => {
        notifyMessage.current.innerHTML = message;
    };

    const handleButtonLoginClick = () => {
        setShowNotify(false);

        setTimeout(() => {
            if (loginData.emailError === true) {
                setNotify(true, 'This email is not valid. Make sure the email is imported as example@gmail.com');
                return;
            } else {
                for (const key in loginData) {
                    if (loginData[key] === '') {
                        setNotify(true, 'Please fill in all the information');
                        return;
                    }
                }
            }

            if (!accountManager.checkEmailExist(loginData.email)) {
                setNotify(true, 'Email is not exist <a href="#" style="font-weight: bold; text-decoration: underline;" onclick="document.querySelector(\'#signup-link\').click()">Sign Up now.</a>');
                return;
            }

            if (!accountManager.checkPassword(loginData.email, loginData.password)) {
                setNotify(true, 'Email or password is incorrect');
                return;
            }

            document.cookie = "auth= " + loginData.email + "; path=/";
            navigate('/home');
        }, 200);
    };

    const handleButtonRegisterClick = () => {
        setShowNotify(false);

        setTimeout(() => {
            if (registerData.emailError === true) {
                setNotify(true, 'This email is not valid. Make sure the email is imported as example@gmail.com');
                return;
            }

            for (const key in registerData) {
                if (registerData[key] === '') {
                    setNotify(true, 'Please fill in all the information');
                    return;
                }
            }

            if (accountManager.checkEmailExist(registerData.email)) {
                setNotify(true, 'Email is already exist <a href="#" style="font-weight: bold; text-decoration: underline;" onclick="document.querySelector(\'#login-link\').click()">Log In now.</a>');
                return;
            }

            accountManager.createNewUser(registerData.email, registerData.password, registerData.firstName, registerData.lastName, '');
            setNotify(false, 'Register successfully');
        }, 200);
    };

    return (
        <div className='w-screen h-screen bg-black-primary flex justify-center items-center'>
            <div className="wrapper w-full h-full flex flex-row items-center overflow-auto relative">
                <div className={`absolute top-1/2 -translate-y-1/2 wrapper__login shadow-md shadow-white h-fit bg-green-secondary p-10 flex flex-col items-center rounded-xl duration-500 ${isLogin ? 'left-1/2 -translate-x-1/2 scale-100' : 'left-0 -translate-x-[105%] scale-0'}`}>
                    <span className='text-green-primary font-bold text-[30px] mt-5 mb-5'>Log In</span>
                    <div className='my-1'>
                        <Input tittle="Email" placeHolder="Enter your email" type={'email'} selector={loginInformationChangeSelector} fieldName={'email'} />
                    </div>
                    <div className='my-1'>
                        <Input tittle="Password" placeHolder="Enter your password" type={'password'} selector={loginInformationChangeSelector} fieldName={'password'} />
                    </div>
                    <a className='w-full text-right text-green-primary font-bold text-[14px] hover:underline' href="#">Forgot password?</a>
                    <div className='w-full mt-10 mb-3'>
                        <Button text={'Log In'} handleOnClick={handleButtonLoginClick} />
                    </div>
                    <span className='mb-5'>
                        Don't have an account? <span id="signup-link" className='text-green-primary font-bold text-[16px] cursor-pointer hover:underline' onClick={() => { setIsLogin(false); setShowNotify(false); }}>Sign Up</span>
                    </span>
                </div>

                <div className={`absolute top-1/2 -translate-y-1/2 wrapper__register shadow-md shadow-white h-fit bg-green-secondary p-10 flex flex-col items-center rounded-xl duration-500 ${isLogin ? 'right-0 translate-x-[105%] scale-0' : 'left-1/2 -translate-x-1/2 scale-100'}`}>
                    <span className='text-green-primary font-bold text-[30px] mt-5 mb-5'>Sign Up</span>
                    <div className='my-1'>
                        <Input tittle="Email" placeHolder="Enter your email" type={'email'} selector={registerInformationChangeSelector} fieldName={'email'} />
                    </div>
                    <div className='my-1'>
                        <Input tittle="Password" placeHolder="Enter your password" type={'password'} selector={registerInformationChangeSelector} fieldName={'password'} />
                    </div>
                    <div className='my-1'>
                        <Input tittle="First name" placeHolder="Enter your first name" type={'text'} selector={registerInformationChangeSelector} fieldName={'firstName'} />
                    </div>
                    <div className='my-1'>
                        <Input tittle="Last name" placeHolder="Enter your last name" type={'text'} selector={registerInformationChangeSelector} fieldName={'lastName'} />
                    </div>
                    <div className='w-full mt-10 mb-3'>
                        <Button text={'Sign Up'} handleOnClick={handleButtonRegisterClick} />
                    </div>
                    <span className='mb-5'>
                        You have an account? <span id="login-link" className='text-green-primary font-bold text-[16px] cursor-pointer hover:underline' onClick={() => { setIsLogin(true); setShowNotify(false); }}>Log In</span>
                    </span>
                </div>
            </div>
            <div className={`container-notify w-fix h-fix px-7 py-5 rounded-lg ${error ? 'bg-red-500' : 'bg-green-primary'} absolute top-0 scale-0 transition duration-500 flex flex-row justify-center items-center ${showNotify ? 'translate-y-20 scale-100' : '-translate-y-20 scale-0'}`}>
                <div className="notify-icon mr-2">
                    <img className='w-[30px] h-[30px]' src={error ? IconError : IconSuccess} alt="" />
                </div>
                <div ref={notifyMessage} className="notify-message">
                </div>
            </div>
        </div>
    );
};

export default Account;
