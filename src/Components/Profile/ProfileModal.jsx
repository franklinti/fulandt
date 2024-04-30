import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { IconButton, TextField, Avatar } from '@mui/material';
import ClosedIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    outline: "none"
};

const ProfileModal = ({open,handleClose}) => {
    
    const [uploading, setUploading] = React.useState(false);

    const handleSubmit = (values) => {
        console.log("handle submit",values)
    }
    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundimage: "",
            image: ""
        },
        onSubmit: handleSubmit
    })
    const handleImageChange = (event) => {
        setUploading(true);
        const { name } = event.target;
        const file = event.target.files[0];
        formik.setFieldValue(name, file);
        setUploading(false);
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        {/* head modal */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} arial-label="delete">
                                    <ClosedIcon />
                                    <p className=''>Edit Profile</p>
                                </IconButton>
                            </div>
                            <Button type='submit'>Save</Button>
                        </div>
                        {/* body modal */}
                        <div className=' hideScrollbar overflow-y-scroll overflow-x-hidden h-[80vh]'>
                            <div>
                                <div className='w-full'>
                                    <div className='relative'>
                                        <img
                                            className='w-full h-[10rem] object-center'
                                            src="https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_640.jpg"
                                            alt='Topo'
                                        />
                                        <div className='flex justify-between items-start mt-2 h-[4rem]'>
                                            <Avatar className='tranform -translate-y-24' alt='' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                                                sx={{ width: '10rem', height: '10rem', border: '4px solid white' }} />
                                            <input
                                                type='file'
                                                className='absolute top-0 left-0 w-full h-full opacity-0
                                        cursor-pointer'
                                                onChange={handleImageChange}
                                                name='image' />
                                        </div>
                                        {/** Alterar imagem profile */}
                                        <input
                                            type='file'
                                            className='absolute top-0 left-0 w-full h-full opacity-0
                                        cursor-pointer'
                                            onChange={handleImageChange}
                                            name='backgroundimage' />
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <TextField
                                    fullWidth
                                    id='fullName'
                                    name='fullName'
                                    label='Full name'
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id='bio'
                                    name='bio'
                                    label='Bio'
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />
                                <TextField
                                    fullWidth
                                    id='website'
                                    name='website'
                                    label='Website'
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />
                                <TextField
                                    fullWidth
                                    id='location'
                                    name='location'
                                    label='Location'
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />
                                <div className='my-3'>
                                    <p className='text-lg'>Birth date .Edit</p>
                                    <p className='text-2xl'>April 20, 1987</p>
                                </div>
                                <p className='py-3 text-lg'>Edit Professional Profile</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default ProfileModal;
