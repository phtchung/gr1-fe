import React, {useState} from 'react';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import './tasklist.css'
import {Button} from "flowbite-react";
import {Pagination} from "@mui/material";

const TaskList = () => {
    const navigateName = 'tasklist'
    const [value, setValue] = useState(new Date());


    return (
        <div style={{'width':'1506px'}}>
           <HeaderLogin/>
            <div className='row'>
                <div className="col col-3">
                    <SidebarUser data = {navigateName}/>
                </div>

                <div className="col col-9">
                    <div className="tasklist-wrap">
                       <div className="publicsans-semi-bold-charade-18px tablename">
                           Search
                       </div>

                        <div className="search-tab">
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-outline-dark  dropdown-toggle drop-search" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        State
                                    </button>
                                    <ul className="dropdown-menu " style={{cursor:'pointer'}} aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" >Done</a></li>
                                        <li><a className="dropdown-item" >Todo</a></li>
                                        <li><a className="dropdown-item">Inprogress </a></li>
                                    </ul>
                                </div>

                            </div>
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker

                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div>
                                <Button variant="contained"  className='btn-project btn-height'>
                                    <span className="text-xl publicsans-semi-bold-charade-15px text-white ml-2 ">Search</span>
                                </Button>
                            </div>

                        </div>

                    {/*    table*/}

                        <div className="offset-4">
                            <Pagination count={10}
                                        // page={page} onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TaskList
