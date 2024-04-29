import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import TweetCard from '../CenterSection/TweetCard';

const TwitDetails = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <React.Fragment>
            <section className='bg-white ,z-50 flex items-center sticky top-0 bg-opcacity-95'>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-x1 font-bold opacity-90 ml-5'>Tweet</h1>
            </section>
            <section>
                <TweetCard/>
                <Divider sx={{margin:"2rem 0rem"}}/>
            </section>
            <section>
             {[1,1,1,1].map((item)=><TweetCard/>)}   
            </section>
        </React.Fragment>
    )
}
export default TwitDetails;