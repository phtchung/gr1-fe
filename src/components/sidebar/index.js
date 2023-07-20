import React from "react";
import './sidebar.css'
import {Sidebar} from "flowbite-react";
import {HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser} from "react-icons/hi";
// import {sidebarItem} from "../../utils/constant";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SidebarUser = ({data}) => {
    const navigate = useNavigate()
    const [activeItem, setActiveItem] = useState(data);

    const handleClick = (item) => {
        setActiveItem(item);
         // Khi click vào item mới, activeItem sẽ được cập nhật
        navigate(`/${item}`)

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
                            icon={HiChartPie}
                            onClick={() => handleClick('overview')}
                            className={activeItem === 'overview' ? 'active-sidebar' : ''}
                        >
                            <p className='p-text' >
                                Overview
                            </p>
                        </Sidebar.Item>

                        <Sidebar.Item
                            icon={HiInbox}
                            onClick={() => handleClick('tasklist')} className={activeItem === 'tasklist' ? 'active-sidebar' : ''}
                        >
                            <p className='p-text'>
                                Task List
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item

                            icon={HiShoppingBag}
                            onClick={() => handleClick('search')} className={activeItem === 'search' ? 'active-sidebar' : ''}
                        >
                            <p className='p-text'>
                                Search Task
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiUser}
                            onClick={() => handleClick('profile')} className={activeItem === 'profile' ? 'active-sidebar' : ''}
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

