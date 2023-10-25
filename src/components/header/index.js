import React, {useMemo} from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
// import USER from "../../services/userService";
// import { toast } from "react-toastify";

function Header() {
    const navigate = useNavigate();
    const token = useMemo(() => localStorage.getItem('token'), []);
    const id = useMemo(() => localStorage.getItem('id'), []);

    return (
        <div className="main-header">
            <div className="header-content">
                <div className="header-wrap">
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

                    <div className="link publicsans-semi-bold-charade-14px content-right">

                                    <button className="button-header" onClick={() => {
                                        navigate(
                                            "/register"
                                        )
                                    }}>
                                        <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon"/>
                                        <div className="labelvalign-text-middlepublicsans-bold-white-14px">
                                            <span className="publicsans-bold-white-14px">Sign up</span>
                                        </div>
                                    </button>

                        <button className="button-header" onClick={() => {
                                    navigate(
                                        "/login"
                                    )
                                }}>

                                    <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon"/>
                                    <div className="labelvalign-text-middlepublicsans-bold-white-14px">
                                        <span className="publicsans-bold-white-14px">Sign in</span>
                                    </div>
                                </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
