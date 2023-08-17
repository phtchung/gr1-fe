import React from 'react';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import './tasklist.css'
import Item from "../../components/item";
import useListTask from "./useTaskList";
import {CircularProgress} from "@mui/material";



const TaskList = () => {
    const navigateName = 'tasklist'

    const {
        listTaskTodo,
        isSuccessTodo,
        isLoadingTodo,
        listTaskInProgress,
        isSuccessInProgress,
        isLoadingInProgress,
        listTaskDone,
        isSuccessDone,
        isLoadingDone
    } = useListTask();

    console.log(listTaskTodo)

    return (
        <div style={{'width':'1506px'}}>
           <HeaderLogin/>
            <div className='row'>
                <div className="col col-3">
                    <SidebarUser data = {navigateName}/>
                </div>

                <div className="col col-9">
                    <div className="tasklist-wrap">
                       <div className="publicsans-semi-bold-charade-18px tablename mb-md-5">
                           TodoList
                       </div>

                        <div className="row list-wrap">
                            <div className="col col-4 ">
                                <div className="list-todo background-todo scrollable-col">
                                    <div className="list-header background-todo header-sticky">
                                        <span className="publicsans-semi-bold-charade-14px-overview " style={{'font-size':'18px'}}>Todo</span>
                                        {
                                            isSuccessTodo &&
                                            <>
                                                <span className="publicsans-semi-bold-charade-14px font-bold " style={{'font-size':'18px'}}>
                                            {listTaskTodo.length}</span>
                                            </>
                                        }
                                    </div>
                                    { isSuccessTodo && listTaskTodo.map((todoList, index) => (
                                        <Item key={index} data={todoList} />
                                    ))}

                                </div>
                            </div>

                            <div className="col col-4 ">
                                <div className="list-todo background-inpro scrollable-col">
                                    <div className="list-header background-inpro header-sticky">
                                        <span className="publicsans-semi-bold-charade-14px-overview " style={{'font-size':'18px'}}>Inprogress</span>
                                        {
                                            isSuccessInProgress &&
                                            <>
                                                <span className="publicsans-semi-bold-charade-14px font-bold " style={{'font-size':'18px'}}>
                                            {listTaskInProgress.length}</span>
                                            </>
                                        }
                                    </div>
                                    {isSuccessInProgress && listTaskInProgress.map((inProgressList, index) => (
                                        <Item key={index} data={inProgressList} />
                                    ))}
                                </div>
                            </div>


                            <div className="col col-4 ">
                                {isLoadingDone && <>
                                    <CircularProgress className='mt-4' />
                                </>}
                                <div className="list-todo background-done scrollable-col" >
                                    <div className="list-header background-done header-sticky">
                                        <span className="publicsans-semi-bold-charade-14px-overview " style={{'font-size':'18px'}}>Done</span>
                                        {
                                            isSuccessDone &&
                                            <>
                                                <span className="publicsans-semi-bold-charade-14px font-bold " style={{'font-size':'18px'}}>
                                            {listTaskDone.length}</span>
                                            </>
                                        }
                                    </div>

                                    {isSuccessDone && listTaskDone.map((doneList, index) => (
                                        <Item key={index} data={doneList} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TaskList
