import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useBetween } from "use-between";
import Header from "../Header/Header";

import './Profile.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditProfile from "./editProfile";
import Video from '../../../photo/Inbox.mp4'
import {ControlBar, Player} from "video-react";




const Profile = () => {

    const state = useSelector((state) => state.data);
    const {
        sendMessagesBox, receivedMessagesBox, userInfo, setUserInfo,
        editProfile, editProfileData, seteditProfileData, setEditProfile, setHandlePassEdit
    } = useBetween(state.useShareState);

    const handleEdit = () => {
        seteditProfileData((lastValue) => {
            return {
                ...lastValue,

                src: userInfo.src

            }
        });
        setEditProfile(false);
    }

    const handleSaveEditProfile = () => {
        // after click of save in edit profile
        if (editProfileData.Password == editProfileData.ConfirmPassword) {
            setUserInfo((lastValue) => {
                return {
                    ...lastValue,
                    password: editProfileData.Password,
                    photo: editProfileData.photo,
                    src: editProfileData.src

                }
            });

            setEditProfile(false);
        }
        else
            setHandlePassEdit(true)

    }

    return (
        <div>
            <Header></Header>
            <div className="Profile">
                <Player autoPlay loop aspectRatio="100:1" src={Video} className="Video">
                    <ControlBar autoHide={false} />
                </Player>

                <div className="ProfileCont">

                    <div className="imgProfile">
                        <img src={userInfo.src} />

                    </div>

                    <div className="icon edit"><i className='fa fa-edit' onClick={() => setEditProfile(true)}></i></div>

                    <div className="Username">{userInfo.userName}</div>

                    <div className="Email">{userInfo.email}</div>

                    <div className="buttons">

                        <NavLink to="/SendMessages">  <button>Send Messages
                            <div>{sendMessagesBox.length}</div>
                        </button>
                        </NavLink>

                        <NavLink to="/ReceivedMessages">  <button>Received Messages
                            <div> {receivedMessagesBox.length} </div>
                        </button>
                        </NavLink>
                    </div>

                </div>
            </div>


            {/* <model that open when click on edit icon> */}

            <Modal show={editProfile} onHide={handleEdit} size='lg' className="modle"  >

                <Modal.Body style={{ background: "#333" }}><EditProfile /></Modal.Body>
                <Modal.Footer dir="auto" style={{ background: "#333" }}>

                    <Button className="btn btn-calendar-modal-cancel" style={{ background: "#888", border: "none" }}
                        onClick={handleEdit}>
                        Close
                    </Button>
                    <Button className="btn btn-calendar-modal-cancel"
                        onClick={handleSaveEditProfile}>
                        Save
                    </Button>
                </Modal.Footer>

            </Modal>
            {/* </model that open when click on edit icon> */}

        </div>


    );
}

export default Profile;