import React from "react";
import './sidebar.css'
import {Sidebar} from "flowbite-react";
import {HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser} from "react-icons/hi";
// import {sidebarItem} from "../../utils/constant";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import USER from "../../services/userService";
import api from "../../utils/api";
import token from "../../utils/token";


const SidebarUser = ({data}) => {
    const navigate = useNavigate()


    const [activeItem, setActiveItem] = useState(data);

    const handleClick = async (item) => {

        setActiveItem(item);
        // Khi click vào item mới, activeItem sẽ được cập nhật

            if (item === 'home') {
                navigate('.././')
            } else if (item === 'logout') {

            } else {
                navigate(`/${item}`)
            }
    };
   // const handleLogout1 = () => {
   //      api(`/api/auth/logout`, 'POST')
   //          .then(response => {
   //              console.log('response')
   //              console.log(response);
   //          })
   //          .catch(error => {
   //              console.error(error);
   //          });
   //  }

    const handleLogout = async () => {
        try {
            await USER.logout();
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            toast.success('Logout success');
            // navigate('/')
            navigate('.././')
        } catch (e) {
            toast.error('Logout failed');
        }
    }

    return(
        <div className="position-fixed">
            <Sidebar aria-label="Sidebar with multi-level dropdown example" style={{'height':'742px' ,'margin-top':'64px','width':'18rem'}}>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
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
                                Task Created
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
                            icon={HiArrowSmRight}
                            onClick={handleLogout}
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

