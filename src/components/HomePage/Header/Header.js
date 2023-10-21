import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../photo/logo.jpg'
import './Header.css'
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Header = () => {

    // <Mute Video>
    const [isMuted, setIsMuted] = useState(true);

    const handleMute = () => {
        setIsMuted(!isMuted);

        // Mute all video elements
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.muted = isMuted;
        });
    }



    // <get the data from rducers>
    const state = useSelector((state) => state.data);
    const { userInfo } = useBetween(state.useShareState);
    // </et the data from rducers>


    const body = document.querySelector("body");
    body.style.background = 'none';
    // <css>
    const style = {
        textDecoration: 'none',
        color: "#333",
        marginLeft: "-50px",
        paddingLeft: "50px"
    }
    // </css>


    return (

        <div className="Header" style={{ zIndex: 1 }}>

            <Navbar expand="lg" >

                <Container>

                    {/* ---------------------------------<LOGO >---------------------*/}
                    <NavLink to="/Home" style={{ textDecoration: 'none' }}><img src={Logo} className="logo"></img></NavLink>
                    {/* ---------------------------------</LOGO>---------------------*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavLink to="/SendMessages" style={{ textDecoration: 'none' }}>
                                <div className="nav-item">   Sent Messages </div>
                            </NavLink>
                            <NavLink to="/ReceivedMessages" style={{ textDecoration: 'none' }}>
                                <div className="nav-item">   Received Messages </div>
                            </NavLink>

                        </Nav>


                        <Dropdown className="more" style={{ zIndex: 2 }}>
                            <Dropdown.Toggle className="Dropdown"  >

                                <img src={userInfo.src} className="img"></img>

                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ zIndex: 2 }}>

                                <Dropdown.Item className="drowpDownItem" style={{ zIndex: 2 }}>
                                    <NavLink to="/Profile" style={style}>
                                        Profile
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    <NavLink to="/LogInAndSignUp" style={style}>
                                        Log Out <i className="fa fa-sign-out" aria-hidden="true"></i>
                                    </NavLink>
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                    </Navbar.Collapse>
                    <button onClick={handleMute}>
                        {isMuted ? (


                            <FaVolumeUp />
                        ) : (
                            <FaVolumeMute />
                        )}
                    </button>
                </Container>

            </Navbar>
        </div >




    );
}

export default Header;