import React, {useMemo} from 'react';

import './item.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EventNoteIcon from '@mui/icons-material/EventNote';
import {useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {removeTask} from "../../services/taskService";
import {useNavigate} from "react-router-dom";



const Item = ({data}) => {

    const navigate = useNavigate();
    const {id} = data
    // id : id của task
    const user_id = useMemo(() => localStorage.getItem('id'), []);
    const {state} = data
    let stateQuery = '';

    if (state === 'Todo') {
        stateQuery = 'todo';
    } else if (state === 'Inprogress') {
        stateQuery = 'inprogress';
    }else if(state === 'Done'){
        stateQuery = 'done';

    }

    const queryClient = useQueryClient();
    const handleRemove = async () => {
        try {
             const res = await removeTask({
                taskId:id
            })
            console.log(res.data.result.responseCode)
            if(res.data.result.responseCode === '500'){
                toast.error('Delete not success with sharing task');
            }else{
                toast.success('Delete successfully')
                queryClient.invalidateQueries([stateQuery, user_id])
                queryClient.invalidateQueries(['taskToday',user_id])
            }

        } catch {
            toast.error('Delete fail')
        }
    }


    return(
        <div>
            <div className="list-item">
                <div className="list-header margin-item">
                    <span className="publicsans-semi-bold-charade-14px font-bold " style={{cursor:'pointer'}}  onClick={() => {
                        navigate(
                            `/detail/${id}`
                        )
                    }}>{data.taskName}</span>
                    <span className="publicsans-semi-bold-charade-14px font-bold hover:bg-gray-200" style={{cursor:'pointer'}} onClick={handleRemove}>
                        <DeleteIcon />
                    </span>
                </div>
                <div className="margin-item">
                    <span className="publicsans-normal-charade-12px ">{data.description}</span>
                </div>
                <div className="margin-item d-flex gap-2">
                    <EventNoteIcon/>
                    <div>
                        <span className="publicsans-normal-charade-12px ">{data.dateEnd}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Item
