import React from "react";
import { useNavigate } from "react-router-dom";
// import USER from "../../services/userService";
// import { toast } from "react-toastify";
import './header-login.css'
import {Avatar} from "@mui/material";

const HeaderLogin = () => {
    const navigate = useNavigate();
    // const token = useMemo(() => localStorage.getItem('token'), []);
    // const id = useMemo(() => localStorage.getItem('id'), []);
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    // const handleLogout = async () => {
    //     try {
    //         await USER.logout();
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('id');
    //         toast.success('Logout success');
    //         navigate('/login')
    //     } catch (e) {
    //         toast.error('Logout failed');
    //     }
    // }

    return (
        <div className="main-header">
            <div className="header-content">
                <div className="header-wrap-login">
                    <div className="logo">
                        <img className="logo-header" src="../images/logo.svg" alt="Logo" />
                        <div className="find-tutors" onClick={() => {
                            navigate(
                                "/"
                            )
                        }}>
                            <span className="publicsans-semi-bold-charade-14px">TODOLIST</span>
                        </div>
                    </div>

                    <div className="link publicsans-semi-bold-charade-14px content-right-login">

                        {/*{*/}
                        {/*    (token && id) ?*/}
                        {/*        (*/}
                        {/*            <>*/}
                        {/*            <div className="link logout" >*/}
                        {/*            <div className="dashboardpublicsans-semi-bold-jade-14px">*/}
                        {/*                <span className="publicsans-semi-bold-jade-14px">ログアウト</span>*/}
                        {/*            </div>*/}
                        {/*            /!*<img*!/*/}
                        {/*            /!*    className="iconsic_chevron_left-header"*!/*/}
                        {/*            /!*    src="../images/icons-ic-chevron-left.svg"*!/*/}
                        {/*            /!*    alt="icons/ic_chevron_left"*!/*/}
                        {/*/>*/}
                        {/*/!*            </div>*!/*/}
                        {/*<button className="button-header" onClick={() => {*/}
                        {/*    navigate(*/}
                        {/*        "/register"*/}
                        {/*    )*/}
                        {/*}}>*/}
                        {/*    <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon"/>*/}
                        {/*    <div className="labelvalign-text-middlepublicsans-bold-white-14px">*/}
                        {/*        <span className="publicsans-bold-white-14px">Sign up</span>*/}
                        {/*    </div>*/}
                        {/*</button>*/}
                        {/*    </>*/}
                        {/*)*/}

                        {/*:*/}
                        {/*(*/}
                        {/*<button className="button-header" onClick={() => {*/}
                        {/*    navigate(*/}
                        {/*        "/login"*/}
                        {/*    )*/}
                        {/*}}>*/}

                        {/*    <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon"/>*/}
                        {/*    <div className="labelvalign-text-middlepublicsans-bold-white-14px">*/}
                        {/*        <span className="publicsans-bold-white-14px">Sign in</span>*/}
                        {/*    </div>*/}
                        {/*</button>*/}

                        <form className="d-flex search" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>

                        </form>

                        <div className="find-tutors" onClick={() => {
                                    // {
                                    //     (token && id) ?
                                    //         navigate(
                                    //             `/profile/${id}`
                                    //         ) : navigate(
                                    //             "/login"
                                    //         )
                                    // }
                                }}>
                                    <span className="publicsans-semi-bold-charade-14px">0971751698</span>
                        </div>
                        <div className="find-tutors" onClick={() => {
                            // {
                            //     (token && id) ?
                            //         navigate(
                            //             `/profile/${id}`
                            //         ) : navigate(
                            //             "/login"
                            //         )
                            // }
                        }}>
                            <span className="publicsans-semi-bold-charade-14px">Phạm Thành Chung</span>
                        </div>


                        {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />*/}

                        <Avatar {...stringAvatar('Kent Dodds')} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeaderLogin;
