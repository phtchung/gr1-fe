import React, {useEffect} from 'react';
// import { useQuery } from '@tanstack/react-query';
import {useLocation, useNavigate} from 'react-router-dom';
import { useState  } from 'react';
import "./login.css"
import {Button} from "@mui/material";
// import HeaderLogin from "../../components/header-login";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const handleMailChange = (event) => {
        setMail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    useEffect(() => {
        // Thực hiện cuộn trang đến đầu trang khi chuyển trang
        window.scrollTo(0, 0);
    }, [location]);
    // const handleClick = async () => {
    //     try {
    //         const res = await USER.login({
    //             username: mail,
    //             password: password
    //         });
    //         const token = res?.data?.token;
    //         if (token) {
    //             localStorage.setItem('token', token);
    //         }
    //         const id = res?.data?.user_id;
    //         if (id) {
    //             localStorage.setItem('id', id);
    //         }
    //         toast.success('Login success');
    //         navigate('/');
    //     } catch (error) {
    //         toast.error(error?.response?.data?.message);
    //     }
    // }

    return (
        <div >
            {/*<HeaderLogin></HeaderLogin>*/}
            <div className="login-wrap" style={{'margin':'60px'}}>

                <div className="login-left">
                    <img className="img-login" src={"/images/login-image.png"} alt=""/>
                </div>
                <div className="bg-login">
                    <div className="overlay-container">
                        <Backgroundoverlay2 src={"/images/img.png"}/>
                        <div className="overlay-login"></div>
                    </div>
                </div>
                <div className="login-right">
                    <div className="text">
                        <h1 className="login-project" onClick={() =>{
                            navigate("/")
                        }}>
                            {<React.Fragment >
                                TodoList
                            </React.Fragment>}
                        </h1>
                    </div>
                    <div className="login-auth-form-login">
                        <div className="login-head">
                            <span >
                                <span>Don't have account? </span>
                                <span className="login-text04" onClick={() => {
                                    navigate(
                                        "/register"
                                    )
                                            }}>
                                    <strong>Sign up</strong>
                                </span>
                            </span>
                        </div>
                        <div className="login-content1">

                            <div className="login-input">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="register-input"
                                    value={mail}
                                    onChange={handleMailChange}
                                />
                                {/* </div> */}
                            </div>


                            <div className="login-text-field1">
                                <div className="login-input1">

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="register-input"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>
                            <span className="login-text13 ">
                                            <span>Forget Password ?</span>
                                        </span>
                            <Button variant="contained" className='btn-project'>
                                <span className="login-text15 ">
                                    <span>Sign in </span>
                                </span>
                            </Button>


                            <div className="login-stack1">
                                <button className="login-icon-button1">
                                    <img
                                        src="/images/iconsicgooglei1740-rs4j.svg"
                                        alt="iconsicgoogleI1740"
                                        className="login-iconsicgoogle"
                                    />
                                </button>
                                <button className="login-icon-button2">
                                    <img
                                        src="/images/iconsicfacebbooki1740-ni8j.svg"
                                        alt="iconsicfacebbookI1740"
                                        className="login-iconsicfacebbook"
                                    />
                                </button>
                                <button className="login-icon-button3">
                                    <img
                                        src="/images/iconsictwitteri1740-bv9j.svg"
                                        alt="iconsictwitterI1740"
                                        className="login-iconsictwitter"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
function Backgroundoverlay2(props) {
    const {src} = props;

    return (
        <div className="backgroundoverlay_login">
            <img className="img" src={src} alt="img"/>
        </div>
    );
}
export default Login
