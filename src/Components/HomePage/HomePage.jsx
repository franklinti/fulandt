import { Grid } from '@mui/material';
import React from 'react'
import Navigation from '../Navigation/Navigation';
import HomeSection from '../CenterSection/CenterSection';
import RightPart from '../RightSection/RightSection';

const CenterSection =()=>{
    return(
        <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
            <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <Navigation/>
            </Grid>
            <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
            <HomeSection/>
            </Grid>
            <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
            <RightPart/>
            </Grid>
        </Grid>
    )
}
export default CenterSection;