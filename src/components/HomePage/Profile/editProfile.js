import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";

import './editProfile.css'
import './Profile.css'




const EditProfile = () => {
    const state = useSelector((state) => state.data);
    const { userInfo, editProfileData, seteditProfileData, errorPassEdit, setHandlePassEdit } = useBetween(state.useShareState);




    const inputPassEvent = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setHandlePassEdit(false)

        seteditProfileData((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }
    const handlePictureSelected = (event) => {
        var picture = event.target.files[0];
        var src = URL.createObjectURL(picture);
        seteditProfileData((lastValue) => {
            return {
                ...lastValue,
                photo: picture,
                src: src
            }
        });

    }

    return (


        <div className="EditProfile">

            <h3>Edit Profile</h3>

            <div className="img">
                <div className="text">Your Photo:</div>
                <img src={editProfileData.src} className="imgProfile" />
                <input type="file" onChange={handlePictureSelected} ></input>
            </div>

            <div className="input">
                <div className="text">Your Name:</div>
                <input type="text" placeholder={userInfo.userName} disabled={true} ></input>
            </div>

            <div className="input">
                <div className="text">Email:</div>
                <input type="text" placeholder={userInfo.emial} disabled={true} ></input>
            </div>

            <div className="input">
                <div className="text">Password:</div>
                <input type="password" value={userInfo.password} name="Password" onChange={inputPassEvent}></input>
            </div>

            <div className="input">
                <div className="text">Confirm Password:</div>
                <input type="password" value={userInfo.password} name="ConfirmPassword" onChange={inputPassEvent}></input>

                {
                    errorPassEdit &&
                    <div className="error">*Password does not match</div>
                }
            </div>





        </div>


    );
}

export default EditProfile;