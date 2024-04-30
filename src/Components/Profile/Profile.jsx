import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Box, Button, Tab } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../CenterSection/TweetCard';
import { useNavigate } from 'react-router-dom';
import ProfileModal from './ProfileModal';

const Profile = () => {
    const [tabValue, setTabValue] = useState("1")
    const navigate = useNavigate();

    const [openProfileModal,setOpenProfileModal] = useState(false)
    const handleOpenProfile =()=> setOpenProfileModal(true);
    const handleClose =()=> setOpenProfileModal(false);
    
    const handleBack = () => {
        navigate(-1);
    }
    const handleFollowUser = () => {
        console.log("back")
    }
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
        if (newValue === 4) {
            console.log("likes")
        } else if (newValue === 1) {
            console.log("user twits")
        }
    }
    return (
        <div>
            <section className='bg-white,z-50 flex items-center sticky top-0 bg-opcacity-95'>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-x1 font-bold opacity-90 ml-5'>Franklin Silva</h1>
            </section>
            <section>
                <img className='w- [100%] h-[15rem] object-cover' 
                src="https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_640.jpg" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar className='tranform -translate-y-24' alt='franklin' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                        sx={{ width: '10rem', height: '10rem', border: '4px solid white' }} />
                    {true ? (<Button
                        onClick={handleOpenProfile}
                        variant='contained' sx={{ borderRadius: "20px" }}>
                        Edit Profile
                    </Button>
                    ) : (<Button
                        onClick={handleFollowUser}
                        variant='contained' sx={{ borderRadius: "20px" }}>
                        {true ? "Follow" : "Unfollow"}
                    </Button>)}
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Franklin</h1>

                        {true && <img
                            className='ml-2 w-5 h-5'
                            src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" />
                        }
                    </div>
                    <h1 className='text-gray-500'>@Franklin</h1>
                </div>
                <div className='mt-2 space-y-3'>
                    <p>Sênior Developer Java</p>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>Brazil</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarIcon />
                            <p className='ml-2'>Abril 2024</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>587</span>
                            <span className='text-gray-500'>Following</span>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <div className='flex items-center space-x-1 font-semibold'>
                                <span>587</span>
                                <span className='text-gray-500'>Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value='1'>
                            {[1,1,1,1].map((item)=><TweetCard/>)}
                        </TabPanel>
                        <TabPanel value="1">users tweets</TabPanel>
                        <TabPanel value="2">users replies</TabPanel>
                        <TabPanel value="3">media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
                    
            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal}/>
            </section>

        </div>
    )
}

export default Profile;