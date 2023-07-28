import React, {useState} from 'react';
// import { useQuery } from '@tanstack/react-query';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import "../../index.css"
import { MenuItem, TextField} from "@mui/material";
import './detail.css'
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Button} from "flowbite-react";
import CheckList from "../../components/checklist";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {permission, progresses, stateFilter} from "../../utils/constant";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
// import {useParams} from "react-router-dom";
import {detailTask, state, checkListArrs} from "../../utils/constant";
import dayjs from "dayjs";

const Detail = () => {

    //const { id } = useParams();
    const [value, setValue] = useState(dayjs(detailTask.dateStart));

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [stateSelect , setStateSelect] = React.useState(detailTask.state);
    const [data, setData] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [shareData, setShareData] = useState(null);


    //const task_id = localStorage.getItem('task_id');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleOpenShare = () => {
        setOpen1(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseShare = () => {
        setOpen1(false);
    };

    const handleData = (key, value) => {
        setData({ ...data, [key]: value });
        if(key === 'state'){
            setStateSelect(value)
        }
    };
    const handleShareData = (key, value) => {
        setShareData({ ...shareData, [key]: value });
        console.log(shareData)
    };

    const handleCreateData = (key, value) => {
      setCreateData({ ...createData, [key]: value });
        console.log(createData)
    }

    return (
        <div style={{'width':'1506px'}}>
            <HeaderLogin/>
            <div className="overview-wrap row">
                <div className="col col-3">
                    <SidebarUser />
                </div>

                <div className="col col-9 ">
                    <div className="detail_task ">

                           <hr className="mt-lg-5 devider"/>

                        <div className="row">
                            <div className="share_task">
                                <span className="publicsans-semi-bold-charade-14px-overview text-black" style={{'font-size':'18px'}}>{detailTask.taskName}</span>
                                {/*share task*/}
                                <div className='share_btn' onClick={handleOpenShare}>
                                    <Button variant="contained"  className='btn-project btn-height  save-btn'>
                                        <span className="text-md-center text-white  ">Share Task</span>
                                    </Button>
                                </div>
                                <Dialog maxWidth="xs" open={open1} onClose={handleCloseShare}>
                                    <DialogTitle className="align-self-sm-center">
                                        <b >Share Task</b>
                                    </DialogTitle>
                                    <DialogContent>
                                        <div className="row mt-3 justify-content-center">
                                            <div className="col col-8 infor-ui">
                                                <TextField
                                                    select
                                                    fullWidth
                                                    id="outlined-required"
                                                    label="Share with"
                                                    className="outline-input"
                                                    defaultValue="phoneNumber"
                                                >
                                                    <MenuItem value="phoneNumber" >Phone Number</MenuItem>
                                                </TextField>
                                            </div>

                                            <div className="col col-8 infor-ui">
                                                <TextField
                                                    select
                                                    fullWidth
                                                    id="outlined-required"
                                                    label="Permission"
                                                    className="outline-input"
                                                >
                                                    {Object.entries(permission).map(([key, value]) =>(
                                                        <MenuItem onClick={() => handleShareData('permission', key)} key={key} value={key} >{value}</MenuItem>
                                                    ))}
                                                </TextField>
                                            </div>

                                            <div className="col col-8 infor-ui">
                                                <TextField
                                                    fullWidth
                                                    minRows="2"
                                                    id="outlined-required"
                                                    label="Phone Number"
                                                    className="outline-input"
                                                    defaultValue=""
                                                    onChange={(e) => handleShareData("phone_number", e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </DialogContent>
                                    <DialogActions className="justify-content-lg-center">
                                        <Button onClick={handleCloseShare}>Cancel</Button>
                                        <Button onClick={handleCloseShare}>Share Task</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>


                            <div className="col col-3 infor-ui mb-0">
                                <TextField
                                    select
                                    fullWidth
                                    id="outlined-required"
                                    label="Status"
                                    className="outline-input "
                                    value={stateSelect}

                                >
                                    {Object.entries(state).map(([key, value]) =>(
                                        <MenuItem onClick={() => handleData('state', value)} key={key} value={key} >{value}</MenuItem>
                                    ))}
                                </TextField>
                            </div>

                            <div className="d-flex">
                                <div className="col col-6 infor-ui">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            value={value}
                                            label="Date Start"
                                            onChange={(newValue) => handleData('dateStart',newValue.format('MM-DD-YYYY'))}

                                        />
                                    </LocalizationProvider>
                                </div>

                                <div className="col col-6 infor-ui">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            value={dayjs(detailTask.dateEnd)}
                                            label="Date End"
                                            onChange={(newValue) => handleData('dateEnd',newValue.format('MM-DD-YYYY'))}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className="col col-9 infor-ui">
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Description"
                                    className="outline-input"
                                    defaultValue={detailTask.description}
                                    onChange={(e) => handleData("description",e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row ">
                                {checkListArrs.map((checkListArr , index) => (
                                    <div className="col col-4 justify-content-between">
                                        <CheckList key={index} data={checkListArr} />
                                    </div>
                                ))}


                        </div>
                        <div>
                            <div className='share_btn float-start' onClick={handleClickOpen}>
                                <Button  variant="contained"  className='btn-project btn-height  save-btn' >
                                    <span className="text-md-center  text-white  ">Create CheckList</span>
                                </Button>
                            </div>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>
                                    <b>Create Checklist</b>
                                </DialogTitle>
                                <DialogContent>

                                    <div className="row mt-3">
                                        <div className="col col-6 infor-ui">
                                            <TextField
                                                fullWidth
                                                id="outlined-required"
                                                label="Checklist Title"
                                                className="outline-input"
                                                onChange={(e) => handleCreateData("title", e.target.value)}
                                            />
                                        </div>

                                        <div className="col col-6 infor-ui">
                                            <TextField
                                                select
                                                fullWidth
                                                id="outlined-required"
                                                label="Progress"
                                                className="outline-input"

                                            >
                                                {progresses.map((progress, index) => (
                                                    <MenuItem onClick={() => handleCreateData('progress', progress.value)} key={index}  value={progress.value}  >{progress.key}</MenuItem>
                                                ))}

                                            </TextField>
                                        </div>
                                        <div className="col col-6 infor-ui">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Date End"
                                                    onChange={(newValue) => handleCreateData('dateEnd',newValue.format('MM-DD-YYYY'))}
                                                />
                                            </LocalizationProvider>
                                        </div>

                                        <div className="col col-12 infor-ui">
                                            <TextField
                                                fullWidth
                                                minRows="2"
                                                id="outlined-required"
                                                label="Note"
                                                className="outline-input"
                                                defaultValue=""
                                                onChange={(e) => handleCreateData("note", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleClose}>Update</Button>
                                </DialogActions>
                            </Dialog>

                            <div className='share_btn float-end'>
                                <Button variant="contained"  className='btn-project btn-height  save-btn'>
                                    <span className="text-md-center  text-white  ">Save Changes</span>
                                </Button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail
