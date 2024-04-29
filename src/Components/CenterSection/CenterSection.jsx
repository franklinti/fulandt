import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Mensagem texto é obrigatório")
})

const CenterSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState("");

    const handleSubmit = (value) => {
        console.log(value)
    }
    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema
    })
    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10`}>
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
                            {/*<div>
                                <img src="" alt=""/>
                            </div>*/ }
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
            <section>
            {[1,1,1,1,1].map((item)=>  <TweetCard/>)}
            </section>
        </div>
    )
}

export default CenterSection;