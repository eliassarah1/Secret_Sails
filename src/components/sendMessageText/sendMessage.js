import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import './sendMessage.css'
import { useLocation } from "react-router";



const SendMessage = () => {
    const state = useSelector((state) => state.data);
    const { MessageOption, setBottleClassName, setSendMessagesBox, userInfo } = useBetween(state.useShareState);
    const location = useLocation();
    const [messageText, setMessageText] = useState({
        message: ""
    });


    const [optionState, setOptionState] = useState("");
    const [displayAlert, setDisplayAlert] = useState(false);

    const messageHandle = (event) => {

        const value = event.target.value;

        setMessageText((lastValue) => {
            return {
                ...lastValue,
                message: value
            }
        });



    }

    const sendMessageBtn = () => {

        const SendMessg = document.querySelector(".SendMessg");



        if (messageText.message != "") {
            if (location.pathname != "/LogInAndSignUp") {
                window.scrollTo(0, 0);
                SendMessg.style.visibility = "hidden";
               
            }
            setBottleClassName("bottleAnimation");

            setTimeout(() => {

                setDisplayAlert(true)
                setBottleClassName("");


            }, 2000);
            setTimeout(() => {

                setDisplayAlert(false);


            }, 3600);
            setTimeout(() => {

                SendMessg.style.visibility = "visible";



            }, 3700);

            // send messageText.message to back
        }
        setMessageText((lastValue) => {
            return {
                ...lastValue,
                message: ""
            }
        });

        if (location.pathname == "/Home") {
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

            const newItem = {
                messageText: messageText.message,
                date: date,
                country: userInfo.country,
                read: false

            }
            setSendMessagesBox(oldArray => [...oldArray, newItem]);
        }






    }
    const changeSelection = (e) => {
        setOptionState(e.target.value);

    }

    var option = MessageOption.map((item, i) => {

        return (

            <option className="optionsMenu" value={item.option} key={i} id={i} >
                {item.option}
            </option>


        )
    })


    return (

        <div className="Send">
            {/* ------------<alert>--------------*/}


            <div className="alert alert-success" style={{ display: displayAlert == true ? 'block' : 'none' }}>

                <div className="alertText">Your message has been sent successfully</div>
                <div className="close" onClick={() => setDisplayAlert(false)}> &times;</div>
            </div>


            {/* ------------</alert>--------------*/}
            <div className="SendMessg">



                <p >Message type:</p>
                <select
                    className="SelectedBox"
                    onChange={changeSelection}
                    value={optionState}
                >
                    {option}

                </select>

                <p className="loginText"> Only the message will be sent to someone, without sending any information about you.</p>
                <p className="homePageText">Do you have something to write, what are you waiting for?? Let's start writing now</p>
                <textarea name="postContent"
                    placeholder="type your message here..."
                    value={messageText.message}
                    onChange={messageHandle}
                  
                />

                <input className="sendMessg-btn" type="submit" value="Send" onClick={sendMessageBtn} />

            </div>

        </div>

    );
}

export default SendMessage;