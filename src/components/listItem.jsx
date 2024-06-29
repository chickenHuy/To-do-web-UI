import React, { useEffect, useRef, useState } from 'react'
import DefaultIcon from '../assets/thanh_huy.png'
import RemoveIcon from '../assets/icon_remove.png'
import RenameIcon from '../assets/icon_edit.png'
import { useDispatch, useSelector } from 'react-redux';
import { coverSheetChange, listTaskNavigateChange } from '../actions/actionCreater';
import { coverSheetSelector, listTaskNavigateChangeSelector } from '../selectors/selectors';
import DataManager from '../data/dataManager';
import Cookies from 'js-cookie';

const ListItem = ({ name, iconSrc, isCustom, navigate, id }) => {
    const dispatch = useDispatch();
    const listItem = useRef(null);
    const nameItem = useRef(null);

    const navigateData = useSelector(listTaskNavigateChangeSelector);
    const coverSheetData = useSelector(coverSheetSelector);

    const [isHover, setIsHover] = useState(false);
    const [showListOption, setShowListOption] = useState(false);
    const [itemName, setItemName] = useState(name);
    const [isEdit, setIsEdit] = useState(false);

    const dataManager = new DataManager(Cookies.get('auth'));

    function setListTaskNavigate(navigate, id) {
        dispatch(listTaskNavigateChange({
            ...navigateData,
            navigate: navigate,
            id: id,
        }));
    }

    function setShowCoverSheet(show) {
        dispatch(coverSheetChange({
            ...coverSheetData,
            showCoverSheet: show,
            backgroundColor: 'bg-transparent',
        }))
    }

    function handleRenameItem() {
        dataManager.renameItemCustom(id, itemName);
    }

    function handleRemoveItem() {
        dataManager.removeItemCustom(id);

        if (navigateData.navigate === 'custom' && navigateData.id === id) {
            dispatch(listTaskNavigateChange({
                ...navigateData,
                navigate: 'my-day',
                id: '',
            }))
        }
    }

    useEffect(() => {
        if (navigate === 'custom') {
            const handleRightClick = (e) => {
                e.preventDefault();
                setShowListOption(true);
                setShowCoverSheet(true);
            }

            if (listItem.current !== null) {
                listItem.current.addEventListener('contextmenu', handleRightClick);
            }

            return () => {
                if (listItem.current !== null) {
                    listItem.current.removeEventListener('contextmenu', handleRightClick);
                }
            }
        }
    }, []);

    useEffect(() => {
        if (coverSheetData.showCoverSheet === false) {
            setShowListOption(false);
            if (isEdit) {
                handleRenameItem();
                console.log('rename');
            }
            setIsEdit(false);
        }
        setItemName(name);
    }, [coverSheetData.showCoverSheet]);

    return (
        <div className='w-full h-fit relative'>
            <div ref={listItem} className={`h-fix cursor-pointer rounded-md hover:bg-green-secondary hover:shadow-md transition flex flex-row flex-grow items-center justify-start px-7 py-[10px] mx-3 mb-1 ${navigateData.navigate === navigate && navigateData.id === id ? 'bg-green-secondary text-black' : 'bg-transparent text-white'}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={() => setListTaskNavigate(navigate, id)}>
                <img className={`${isCustom !== undefined && isCustom === true ? 'w-[25px] h-[25px]' : 'w-[30px] h-[30px]'}`} src={iconSrc !== undefined ? iconSrc : DefaultIcon} alt="" />
                <input ref={nameItem} type="text" className={`ml-3 text-[16px] bg-transparent outline-none truncate ${isEdit ? '' : 'cursor-pointer'} ${isHover || (navigateData.navigate === navigate && navigateData.id === id) ? 'text-black-primary font-semibold' : 'text-white-primary'}`} readOnly={!isEdit} value={itemName} onChange={(e) => {
                    setItemName(e.target.value);
                }} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setIsEdit(false);
                        handleRenameItem();
                    }
                }} />

            </div >
            <div className={`absolute z-20 top-1/2 right-0  w-fit h-fit py-4 px-3 rounded-md bg-green-secondary flex flex-col gap-2 items-center shadow-md shadow-slate-600 transition origin-top ${showListOption ? 'scale-100' : 'scale-0'}`}>
                <div className='flex flex-row items-center cursor-pointer' onClick={() => {
                    setIsEdit(true);
                    setShowListOption(false);
                    nameItem.current.focus();
                    nameItem.current.select();
                }}>
                    <img className='w-[20px] h-[20px] mr-2' src={RenameIcon} alt="" />
                    <span className='text-black hover:font-semibold w-full h-fit'>Rename</span>
                </div>
                <div className='flex flex-row items-center cursor-pointer' onClick={() => {
                    setShowListOption(false);
                    handleRemoveItem();
                    setShowCoverSheet(false);
                }}>
                    <img className='w-[20px] h-[20px] mr-2' src={RemoveIcon} alt="" />
                    <span className='text-black hover:font-semibold w-full h-fit'>Remove</span>
                </div>
            </div>
        </div>
    )
}

export default ListItem;