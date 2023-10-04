import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import Header from "../Header/Header";
import './HomePage.css'
import Video from '../../../photo/Inbox.mp4'
import SendMessage from "../../sendMessageText/sendMessage";
import {ControlBar, Player} from "video-react";





const HomePage = () => {

     // <get the data from rducers>
    const state = useSelector((state) => state.data);
    const { bottleClassName, hidHomeIntro, sethidHomeIntro } = useBetween(state.useShareState);
     // </get the data from rducers>

    const body = document.querySelector("body");
    body.style.background = 'none';

    useEffect(() => {
        const arrow = document.querySelector('.arrow');
        if (hidHomeIntro == false)
            arrow.style.transform = "rotate(180deg)";
        else
            arrow.style.transform = "rotate(0deg)";

    }, [])

    const hidIntro = () => {
        sethidHomeIntro(!hidHomeIntro);
        const arrow = document.querySelector('.arrow');
        if (hidHomeIntro == true)
            arrow.style.transform = "rotate(180deg)";
        else
            arrow.style.transform = "rotate(0deg)";

    }

    return (

        <div className="HomePage">
            <div className="VideoWrapper">
            <Player autoPlay loop aspectRatio="100:1" src={Video} className="Video">
                <ControlBar autoHide={false} />

            </Player>

            </div>
            <Header />

            <div className="continer">
                <div className="intro">

                    <div className="hidScrollText" onClick={hidIntro} >
                        <div style={{ display: "flex" }}>

                            <h6 className="arrow"></h6>
                        </div>



                        <div style={{ display: !hidHomeIntro ? "block" : " none" }}>
                            <p> This site allows you to write and send whatever you want, and your anonymous message will reach someone without knowing any information about you. </p>

                        </div>

                    </div>

                </div>

                <div className="secondSection">

                    <SendMessage />


                </div>





            </div>


        </div>

    );
}

export default HomePage;