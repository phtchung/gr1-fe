import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaceholderAvatar from './placeholder.jpg'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import './avatar.css'
export default function Avatar({ data }) {
    const { id } = useParams();
    const fileInputRef = useRef(null);
    const [avatar, setAvatar] = useState();
    const [isButtonVisible, setButtonVisible] = useState(false);
    const [showFileAddField, setShowAddFileField] = useState(false);
    const [photoType, setPhotoType] = useState();
    const [isLocked, setLock] = useState(false);
    const handleMouseMove = (type) => {
        setButtonVisible(true);
        if (!isLocked) {
            setPhotoType(type);
        }
    };

    const handleMouseLeave = () => {
        setButtonVisible(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const addFile = document.getElementById('add-file-field');
            if (event.target !== addFile && event.target.parentNode !== addFile) {
                setShowAddFileField(false);
                setLock(false);
            }
        };
        window.addEventListener('mouseup', handleOutsideClick);
    }, []);

    useEffect(() => {
        if (data.profile_url !== '') {
            setAvatar(data.profile_url);
        } else {
            setAvatar(PlaceholderAvatar);
        }
    }, [data.profile_url])


    const handleChangeButtonClick = (type) => {
        setShowAddFileField(true);
        setPhotoType(type);
        setLock(true);
    };

    const handleAddFileClick = () => {
        fileInputRef.current.click();
    }

    const handleChange = (event) => {
        const uploadedPhoto = event.target.files[0];
        if (uploadedPhoto.size > 3.1 * 1024 * 1024) {
            alert('File size exceeds the limit of 3.1MB');
            return;
        }
        if (uploadedPhoto) {
            const reader = new FileReader();
            let formData = new FormData();
            formData.append('file', uploadedPhoto);
            console.log(formData)
            console.log(uploadedPhoto)
            formData.append('teacher_id', id);
            console.log(formData)
            if (photoType === "avatar") {
                reader.onload = async () => {

                    setAvatar(reader.result);
                    data.profile_url = avatar;
                }
            }
            reader.readAsDataURL(uploadedPhoto);
            //Send data to BE here
        }
        setShowAddFileField(false);
        setLock(false);
    };
    return (
        <>
            <div className='photo-container'>

                {(avatar) && (
                    <img src={avatar} alt='User Avatar' className='avatar-container' />
                )}

                <div
                    className='avatar-container'
                    onMouseMove={() => handleMouseMove("avatar")}
                    onMouseLeave={handleMouseLeave}
                >
                    {isButtonVisible && photoType === "avatar" &&
                        <button className='avatar-transparent-layout' onClick={() => handleChangeButtonClick("avatar")} >
                            <div className='transparent-layout-center-content'>
                                <i className="fa fa-camera fa-lg" aria-hidden="true"></i>
                                Update photo
                            </div>
                        </button>}
                </ div>
                <div className="avt-name">{data.name}</div>
            </div>

            {showFileAddField && (
                <div className='add-file-field' id='add-file-field'>
                    <button className='add-file-button' onClick={handleAddFileClick}>
                        <input type='file' accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={(e) => handleChange(e)} />
                        <CloudUploadIcon/>
                        <label>Upload file</label>
                    </button>
                    <div className='note'>
                        <span>Allowed *.jpeg, *.jpg, *.png, *.gif</span>
                        <span>Max size of 3.1 MB</span>
                    </div>
                </div>
            )
            }
        </>
    );
}
