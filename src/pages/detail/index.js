import React, {useMemo, useState} from 'react';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import "../../index.css"
import {CircularProgress, MenuItem, TextField} from "@mui/material";
import './detail.css'
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Button} from "flowbite-react";
import CheckList from "../../components/checklist";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {permission, progresses} from "../../utils/constant";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {state} from "../../utils/constant";
import dayjs from "dayjs";
import useTaskDetail from "./useTaskDetail";
import {
    createCheckList,
    removeSharedUser,
    ShareTask,
    updateTaskInfo
} from "../../services/taskService";
import {toast} from "react-toastify";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import DeleteIcon from "@mui/icons-material/Delete";
import {createCheckListSchema, createTaskSchema} from "../../validation/createValidate";
import * as yup from 'yup'


const Detail = () => {
    const {
        taskData,
        isSuccess,
        // isLoading,
        checkListData,
        success,
        loading,
        sharedListUser,
        sharedSuccess,
        refetch,
        id,
    } = useTaskDetail();

    const user_id = useMemo(() => localStorage.getItem('id'), []);

    const queryClient = useQueryClient();
    const [errors, setErrors] = useState({});
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [stateSelect, setStateSelect] = React.useState(taskData?.state);
    const [data, setData] = useState(taskData);
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
        setCreateData(null);
        setOpen(false);
        setErrors({})
    };
    const handleCloseShare = () => {
        setOpen1(false);
    };

    const handleData = (key, value) => {
        setData({...data, [key]: value});
        if (key === 'state') {
            setStateSelect(value)
        }
    };
    const handleShareData = (key, value) => {
        setShareData({...shareData, [key]: value});

    };
    const handleShareTask = async () => {
        try {
            const res = await ShareTask(
                {...shareData, taskId: id}
            );
            if (res.data.result.responseCode === '500') {
                toast.error("Share unsuccessfully")
            } else if (res.data.result.responseCode === '401') {
                toast.error("Share task unsuccessfully . " +
                    "\n User doesn't exist")
            } else if (res.data.result.responseCode === '402') {
                toast.error("Share task unsuccessfully . " +
                    "\n Can't share task to myself")
            } else {
                queryClient.invalidateQueries({queryKey: ['getSharedList', id, user_id]})
                toast.success('Share task successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
        setOpen1(false);
    }

    const handleRemoveSharedUser = async (userId) => {
        try {
            await removeSharedUser({
                taskId: id,
                userId: userId
            })
            queryClient.invalidateQueries({
                queryKey: ['getSharedList', id, user_id]
            })
            toast.success('Remove user successfully', {autoClose: 1000})
        } catch {
            toast.error('Remove user fail')
        }
    }


    const handleCreateData = (key, value) => {
        setCreateData({...createData, [key]: value});
        console.log(createData)
        setErrors(prevErrors => ({...prevErrors, [key]: ''}));

    }

    const updateTaskInfoMutation = useMutation(data => updateTaskInfo(data));

    const handleUpdateTask = () => {

        console.log(data);
        updateTaskInfoMutation.mutate(
            {...data, taskId: id},
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: ['task_detail'],
                    });
                    queryClient.invalidateQueries({queryKey: ['taskToday', id]})
                    toast.success('Task is updated successfully');
                }
            }
        );
    };


    const handleAddCheckList = async () => {
        try {
            await createCheckListSchema.validate(createData, {abortEarly: false});
            const res = await createCheckList(
                {...createData, taskId: id}
            );
            refetch();
            setOpen(false);
            setCreateData(null);
            toast.success('Add checklist successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                toast.error(error?.response?.data?.message);
            }
        }

    }
    return (
        <div style={{'width': '1506px'}}>
            <HeaderLogin/>
            {
                taskData ?
                    <>
                        <div className="overview-wrap row">
                            <div className="col col-3">
                                <SidebarUser/>
                            </div>

                            <div className="col col-9 ">
                                {isSuccess && (
                                    <>
                                        <div className="detail_task ">
                                            <hr className="mt-lg-5 devider"/>
                                            <div className="row">
                                                <div className="wrap">

                                                    <div className="share_task width-80">
                                    <span className="publicsans-semi-bold-charade-14px-overview text-black taskname"
                                          style={{'font-size': '18px'}}>{taskData?.taskName}</span>
                                                        {/*share task*/}
                                                        {
                                                            taskData.control == 1 ?
                                                                <>
                                                                    <div className='share_btn '
                                                                         onClick={handleOpenShare}>
                                                                        <Button variant="contained"
                                                                                className='btn-project btn-height  save-btn'>
                                                                <span
                                                                    className="text-md-center text-white  ">Share Task</span>
                                                                        </Button>
                                                                    </div>
                                                                </>
                                                                :
                                                                <></>
                                                        }

                                                        <Dialog maxWidth="xs" open={open1} onClose={handleCloseShare}>
                                                            <DialogTitle className="align-self-sm-center">
                                                                <b>Share Task</b>
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
                                                                            <MenuItem value="phoneNumber">Phone
                                                                                Number</MenuItem>
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
                                                                            {Object.entries(permission).map(([key, value]) => (
                                                                                <MenuItem
                                                                                    onClick={() => handleShareData('permission', key)}
                                                                                    key={key}
                                                                                    value={key}>{value}</MenuItem>
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
                                                                            onChange={(e) => handleShareData("phoneNumber", e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </DialogContent>
                                                            <DialogActions className="justify-content-lg-center">
                                                                <Button onClick={handleCloseShare}>Cancel</Button>
                                                                <Button onClick={handleShareTask}>Share Task</Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                        {taskData.control == 1 ?
                                                            <>
                                                                <div className='share_display'>
                                                                    <div
                                                                        className="publicsans-semi-bold-charade-14px mb-4 text-center">Share
                                                                        task with
                                                                    </div>
                                                                    <div className='row'>
                                                                        {sharedSuccess && sharedListUser.map((user) => (
                                                                            <>
                                                                                <div className="record_infor">
                                                                                    <div
                                                                                        className="col col-7 share_user_info">
                                                                                <span
                                                                                    className="publicsans-semi-bold-jade-14px">{user.name}</span>

                                                                                        <span
                                                                                            className="publicsans-normal-charade-12px">{user.phoneNumber}</span>
                                                                                    </div>
                                                                                    <div className="col col-4 p-0 ">
                                                                                <span
                                                                                    className="publicsans-bold-charade-17px">Can view</span>
                                                                                    </div>

                                                                                    <div className="col col-1">
                                                        <span className="publicsans-semi-bold-charade-14px font-bold "
                                                              onClick={() => handleRemoveSharedUser(user.userId)}
                                                              style={{cursor: 'pointer'}}>
                                                             <DeleteIcon/>
                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </>
                                                            :
                                                            <></>
                                                        }

                                                    </div>


                                                    <div className="col  infor-ui mb-0 ">
                                                        <TextField
                                                            select
                                                            fullWidth
                                                            id="outlined-required"
                                                            label="Status"
                                                            className="outline-input "
                                                            style={{width: '25%'}}
                                                            defaultValue={taskData?.state}
                                                            disabled={taskData?.control === 0}
                                                        >
                                                            {Object.entries(state).map(([key, value]) => (
                                                                <MenuItem onClick={() => handleData('state', value)}
                                                                          key={key}
                                                                          value={key}>{value}</MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </div>

                                                    <div className="d-flex fix-ui">
                                                        <div className="col col-6 infor-ui">
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DatePicker
                                                                    value={dayjs(taskData?.dateStart)}
                                                                    label="Date Start"
                                                                    disabled={taskData?.control === 0}
                                                                    onChange={(newValue) => handleData('dateStart', newValue.format('YYYY-MM-DD'))}

                                                                />
                                                            </LocalizationProvider>
                                                        </div>

                                                        <div className="col col-6 infor-ui">
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DatePicker
                                                                    value={dayjs(taskData?.dateEnd)}
                                                                    label="Date End"
                                                                    disabled={taskData?.control === 0}
                                                                    onChange={(newValue) => handleData('dateEnd', newValue.format('YYYY-MM-DD'))}
                                                                />
                                                            </LocalizationProvider>
                                                        </div>
                                                    </div>

                                                    <div className="col col-8 mt-0 infor-ui width-80">
                                                        <TextField
                                                            fullWidth
                                                            id="outlined-required"
                                                            label="Description"
                                                            className="outline-input"
                                                            defaultValue={taskData?.description}
                                                            disabled={taskData?.control === 0}
                                                            onChange={(e) => handleData("description", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row ">
                                                {loading && <>
                                                    <CircularProgress className='mt-4'/>
                                                </>}
                                                {success && (
                                                    <>
                                                        {checkListData.map((checkListArr, index) => (
                                                            <div className="col col-4 justify-content-between">
                                                                <CheckList key={index} data={checkListArr}/>
                                                            </div>
                                                        ))}
                                                    </>
                                                )}


                                            </div>
                                            <div>
                                                <div className='share_btn float-start' onClick={handleClickOpen}>
                                                    <Button variant="contained"
                                                            className='btn-project btn-height  save-btn'>
                                                        <span
                                                            className="text-md-center  text-white  ">Create CheckList</span>
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
                                                                    error={!!errors.title}
                                                                    helperText={errors.title || ''}
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
                                                                        <MenuItem
                                                                            onClick={() => handleCreateData('progress', progress.value)}
                                                                            key={index}
                                                                            value={progress.value}>{progress.key}</MenuItem>
                                                                    ))}

                                                                </TextField>
                                                            </div>
                                                            <div className="col col-6 infor-ui">
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DatePicker
                                                                        label="Date End"
                                                                        disablePast
                                                                        slotProps={{
                                                                            textField: {
                                                                                helperText: errors.dateEnd || '',
                                                                            },
                                                                            className: errors.dateEnd ? 'red-text' : '',
                                                                        }}
                                                                        onChange={(newValue) => handleCreateData('dateEnd', newValue.format('YYYY-MM-DD'))}
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
                                                        <Button onClick={handleAddCheckList}>Create CheckList</Button>
                                                    </DialogActions>
                                                </Dialog>

                                                <div className='share_btn  float-start offset-4'>
                                                    <Button variant="contained"
                                                            className='btn-project btn-height  save-btn'
                                                            onClick={handleUpdateTask}>
                                                        <span
                                                            className="text-md-center  text-white  ">Save Changes</span>
                                                    </Button>
                                                </div>
                                            </div>


                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div style={{'margin-top': '100px'}}>
                            <h3 className="text-center ">404 Not Found</h3>
                            <div className="text-center">
                                <a className="text-decoration-none" href="/overview">Home</a></div>
                        </div>
                    </>
            }


        </div>
    )
}

export default Detail
