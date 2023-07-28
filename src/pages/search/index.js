import React, {useState} from 'react';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import './search.css'
import {Button} from "flowbite-react";
import {MenuItem, Pagination, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { stateFilter, todayTasks} from "../../utils/constant";


const Search = () => {
    const navigateName = 'search'
    const navigate = useNavigate()
    const [filters, setFilters] = useState(null);

    const handleFilters = (key, value) => {
        setFilters({ ...filters, [key]: value });
        console.log(filters)
    };

    const sortedTodayTasks = todayTasks.sort((a, b) => {
        if (b.is_important && !a.is_important) {
            return 1;
        } else if (!b.is_important && a.is_important) {
            return -1;
        } else {
            return 0;
        }
    });
    return (
        <div style={{'width':'1506px'}}>
            <HeaderLogin/>
            <div className='row'>
                <div className="col col-3 ">
                    <SidebarUser data = {navigateName}/>
                </div>

                <div className="col col-9">
                    <div className="tasklist-wrap">
                        <div className="publicsans-semi-bold-charade-18px tablename">
                            Search
                        </div>

                        <div className="search-tab">

                            {/*    select */}
                            <div className="col col-3 infor-ui">
                                <TextField
                                        select
                                        fullWidth
                                        id="outlined-required"
                                        label="Status"
                                        className="outline-input"
                                >
                                        {Object.entries(stateFilter).map(([key, value]) =>(
                                            <MenuItem onClick={() => handleFilters('stateFilter', value)} key={key} value={key} >{value}</MenuItem>
                                        ))}
                                </TextField>

                            </div>
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Pick Date"
                                        onChange={(newValue) => handleFilters('date_filter',newValue.format('YYYY-MM-DD'))}
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
                        <table className = "w-full text-sm text-left text-black-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center" style={{width:'10%'}}>Task no</th>
                                <th scope="col" className="px-6 py-3 text-center" style={{width:'35%'}}>task name</th>
                                <th scope="col" className="px-6 py-3 text-center" style={{width:'15%'}}>state</th>
                                <th scope="col" className="px-6 py-3 text-center" style={{width:'20%'}}>Date Start</th>
                                <th scope="col" className="px-6 py-3 text-center" style={{width:'20%'}}>Date End</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sortedTodayTasks.map((todayTask , index) => (
                                <tr style={{cursor:'pointer'}}
                                    className={`${todayTask.is_important === true ? 'setbg text-white' : 'bg-white'}  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 `}
                                >
                                    <td className="px-6 py-4 text-center">{index+1}</td>
                                    <td className="px-6 py-4 text-center hover:underline" onClick={() => {
                                        navigate(
                                            `/detail/${todayTask.id}`
                                        )
                                    }}>{todayTask.task_name}</td>
                                    <td className="px-6 py-4 text-center">{todayTask.state}</td>
                                    <td className="px-6 py-4 text-center">{todayTask.date_start}</td>
                                    <td className="px-6 py-4 text-center">{todayTask.date_end}</td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                        <div className="offset-4 mt-4 mb-5">
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

export default Search
