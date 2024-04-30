import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4IconIcon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../SubscriptionModal/Subscription';


const RightSection = () => {
    const [openSubscriptionModal,setOpenSubscriptionModal] = React.useState(false)
    const handleOpenSubscription =()=> setOpenSubscriptionModal(true);
    const handleClose =()=> setOpenSubscriptionModal(false);

    const handleChangeTheme = () => {
        console.log("theme")
    }
    return (
        <div className='py-5 sticke top'>
            <div className='relative flex items-center'>
                <input type='text' className='py-3 rounded-full text-gray-500 w-full pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='' />
                </div>
                <Brightness4IconIcon onClick={handleChangeTheme} />
            </div>
            <section className='my-5'>
                <h1 className='text-x1 font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock new Features</h1>
                <Button onClick={handleOpenSubscription} variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}>
                    Get verified
                </Button>
            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py1'> What's happeding</h1>
                <div>
                    <p className="text-sm">Entertaiment .Trending</p>
                    <p className='font-bold'>Brasil</p>
                </div>
              {[1,1,1].map((item)=> <div className='flex justify-between w-full'>
                    <div>
                        <p className="text-sm">Entertaiment .Trending</p>
                        <p className='font-bold'>Brasil</p>
                        <p>34.5k tweets</p>
                    </div>
                    <MoreHorizIcon  className='cursor-pointer ' onClick={handleChangeTheme} />
                </div>)}
            </section>
            <section>
                <SubscriptionModal handleClose={handleClose} open={openSubscriptionModal}/>
            </section>
        </div>
    )
}

export default RightSection;