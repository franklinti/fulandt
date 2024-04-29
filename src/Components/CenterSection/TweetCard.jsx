import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';

const TweetCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDeleteTweet = () => {
      console.log("delete tweet")
      handleClose();
    };

   const handleOpenReplyModel =()=>{
    console.log("ldj")
   }
   const handleCreateRetTweet =()=>{
    console.log("ldj")
   }
   const handleLikeTweet =()=>{
    console.log("like")
   }
    return (
        <div className=''>
           {/**  <div className='flex items-center font-semibold text-gray-700'>
                <RepeatIcon />
            </div>*/}
            <div className='flex space-x-5'>
                <Avatar onClick={() => navigate(`/profile/${6}`)} alt='username' className='cursor-pointer'
                    src="https://pensamentoverde.com.br/wp-content/uploads/2014/10/Depositphotos_4067864_original_dimakin.jpg" />
                <div className='w-full'>
                    {/* envio chat */ }
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Franklin Silva</span>
                            <span className='text-gray-600'>@ful&t . 2m</span>
                            <img className='ml-2 w-5 h-5' src='https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png'
                                alt='' />
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    {/** exibe chat */}
                    <div className='mt-2'>
                        <div onClick={()=>navigate(`/twit/${3}`)} className='cursor-pointer '>
                            <p className='mb-2 p-0'>full stack projeto</p>
                            <img className="w-[15rem] border border-gray-400 p-5 rounded-md"
                            src="https://pensamentoverde.com.br/wp-content/uploads/2014/10/Depositphotos_4067864_original_dimakin.jpg" alt=""/>
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'> 
                                <ChatBubbleOutlineIcon className="cursor-point" onClick={handleOpenReplyModel}/>
                                <p>187</p>
                            </div>
                            <div className={`${true? "text-pink-600": "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon onClick={handleCreateRetTweet} className='cursor-pointer'/>
                                <p>1087</p>
                            </div>
                            <div className={`${true? "text-pink-600": "text-gray-600"} space-x-3 flex items-center`}>
                               {true? <FavoriteIcon onClick={handleLikeTweet} className='cursor-pointer'/>
                               : <FavoriteOutlined onClick={handleLikeTweet} className='cursor-pointer'/> }
                                <p>20000000087</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'> 
                                <BarChartIcon className="cursor-point" onClick={handleOpenReplyModel}/>
                                <p>200000000587</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'> 
                                <FileUploadIcon className="cursor-point" onClick={handleOpenReplyModel}/>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TweetCard;