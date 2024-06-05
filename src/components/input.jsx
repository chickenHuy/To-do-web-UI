import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginInformationChange, registerInformationChange } from '../actions/actionCreater';
import { loginInformationChangeSelector } from '../selectors/selectors';

export const Input = ({ tittle, placeHolder, type, selector, fieldName }) => {
    const [onFocus, setOnFocus] = React.useState(false);
    const loginData = useSelector(selector);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let emailError = false;

        if (type !== undefined && type === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(e.target.value)) {
                emailError = true;
            }
            if (selector === loginInformationChangeSelector) {
                dispatch(loginInformationChange({
                    ...loginData,
                    [fieldName]: e.target.value,
                    emailError: emailError,
                }))
            }
            else {
                dispatch(registerInformationChange({
                    ...loginData,
                    [fieldName]: e.target.value,
                    emailError: emailError,
                }))
            }
        }
        else {
            if (selector === loginInformationChangeSelector) {
                dispatch(loginInformationChange({
                    ...loginData,
                    [fieldName]: e.target.value,
                }))
            }
            else {
                dispatch(registerInformationChange({
                    ...loginData,
                    [fieldName]: e.target.value,
                }))
            }
        }
    }

    return (
        <div className='flex flex-col w-[350px]'>
            <label className='font-bold text-[15px]'>{tittle !== undefined ? tittle : 'Title'}</label>
            <input
                className={`h-[40px] px-2 rounded-md outline-none border-[1px] bg-transparent ${onFocus ? 'border-green-primary border-[2px]' : 'border-[#777777] border-[1px]'}`}
                type={type !== undefined ? type : 'text'}
                placeholder={placeHolder !== undefined ? placeHolder : ''}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                onChange={handleChange}
            />
        </div>
    );
}

