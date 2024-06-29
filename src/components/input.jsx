import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { accoutInformation, loginInformationChange, registerInformationChange } from '../actions/actionCreater';
import { accoutInformationSelector, loginInformationChangeSelector, registerInformationChangeSelector } from '../selectors/selectors';

export const Input = ({ tittle, placeHolder, type, selector, fieldName, value, readOnly }) => {
    const [onFocus, setOnFocus] = React.useState(false);
    const selectorData = useSelector(selector);
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
                    ...selectorData,
                    [fieldName]: e.target.value,
                    emailError: emailError,
                }))
            }
            else if (selector === registerInformationChangeSelector) {
                dispatch(registerInformationChange({
                    ...selectorData,
                    [fieldName]: e.target.value,
                    emailError: emailError,
                }))
            }
            else if (selector === accoutInformationSelector) {
                dispatch(accoutInformation({
                    ...selectorData,
                    [fieldName]: e.target.value,
                }))
            }
        }
        else {
            if (selector === loginInformationChangeSelector) {
                dispatch(loginInformationChange({
                    ...selectorData,
                    [fieldName]: e.target.value,
                }))
            }
            else if (selector === registerInformationChangeSelector) {
                dispatch(registerInformationChange({
                    ...selectorData,
                    [fieldName]: e.target.value,
                }))
            }
            else if (selector === accoutInformationSelector) {
                dispatch(accoutInformation({
                    ...selectorData,
                    [fieldName]: e.target.value,
                }))
            }
        }
    }

    return (
        <div className='flex flex-col w-[350px]'>
            <label className='font-bold text-[15px] dark:text-white-primary my-1'>{tittle !== undefined ? tittle : 'Title'}</label>
            <input
                className={`h-[40px] px-2 rounded-md outline-none border-[1px] bg-transparent dark:text-white-primary ${readOnly ? 'text-slate-500 dark:text-slate-600' : ''} ${onFocus ? 'border-green-primary dark:border-white-primary border-[2px]' : 'border-[#777777] border-[1px]'}`}
                type={type !== undefined ? type : 'text'}
                placeholder={placeHolder !== undefined ? placeHolder : ''}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                onChange={handleChange}
                value={value !== undefined ? value : undefined}
                readOnly={readOnly !== undefined ? readOnly : false}
            />
        </div>
    );
}

