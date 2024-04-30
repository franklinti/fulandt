import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import ClosedIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
    outline: 'none'
};

const SubscriptionModal = ({open,handleClose}) => {
   // const [open, setOpen] = React.useState(false);
    //const handleOpen = () => setOpen(true);
   // const handleClose = () => setOpen(false);
    const [plan, setPlan] = React.useState("Anunalluy");

    const features = ["Prioritized rankins in conversations and search",
        "See approximately twice as many Tweets betwenn ads in your For You and Following timelines.",
        "Add bold and italic text in yout Tweets",
        "Post longer vídeos and 1080p vídeo uploads",
        "All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features"
    ]
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose} arial-label="delete">
                            <ClosedIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg'>
                                <h1 className='text-xl pr-5'>Blue subscribers with a verified phone number will get a blue checkmark once approved</h1>
                                <img className='w-24 h-24' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" />
                            </div>
                            <div className='flex justify-between border rounded-full px-5 py-3 
                                '>
                                <span onClick={() => setPlan("Anunalluy")} 
                                className={`${plan === "Anunalluy" ? "text-black" 
                                : "text-gray-400"} cursor-pointer`}>Anunally</span>
                                <span className='text-green-500 text-sm ml-5'>
                                    {`${plan === "Anunalluy" ? "SAVE 20%" : "SAVE 12%"}`}</span>
                                <p onClick={() => setPlan("monthly")} 
                                className={`${plan === "monthly" ? "text-black" 
                                : "text-gray-400"} cursor-pointer`}>
                                    Monthly
                                </p>
                            </div>
                            <div className='space-y-3'>
                                {features.map((item) =>
                                    <div className='flex items-center space-x-5'>
                                        <FiberManualRecordIcon sx={{ with: "7px", height: "7px" }} />
                                        <p className='text-xs'>{item}</p>
                                    </div>)
                                }
                            </div>
                            <div className='cursor-pointer flex justify-center bg-gray-900 
                            text-white rounded-full px-5 py-1'>
                                <span className='px-5'>R$17,60 mês</span>
                                <span className='line-through italic'>R$192,00 ano</span>
                                
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}

export default SubscriptionModal;
