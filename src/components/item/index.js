import React from 'react';

import './item.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EventNoteIcon from '@mui/icons-material/EventNote';

const Item = ({data}) => {
    console.log(data)

    return(
        <div>
            <div className="list-item">
                <div className="list-header margin-item">
                    <span className="publicsans-semi-bold-charade-14px font-bold " >{data.task_name}</span>
                    <span className="publicsans-semi-bold-charade-14px font-bold" style={{cursor:'pointer'}}>
                        <DeleteIcon/>
                    </span>
                </div>
                <div className="margin-item">
                    <span className="publicsans-normal-charade-12px ">{data.description}</span>
                </div>
                <div className="margin-item d-flex gap-2">
                    <EventNoteIcon/>
                    <div>
                        <span className="publicsans-normal-charade-12px ">{data.date_end}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Item
