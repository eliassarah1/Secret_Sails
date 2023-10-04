import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../photo/logo.jpg'
import './Header.css'
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Header = () => {
    // Define your getMuteState and setMuteState functions here
    const setMuteState = (isMuted) => {
        localStorage.setItem('isMuted', JSON.stringify(isMuted));
    };

    const getMuteState = () => {
        const mutedState = localStorage.getItem('isMuted');
        return mutedState ? JSON.parse(mutedState) : true;
    };

    const [isMuted, setIsMuted] = useState(getMuteState());

    const handleMute = () => {
        const newMuteState = !isMuted;
        setIsMuted(newMuteState);
        setMuteState(newMuteState);
    };

    // Get the data from reducers
    const state = useSelector((state) => state.data);
    const { userInfo } = useBetween(state.useShareState);

    // CSS style
    const style = {
        textDecoration: 'none',
        color: "#333",
        marginLeft: "-50px",
        paddingLeft: "50px"
    };

    return (
        <div className="Header" style={{ zIndex: 1 }}>
            <Navbar expand="lg">
                <Container>
                    {/* Logo */}
                    <NavLink to="/Home" style={{ textDecoration: 'none' }}>
                        <img src={Logo} className="logo" alt="Logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/SendMessages" style={{ textDecoration: 'none' }}>
                                <div className="nav-item">Sent Messages</div>
                            </NavLink>
                            <NavLink to="/ReceivedMessages" style={{ textDecoration: 'none' }}>
                                <div className="nav-item">Received Messages</div>
                            </NavLink>
                        </Nav>
                        {/* Dropdown */}
                        <Dropdown className="more" style={{ zIndex: 2 }}>
                            <Dropdown.Toggle className="Dropdown">
                                <img src={userInfo.src} className="img" alt="User" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ zIndex: 2 }}>
                                <Dropdown.Item className="drowpDownItem" style={{ zIndex: 2 }}>
                                    <NavLink to="/Profile" style={style}>
                                        Profile
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/LogInAndSignUp" style={style}>
                                        Log Out <i className="fa fa-sign-out" aria-hidden="true"></i>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                    {/* Mute Button */}
                    <button onClick={handleMute}>
                        {isMuted ? (
                            <FaVolumeMute />
                        ) : (
                            <FaVolumeUp />
                        )}
                    </button>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
