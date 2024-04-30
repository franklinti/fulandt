import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 4
};

const ReplyModal = ({ open, handleClose }) => {
    const navigate = useNavigate();
    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectImage, setSelectedImage] = React.useState("");

    const handleSubmit = (value) => {
        console.log(value)
    }
    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            twitId: 4
        },
        onSubmit: handleSubmit
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
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
                    <div className='flex space-x-5'>
                        <Avatar onClick={() => navigate(`/profile/${6}`)} alt='username' className='cursor-pointer'
                            src="https://pensamentoverde.com.br/wp-content/uploads/2014/10/Depositphotos_4067864_original_dimakin.jpg" />
                        {/* envio chat */}
                        <div className='w-full'>
                            <div className='flex cursor-pointer items-center space-x-2'>
                                <span className='font-semibold'>Franklin Silva</span>
                                <span className='text-gray-600'>@ful&t . 2m</span>
                                
                                <img className='ml-2 w-5 h-5' src='https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png'
                                    alt='' />
                            </div>
                            <div>
                            <p>Sênior Developer Java</p>
                            </div>
                        </div>
                    </div>
                    <section className={`py-10`}>
                        <div className="flex space-x-5">
                            <Avatar alt='username'
                                src='https://res.cloundinary.com/dnbw04gbs/image/upload/v1690639851/instagram%20post/bywtgh9vj4e80aywstss.png' />
                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type='text' name='content' placeholder='what is happening'
                                            className={`border-none outline-none text-xl bg-tranpar(ent`}
                                            {...formik.getFieldProps("content")} />
                                        {formik.errors.content && formik.touched.content && (
                                            <span className='text-red-500'>{formik.errors.content}</span>
                                        )}
                                    </div>

                                    <div className='flex justify-between items-center mt-5'>
                                        <div className='flex space-x-5 items-center'>
                                            <label className='flex items-center space-x-2 rouded-md cursor-pointer'>
                                                <ImageIcon className='text-[#1d9bf0]' />
                                                <input type='file' name='imageFile' className='hidden'
                                                    onChange={handleSelectImage} />
                                            </label>
                                            <FmdGoodIcon className='text-[#1d9bf0]' />
                                            <TagFacesIcon className='text-[#1d9bf0]' />
                                        </div>
                                        <div>
                                            <Button sx={{
                                                width: "100%",
                                                borderRadius: "29px",
                                                py: "8px",
                                                bgcolor: "#1e88e5",
                                                padding: "8px"
                                            }} variant='contained'
                                                type='subit'>
                                                tweet
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}

export default ReplyModal;