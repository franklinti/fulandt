import { Grid } from '@mui/material';
import React from 'react'
import Navigation from '../Navigation/Navigation';
import CenterSection from '../CenterSection/CenterSection';
import RightSection from '../RightSection/RightSection';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import TwitDetails from '../TwitDetails/TwitDetails';

const HomePage = () => {
    return (
        <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
            <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
                <Navigation />
            </Grid>
            <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
                <Routes>
                    <Route path="/" element={<CenterSection/>}></Route>
                    <Route path="/home" element={<CenterSection/>}></Route>
                    <Route path="/profile/:id" element={<Profile/>}></Route>
                    <Route path="/twit/:id" element={<TwitDetails/>}></Route>
                </Routes>
            </Grid>
            <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
                <RightSection />
            </Grid>
        </Grid>
    )
}
export default HomePage;