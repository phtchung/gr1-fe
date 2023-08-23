import React, {useState , useEffect} from 'react';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import './overview.css'
import "../../index.css"
import {Button} from "flowbite-react";
import {Checkbox, MenuItem, TextField, FormControlLabel} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {state, menuItems} from "../../utils/constant";
import {useNavigate} from "react-router-dom";
import useListTaskToday from "./useListTaskToday";
import {addTask} from "../../services/taskService";
import { toast } from "react-toastify";


const Overview = () => {
    const navigateName = 'overview'
    const {
        listTasks,
        isSuccess,
        isLoading,
        totalTask,
        totalTaskDone,
        totalTaskImportant,
        refetch
        // page,
        // totalPage,
        // handlePageChange,
        // queryString,
        // setQueryString,
    } = useListTaskToday();

    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [createTask, setCreateTask] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [isImportant, setIsImportant] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState(1);
    const [filteredData, setFilteredData] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCreatTask = (key, value) => {

        setCreateTask({ ...createTask, [key]: value });
        console.log(createTask)
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        handleCreatTask('isNotify',event.target.checked)
    };

    const handleCheckboxChange1 = (event) => {
        setIsImportant(event.target.checked);
        handleCreatTask('isImportant',event.target.checked)
    };

    const handleSelectState = (e) => {
        setSelectValue(e.target.value);

    }
    const handleInputValue = (e) => {
        setInputValue(e.target.value);

    }

    // const handleFilter = () => {
    //     const filteredData = listTasks && listTasks.filter((item) => {
    //         return item.taskName.includes(inputValue)
    //     });
    //     setFilteredData(filteredData);
    // };

    const handleFilterDate = () => {
        if(selectValue === 2){
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const formattedYesterday = `${yesterday.getFullYear()}-${(yesterday.getMonth() + 1).toString().padStart(2, '0')}-${yesterday.getDate().toString().padStart(2, '0')}`;
            console.log(formattedYesterday)
        const filteredData = listTasks && listTasks.filter((item) => {
            return item.dateEnd > formattedYesterday
        });
            setFilteredData(filteredData);}

    };


    // useEffect(() => {
    //     handleFilter();
    //
    // }, [inputValue]);




    const handleClose = () => {
        setOpen(false);
    };

    const handleAddTask = async () => {
        try {
            const res = await addTask(
                {...createTask,userId:Number(1), control:1}
            );
            toast.success('Create task successful', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
            });
            refetch()
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
        setOpen(false);
    }

        const sortedTodayTasks = listTasks && listTasks.sort((a, b) => {
            if (b.isImportant && !a.isImportant) {
                return 1;
            } else if (!b.isImportant && a.isImportant) {
                return -1;
            } else {
                return 0;
            }
        })


    const filteredArray = sortedTodayTasks && sortedTodayTasks.filter(obj => {
        for (let key in obj) {
            if (typeof obj[key] === 'string' && obj[key].includes(inputValue)) {
                return true;
            }
        }
        return false;
    });

    return (
        <div style={{'width':'1506px'}}>
            <HeaderLogin/>
            <div className="overview-wrap row">
                <div className="col col-3">
                    <SidebarUser data = {navigateName}/>
                </div>

                <div className="col col-9 ">
                    <div className="overview-right">
                        <div className="row number-row">
                            <div className="col col-4 overview-item">
                                <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg opacity-10 bg-warning">

                                        </div>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white lnr-laptop-phone text-dark opacity-8" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path
                                            d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                    </svg>
                                </div>
                                <div className="overview-infor">
                                    <span className="publicsans-semi-bold-charade-14px-overview">TOTAL TASK</span>
                                    {isSuccess && <div className=" publicsans-semi-bold-charade-18px">
                                        {totalTask}
                                    </div>}
                                </div>
                            </div>

                            <div className="col col-4 overview-item">
                                <div className="icon-wrapper rounded-circle">
                                    <div className="icon-wrapper-bg opacity-10 bg-done">
                                    </div>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white text-dark opacity-8" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round"
                                              stroke-width="2"
                                              d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"/>
                                    </svg>

                                </div>
                                <div className="overview-infor">
                                    <span className="publicsans-semi-bold-charade-14px-overview">TASK DONE</span>
                                    <div className=" publicsans-semi-bold-charade-18px">
                                        {totalTaskDone}
                                    </div>
                                </div>
                            </div>

                            <div className="col col-4 overview-item">
                                <div className="icon-wrapper rounded-circle">
                                    <div className="icon-wrapper-bg opacity-10 bg-important">

                                    </div>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white text-dark opacity-8" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M15.133 10.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175ZM4 4a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 4 4ZM2 8H1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 16 4Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z"/>
                                    </svg>
                                </div>
                                <div className="overview-infor">
                                    <span className="publicsans-semi-bold-charade-14px-overview">IMPORTANT TASK</span>
                                    <div className=" publicsans-semi-bold-charade-18px">
                                        {totalTaskImportant}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*Add Task*/}
                        <div className="addtask float-end">
                            <Button variant="contained"  className='btn-project' onClick={handleClickOpen}>
                                <svg className=" text-white w-6 h-6  dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
                                     viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round"  strokeLinejoin= "round"
                                          stroke-width="2"
                                          d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                               <span className=" text-white ml-2 publicsans-bold-charade-14px">Add Task</span>
                            </Button>

                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>
                                        <b>Add Task</b>
                                </DialogTitle>
                                <DialogContent>
                                    <div className="row mt-2">
                                        <div className="col col-6 infor-ui">
                                            <TextField
                                                fullWidth
                                                id="outlined-required"
                                                label="Task Name"
                                                className="outline-input"
                                                onChange={(e) => handleCreatTask("taskName", e.target.value)}
                                            />
                                        </div>
                                        <div className="col col-6 infor-ui">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Date Start"
                                                    onChange={(newValue) => handleCreatTask('dateStart',newValue.format('YYYY-MM-DD'))}
                                                />
                                            </LocalizationProvider>
                                        </div>
                                        <div className="col col-6 infor-ui">
                                            <TextField
                                                select
                                                fullWidth
                                                id="outlined-required"
                                                label="Status"
                                                className="outline-input"
                                            >
                                                {Object.entries(state).map(([key, value]) =>(
                                                    <MenuItem onClick={() => handleCreatTask('state', value)} key={key} value={key} >{value}</MenuItem>
                                                ))}
                                            </TextField>
                                        </div>
                                        <div className="col col-6 infor-ui">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Date End"
                                                    onChange={(newValue) => handleCreatTask('dateEnd',newValue.format('YYYY-MM-DD'))}
                                                />
                                            </LocalizationProvider>
                                        </div>
                                        <div className="col col-6 infor-ui">
                                            <FormControlLabel control={
                                                <Checkbox
                                                    defaultChecked
                                                    checked={isImportant}
                                                    onChange={handleCheckboxChange1}
                                                    color="primary"
                                                />} label="Important" />

                                        </div>
                                        <div className="col col-6 infor-ui">
                                            <FormControlLabel control={
                                                <Checkbox
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
                                                    color="primary"
                                                    defaultChecked />
                                            } label="Notify" />

                                        </div>
                                        <div className="col col-12 infor-ui">
                                            <TextField
                                                fullWidth
                                                minRows="2"
                                                id="outlined-required"
                                                label="Description"
                                                className="outline-input"
                                                defaultValue=""
                                                onChange={(e) => handleCreatTask("description", e.target.value)}
                                            />
                                        </div>
                                    </div>

                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleAddTask}>Add Task</Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                        <div className="task-list " style={{'margin-top':'7rem'}}>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <div className="table-front">
                                    <span className="publicsans-semi-bold-charade-18px tablename">Today's Task</span>
                                    <div className="row justify-content-around" style={{width:'70%'}}>
                                        <div className="col col-4">
                                            <div className=" bg-white dark:bg-gray-900">
                                                <label htmlFor="table-search" className="sr-only">Search</label>
                                                <div className="relative mt-1">
                                                    <div
                                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                  strokeLinejoin="round" stroke-width="2"
                                                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="table-search"
                                                           className="search-task block pl-10  text-gray-900 border border-green-300 rounded-lg w-80 bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Search "
                                                            onChange={handleInputValue}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col col-4">
                                            <TextField
                                                fullWidth
                                                select
                                                id="outlined-required"
                                                label="ListTask"
                                                className="outline-input myTextField"
                                                defaultValue={1}
                                                onChange={handleSelectState}
                                            >
                                                {menuItems.map(item => (
                                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                                ))}
                                            </TextField>
                                        </div>
                                    </div>

                                </div>
                                {/*table hiển thị*/}
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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


                                    {filteredArray && filteredArray.map((todayTask , index) => (
                                        <tr style={{cursor:'pointer'}}
                                            className={`${todayTask.isImportant === true ? 'setbg text-white' : 'bg-white'}  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 `}
                                        >
                                            <td className="px-6 py-4 text-center">{index+1}</td>
                                            <td className="px-6 py-4 text-center hover:underline" onClick={() => {
                                                navigate(
                                                    `/detail/${todayTask.id}`
                                                )
                                            }}>{todayTask.taskName}</td>
                                            <td className="px-6 py-4 text-center">{todayTask.state}</td>
                                            <td className="px-6 py-4 text-center">{todayTask.dateStart}</td>
                                            <td className="px-6 py-4 text-center">{todayTask.dateEnd}</td>
                                        </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
