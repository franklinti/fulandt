import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assests/logo256x256.png'
import avatar from '../assests/avatar.png'


const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("logout")
    handleClose();
  };
  const navigate = useNavigate();
  return (
    <div className='h-screen sticky top-0'>
      <div className='py-5'>
        <img src={logo} width="75" height="75" viewBox="-0.25 -104.25 1109.5 1109.5"/>
      </div>
      <div className='space-y-6'>
        {navigationMenu.map((item) =>
          <div className='cursor-pointer flex space-x-3 
                items-center' onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`)
              : navigate(item.path)}>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>)}
      </div>
      <div className='py-10'>
        <Button sx={{
          minWidth:"300px",maxWidth: "100%", borderRadius: "29px",
          py: "15px", bgcolor: "#1e88e5"
        }} variant='contained'>
          Ful&t
        </Button>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <Avatar alt='username' src={avatar} />
          <div>
            <span>Franklin Silva</span>
            <span className='opacity-70'>@ful&t</span>
          </div>

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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}
//"#FE9C4D" - cor padrão ful&t
export default Navigation;