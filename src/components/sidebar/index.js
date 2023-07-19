import React from "react";
import './sidebar.css'
import {Sidebar} from "flowbite-react";
import {HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser} from "react-icons/hi";
// import {sidebarItem} from "../../utils/constant";
import {useState} from "react";


const SidebarUser = () => {

    const [activeItem, setActiveItem] = useState('item1');

    const handleClick = (item) => {
        setActiveItem(item); // Khi click vào item mới, activeItem sẽ được cập nhật
    };

    return(
        <div >

            <Sidebar aria-label="Sidebar with multi-level dropdown example" style={{'height':'742px' ,'margin-top':'64px','width':'18rem'}}>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        {/*{sidebarItem.map((item, index) => (*/}
                        {/*        <Sidebar.Item*/}
                        {/*            href="#"*/}
                        {/*            icon={ `${item.icon}` }*/}
                        {/*            className="sidebar-item"*/}
                        {/*        >*/}

                        {/*            <p className='p-text'>*/}
                        {/*                {item.name}*/}
                        {/*            </p>*/}
                        {/*        </Sidebar.Item>*/}
                        {/*    ))}*/}
                        <Sidebar.Item
                            href="#"
                            icon={HiChartPie}
                            onClick={() => handleClick('item1')} className={activeItem === 'item1' ? 'active-sidebar' : ''}
                        >
                            <p className='p-text' >
                                Overview
                            </p>
                        </Sidebar.Item>

                        <Sidebar.Item
                            href="#"
                            icon={HiInbox}
                            onClick={() => handleClick('item2')} className={activeItem === 'item2' ? 'active-sidebar' : ''}
                        >
                            <p className='p-text'>
                                Task List
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiShoppingBag}
                            onClick={() => handleClick('item3')} className={activeItem === 'item3' ? 'active-sidebar' : ''}
                        >
                            <p className='p-text'>
                                Search Task
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiUser}
                            onClick={() => handleClick('item4')} className={activeItem === 'item4' ? 'active-sidebar' : ''}
                        >
                            <p className='p-text'>
                                Users
                            </p>
                        </Sidebar.Item>

                        <Sidebar.Item
                            href="#"
                            icon={HiArrowSmRight}

                        >
                            <p className='p-text'>
                                Log out
                            </p>
                        </Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>

    )
}

export default SidebarUser

