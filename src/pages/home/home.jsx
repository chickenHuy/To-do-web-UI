import React from 'react'
import Accout from '../../components/accout';
import ListItem from '../../components/listItem';
import DefaultIcon from '../../assets/thanh_huy.png';

const Home = () => {
    return (
        <div className='wrapper w-screen h-screen flex flex-row flex-grow bg-green-secondary'>
            <div className="wrapper__navigate rounded-lg min-w-[200px] sm:min-w-[300px] md:min-w-[350px] h-full bg-green-primary flex flex-col items-center overflow-auto">
                <div className="navigate-accout w-full h-fix">
                    <Accout />
                </div>
                <div className='w-3/4 h-[1px] rounded-md bg-black-primary'></div>

                <div className="navigate-list-main w-full h-fix my-5">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <div className='w-3/4 h-[1px] rounded-md bg-black-primary'></div>

                <div className='w-full h-fix'>
                    <div className='h-fix flex flex-row items-center rounded-md m-3 px-3 py-[6px] bg-green-secondary cursor-pointer hover:scale-105 transition'>
                        <img className='w-[40px] h-[40px] rounded-[50%]' src={DefaultIcon} alt="" />
                        <span className='ml-3 text-[17px] font-semibold'>New list</span>
                    </div>
                </div>
                <div className="navigate-list-custom w-full h-fix my-1">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
            <div className="wrapper__body w-full h-full bg-green-secondary">
                <div className="body-filter">

                </div>
                <div className="body-list">
                    <div className="list-todo">

                    </div>
                    <div className="list-inprocess">

                    </div>
                    <div className="list-done">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
