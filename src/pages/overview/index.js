import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import HeaderLogin from "../../components/header-login";
import SidebarUser from "../../components/sidebar";
import './overview.css'
import "../../index.css"
import {Button} from "flowbite-react";


const Overview = () => {
    const days = ['Today','Last 1 day', 'Last 1 week']
    const navigateName = 'overview'
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
                                    <div className=" publicsans-semi-bold-charade-18px">
                                        198
                                    </div>
                                </div>
                            </div>

                            <div className="col col-4 overview-item">
                                <div className="icon-wrapper rounded-circle">
                                    <div className="icon-wrapper-bg opacity-10 bg-done">
                                    </div>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white text-dark opacity-8" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"/>
                                    </svg>

                                </div>
                                <div className="overview-infor">
                                    <span className="publicsans-semi-bold-charade-14px-overview">TASK DONE</span>
                                    <div className=" publicsans-semi-bold-charade-18px">
                                        99
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
                                        5
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="addtask offset-10">
                            <Button variant="contained"  className='btn-project'>
                                <svg className=" text-white w-6 h-6  dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
                                     viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                               <span className=" text-white ml-2 publicsans-bold-charade-14px">Add Task</span>
                            </Button>

                        </div>

                        <div className="task-list">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                                <div className="table-front">
                                    <span className="publicsans-semi-bold-charade-18px tablename">Today's Task</span>
                                    <div className="offset-4 bg-white dark:bg-gray-900">
                                        <label htmlFor="table-search" className="sr-only">Search</label>
                                        <div className="relative mt-1">
                                            <div
                                                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                            </div>
                                            <input type="text" id="table-search"
                                                   className="search-task block pl-10 text-sm text-gray-900 border border-green-300 rounded-lg w-80 bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Search for items"/>
                                        </div>
                                    </div>


                                </div>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>

                                        <th scope="col" className="px-6 py-3 text-center" style={{width:'10%'}}>
                                            Task no
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center" style={{width:'35%'}}>
                                            task name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center" style={{width:'15%'}}>
                                            state
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center" style={{width:'20%'}}>
                                            Date Start
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center" style={{width:'20%'}}>
                                            Date end
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <td className="px-6 py-4 text-center">
                                            Black
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            Black
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            Accessories
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            $99
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <a href="#"
                                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>

                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <td className="px-6 py-4 text-center">
                                            Black
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            Black
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            Accessories
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            $99
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <a href="#"
                                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>

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
