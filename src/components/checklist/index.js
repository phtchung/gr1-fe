import React, {useState} from 'react';
import './checklist.css'
import EventNoteIcon from '@mui/icons-material/EventNote';
import {Button, Progress} from 'flowbite-react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { progresses} from "../../utils/constant";
import {MenuItem, TextField} from "@mui/material";
import dayjs from "dayjs";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {removeCheckList, updateCheckListInfo} from "../../services/taskService";
import useTaskDetail from "../../pages/detail/useTaskDetail";

const CheckList = ({data}) => {
    const {
        refetch,

    } = useTaskDetail();
    const {checkListId} = data
    const id = data.taskId

    const [progress, setProgress] = useState(data.progress);
    const queryClient = useQueryClient();
    const [open, setOpen] = React.useState(false);
    const [checkListData, setCheckListData] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemoveCheckList = async (id) => {

        try {
            await removeCheckList({
                checkListId:checkListId
            })
            refetch();
            // queryClient.invalidateQueries(['getCheckList',id])

            toast.success('Delete success')
        } catch {
            toast.error('Delete fail')
        }
        setOpen(false);
    }


    const handleCheckListData = (key, value) => {
        setCheckListData({ ...checkListData, [key]: value });
        // if(key === 'state'){
        //     setStateSelect(value)
        // }
        console.log(checkListData)
    };

    const updateCheckListInfoMutation = useMutation(data => updateCheckListInfo(data));

    const handleUpdateCheckList = () => {

        console.log(data);
        updateCheckListInfoMutation.mutate(
            {...checkListData,checkListId:checkListId},
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: ['getCheckList'],
                    });
                    toast.success('Teacher info updated successfully');
                    setOpen(false);

                }
            }
        );
    };

    function calculateRemainingDays( endDate) {

        const start = new Date();
        const end = new Date(endDate);

        // Tính số ngày còn lại
        const differenceInTime = end.getTime() - start.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

        return differenceInDays;
    }

    return(
        <div>
            <div className="list-item1" style={{cursor:'pointer'}} onClick={handleClickOpen}>
                <div className="list-header margin-item ">
                    <span className="publicsans-semi-bold-charade-18px font-bold " >{data.title}</span>
                </div>
                <Progress
                    color="green"
                    size="lg"
                    labelProgress
                    progress={data.progress}
                    progressLabelPosition="inside"/>
                <div>
                <div className="margin-item d-flex gap-2 mt-4 align-items-center">
                    <EventNoteIcon/>

                        <span className="publicsans-normal-charade-12px ">
                            {calculateRemainingDays(data.dateEnd) > 0 ? (
                                <>
                                    {calculateRemainingDays(data.dateEnd)} days left to complete
                                </>
                            ) : (
                                <>Out of date</>
                            )}

                        </span>
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <b>Update Checklist</b>
                </DialogTitle>
                <DialogContent>

                    <div className="row mt-3">
                        <div className="col col-6 infor-ui">
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="Checklist Title"
                                className="outline-input"
                                value={data.title}
                            />
                        </div>

                        <div className="col col-6 infor-ui">
                            <TextField
                                select
                                fullWidth
                                id="outlined-required"
                                label="Progress"
                                className="outline-input"
                                defaultValue={data?.progress}
                            >
                                {progresses.map((progress) => (
                                    <MenuItem onClick={() => handleCheckListData('progress', progress.value)} key={progress.value} value={progress.value}>{progress.key}</MenuItem>
                                ))}

                            </TextField>
                        </div>
                        <div className="col col-6 infor-ui">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date End"
                                    value={dayjs(data.dateEnd)}
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
                                defaultValue={data.note}
                                onChange={(e) => handleCheckListData("note",e.target.value)}
                            />
                        </div>
                    </div>

                </DialogContent>
                <DialogActions >
                    <Button style={{'margin-right':'260px','background-color':'red'}}  onClick={() => handleRemoveCheckList(id)}>Delete</Button>

                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdateCheckList}>Update</Button>

                </DialogActions>
            </Dialog>
        </div>
    )

}

export default CheckList
