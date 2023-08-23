import React, {useState} from 'react';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import './profile.css'
import {CircularProgress, TextField} from "@mui/material";
import {Button} from "flowbite-react";
import Avatar from "../../components/avatar";
import useUser from "./useUser";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateUserInfo} from "../../services/taskService";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
    const id = 1;
    const navigateName = 'profile'
    const queryClient = useQueryClient();
    const {
        userData,
        isSuccess,
        isLoading,

    } = useUser();

    console.log(userData)
    const [dataUser, setDataUser] = useState(userData)

    //lấy id ở đây xong gọi api be lấy thông tin user
    const handleDataUser = (key,value) => {
        setDataUser({ ...dataUser, [key]: value });

    }

    const updateUserInfoMutation = useMutation(data => updateUserInfo(data));

    const onSubmit = () => {

        console.log(dataUser);
        updateUserInfoMutation.mutate(
            {...dataUser,userId:id},
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: ['profileUser'],
                    });

                    toast.success('User information updated successfully',{
                        autoClose: 2000,
                    });

                }
            }
        );
    };


    return (
        <div style={{'width':'1506px'}}>
           <HeaderLogin/>
            <div className="row">
                <div className="col col-3">
                    <SidebarUser data = {navigateName}/>
                </div>

                <div className="col col-9 ">
                    <div className="profile-right">
                        <div className="publicsans-semi-bold-charade-18px tablename">
                            Profile
                        </div>
                        {isLoading &&  <>
                            <CircularProgress className='mt-5 align-self-sm-center' />
                        </>}
                        { isSuccess && (
                            <>
                            <div className="row">
                                <div className="col col-4">
                                    <div className="avatar">
                                    { isSuccess && <Avatar data={userData}/>}

                                    </div>
                                </div>
                        <div className="col col-8">

                            <div className="userinfor row">
                                <div className="col col-6 infor-ui">

                                    <TextField
                                        fullWidth
                                        id="filled-disabled"
                                        label="Name"
                                        className="outline-input"
                                        value={userData?.name}
                                        disabled
                                    />
                                </div>
                                <div className="col col-6 infor-ui" >
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="Email"
                                        className="outline-input"
                                        value={userData?.email}
                                        disabled
                                    />
                                </div>
                                <div className="col col-6 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="Gender"
                                        className="outline-input"
                                        value={userData?.gender}
                                        disabled
                                    >
                                </TextField>
                                </div>
                                <div className="col col-6 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="Phone Number"
                                        className="outline-input"
                                        defaultValue={userData?.phoneNumber}
                                        onChange={(e) => (handleDataUser('phoneNumber',e.target.value))}
                                    />
                                </div>

                                <div className="col col-6 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue={userData?.birthday}
                                        onChange={(e) => handleDataUser('birthday',e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>

                                <div className="col col-12 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="About"
                                        className="outline-input"
                                        defaultValue={userData?.about}
                                        onChange={(e) => handleDataUser('about',e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className='float-end infor-ui' >
                                <Button  variant="contained" onClick={ onSubmit}  className='btn-project btn-height mt-5 save-btn' >
                                    <span className="text-md-center  text-white ">Save Changes</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
