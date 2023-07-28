import React, {useState} from 'react';
// import { useQuery } from '@tanstack/react-query';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import './profile.css'
import {TextField , MenuItem} from "@mui/material";
import {Button} from "flowbite-react";
import Avatar from "../../components/avatar";
import {user} from "../../utils/constant";

const Profile = () => {
    const navigateName = 'profile'

    const [dataUser, setDataUser] = useState(user)
    console.log(dataUser)
    //lấy id ở đây xong gọi api be lấy thông tin user
    const handleDataUser = (key,value) => {
        setDataUser({ ...dataUser, [key]: value });
        console.log(dataUser)
    }


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
                    <div className="row">
                        <div className="col col-4">
                            <div className="avatar">
                                <Avatar data={user}/>

                            </div>
                        </div>
                        <div className="col col-8">
                            <div className="userinfor row">
                                <div className="col col-6 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="Name"
                                        className="outline-input"
                                        value={user?.name}
                                        disabled
                                    />
                                </div>
                                <div className="col col-6 infor-ui" >
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="Email Address"
                                        className="outline-input"
                                        value={user?.email}
                                        disabled
                                    />
                                </div>
                                <div className="col col-6 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="Gender"
                                        className="outline-input"
                                        value={user?.gender}
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
                                        defaultValue={user?.phone_number}
                                        onChange={(e) => (handleDataUser('phone_number',e.target.value))}
                                    />
                                </div>

                                <div className="col col-6 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="outlined-required"
                                        label="Address"
                                        className="outline-input"
                                        defaultValue={user?.address}
                                        onChange={(e) => (handleDataUser('address',e.target.value))}
                                    />
                                </div>
                                <div className="col col-6 infor-ui">
                                    <TextField
                                        fullWidth
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue={user?.birthday}
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
                                        defaultValue={user?.about}
                                        onChange={(e) => handleDataUser('about',e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className='float-end infor-ui'>
                                <Button variant="contained"  className='btn-project btn-height mt-5 save-btn'>
                                    <span className="text-md-center  text-white  ">Save Changes</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile
