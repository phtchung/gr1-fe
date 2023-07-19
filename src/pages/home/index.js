import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import Header from "../../components/header";
import './home.css'

const Home = () => {

    return (
        <div className="main-pagescreen">
            <Header />
            <div className="home-hero">
                <div className="bg">
                    <div className="overlay-container">
                        <Backgroundoverlay2 src={"/images/img.png"}/>
                        <div className="overlay"></div>
                    </div>
                </div>

                <div className="content">
                    <div className="head">
                        <div className="text">
                            <h1 className="start-a-new-project">
                                {<React.Fragment>
                                    TodoList
                                </React.Fragment>}
                            </h1>
                        </div>
                        <div className="start-a-new-project-1">
                            {<React.Fragment>
                                ...Adding things
                                <br/>
                                to your life
                            </React.Fragment>}
                        </div>
                    </div>
                </div>
                <img className="webinar-pana-1" src={"/images/webinar-pana-1.png"} alt="Webinar-pana 1"/>
            </div>
        </div>
    )
}

function Backgroundoverlay2(props) {
    const {src} = props;

    return (
        <div className="backgroundoverlay_2">
            <img className="img" src={src} alt="img"/>
        </div>
    );
}

export default Home
