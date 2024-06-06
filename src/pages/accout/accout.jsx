import React from 'react'
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { loginInformationChangeSelector, registerInformationChangeSelector } from '../../selectors/selectors';
import { useSelector } from 'react-redux';
import IconError from '../../assets/icon_error.png';
import IconSuccess from '../../assets/icon_success.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { accoutInformation } from '../../actions/actionCreater';

const Accout = () => {
    const [isLogin, setIsLogin] = React.useState(true);

    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('')
    const [showNotify, setShowNotify] = React.useState(false);

    const loginData = useSelector(loginInformationChangeSelector);
    const registerData = useSelector(registerInformationChangeSelector);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleButtonLoginClick = () => {
        setShowNotify(false);

        setTimeout(() => {
            if (loginData.emailError === true) {
                setError(true);
                setErrorMessage('This email is not valid. Make sure the email is imported as example@gmail.com');
                setShowNotify(true);
                return;
            }
            else {
                for (const key in loginData) {
                    if (loginData[key] === '') {
                        setError(true);
                        setErrorMessage('Please fill in all the information');
                        setShowNotify(true);
                        return
                    }
                }
            }
            dispatch(accoutInformation({
                email: loginData.email,
                firstName: 'Chicken',
                lastName: 'Hy',
                avatarUrl: ''
            }))

            document.cookie = "auth=chickenchicken; path=/";

            navigate('/home');
        }, 250);

    }

    const handleButtonRegisterClick = () => {
        setShowNotify(false);

        setTimeout(() => {
            if (registerData.emailError === true) {
                setError(true);
                setErrorMessage('This email is not valid. Make sure the email is imported as example@gmail.com');
                setShowNotify(true);
            }
            else {
                for (const key in registerData) {
                    if (registerData[key] === '') {
                        setError(true);
                        setErrorMessage('Please fill in all the information');
                        setShowNotify(true);
                        return
                    }
                }
                setError(false);
                setErrorMessage('Register successfully!');
                setShowNotify(true);
            }
        }, 250);
    }

    return (
        <div className='w-screen h-screen bg-black-primary flex justify-center items-center'>
            <div className="wrapper py-3 flex flex-row items-center overflow-hidden">
                <div className={`wrapper__login shadow-md shadow-white h-fit bg-green-secondary p-10 flex flex-col items-center rounded-xl transition duration-700 ${isLogin ? 'translate-x-1/2' : '-translate-x-full scale-0'}`}>
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
                        Don't have an account? <span className='text-green-primary font-bold text-[16px] cursor-pointer hover:underline' onClick={() => { setIsLogin(false); setShowNotify(false); }}>Sign Up</span>
                    </span>
                </div>

                <div className={`wrapper__register shadow-md shadow-white h-fit bg-green-secondary p-10 flex flex-col items-center rounded-xl transition duration-700 ${!isLogin ? '-translate-x-1/2' : 'translate-x-full scale-0'}`}>
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
                        You have an account? <span className='text-green-primary font-bold text-[16px] cursor-pointer hover:underline' onClick={() => { setIsLogin(true); setShowNotify(false); }}>Log In</span>
                    </span>
                </div>
            </div>
            <div className={`container-notify w-fix h-fix px-7 py-5 rounded-lg ${error ? 'bg-red-500' : 'bg-green-primary'} absolute top-0 scale-0 transition duration-500 flex flex-row justify-center items-center ${showNotify ? 'translate-y-20 scale-100' : '-translate-y-20 scale-0'}`}>
                <div className="notify-icon mr-2">
                    <img className='w-[30px] h-[30px]' src={error ? IconError : IconSuccess} alt="" />
                </div>
                <div className="notify-message">
                    {errorMessage}
                    <span className={`ml-1 font-bold cursor-pointer hover:underline ${!error ? 'inline' : 'hidden'}`} onClick={() => { setIsLogin(true); setShowNotify(false); }}>Log In now.</span>
                </div>
            </div>
        </div>

    )
}

export default Accout;
