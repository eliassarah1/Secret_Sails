import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useBetween } from "use-between";
import Header from "../Header/Header";
import SelectMessages from "../selectMessage/selectMessage";
import './message.css'
import ScrollImage from '../../../photo/scroll.png'
import Video from '../../../photo/Inbox.mp4'
import { ControlBar, Player } from "video-react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//   ------------------------------------ component for BOTH SEND and RECEIVED messages ---------------------------

const Messages = () => {
    // <get the data from rducers>
    const state = useSelector((state) => state.data);
    const { sendMessagesBox, setSendMessagesBox, receivedMessagesBox, setReceivedMessagesBox } = useBetween(state.useShareState);
    // </get the data from rducers>

    const [indexOfSelectMessage, setIndexOfSelectMessage] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)



    const location = useLocation();

    var array = receivedMessagesBox;
    if (location.pathname == "/SendMessages")
        array = sendMessagesBox;

    const [modleMessg, setModleMessg] = useState(false);

    const handleModleMessg = () => setModleMessg(false);

    useEffect(() => {
        // check if the message was readen befor
        // should take that from backend

        for (var i = 0; i < array.length; i++) {
            if (i == array.length - 1) {
                array[i].openMessage = true;
                array[i].read = true;
            }
            else
                array[i].openMessage = false;
        }
        if (location.pathname == "/SendMessages")
            setSendMessagesBox([...array])
        else
            setReceivedMessagesBox([...array])
    }, [location.pathname])

    const handleClickMessg = (index) => {

        setIndexOfSelectMessage(index);

        setModleMessg(true)

        array[index].read = true;
        for (var i = 0; i < array.length; i++) {
            if (i == index)
                array[index].openMessage = true;
            else
                array[i].openMessage = false;
        }
        if (location.pathname == "/SendMessages")
            setSendMessagesBox([...array])
        else
            setReceivedMessagesBox([...array])


    }

    const handleRemoveItem = (id) => {
        const deleteMessg = document.querySelector(`.message${id}`);

        deleteMessg.classList.add("deleteMessg");

        setTimeout(() => {
            if (location.pathname == "/SendMessages") {
                setSendMessagesBox(sendMessagesBox.filter(item => item.id != id));
                array = sendMessagesBox;
            }
            else {
                setReceivedMessagesBox(receivedMessagesBox.filter(item => item.id != id));
                array = receivedMessagesBox;
            }
        }, 200)
    }
    useEffect(() => {
        setScreenWidth(window.innerWidth)

    }, [window.innerWidth])



    const messagesList = array.length ? (

        array.map((item, i) => {
            return (
                <div key={i}
                    id={i}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className={`message message${item.id}`}
                        style={{ background: item.openMessage ? 'rgba(125, 172, 211, 0.5)' : 'rgb(255, 255, 255, 0.6)' }}

                    >
                        <img src={ScrollImage}></img>

                        <div>
                            <div style={{ display: 'flex', width: "100%", }}>
                                {location.pathname == '/SendMessages' ? <h5 onClick={() => handleClickMessg(i)}>Message You Wrote</h5> : <h5 onClick={() => handleClickMessg(i)}>Message  from {item.country}</h5>}
                                <div className="read" style={{ display: item.read ? 'none' : 'block' }}></div>
                                <i className="fa fa-trash-o" aria-hidden="true" title="delete" onClick={() => handleRemoveItem(item.id)}></i>

                            </div>
                            <div className="messageDetails" onClick={() => handleClickMessg(i)}>

                                <div className="messageText">{item.messageText}</div>
                                <span className=" messageDate">{item.date}</span>

                            </div>
                        </div>
                    </div>


                </div>
            )
        }).reverse()
    ) : <div ></div>
    return (

        <div className="Messages">
            <div style={{ zIndex: 4 }}>
                <Header />
            </div>

            <div className="MessagesCont" >

                <div className="Video">
                    <Player autoPlay loop aspectRatio="2:1" src={Video} className="Video" >
                        <ControlBar autoHide={false} />
                    </Player>

                </div>

                {array.length == 0 && <div className="noMessg">No message yet!!</div>}

                <div className="MessagesBox" style={{ zIndex: 1 }} >{messagesList}</div>
                <div style={{ width: '100%', zIndex: 0 }}  >
                    <div className="selectMess"> <SelectMessages props={{ array: array, index: indexOfSelectMessage }} /> </div>
                    {screenWidth <= 990 && <Modal show={modleMessg} onHide={handleModleMessg} size='lg' className="modle">

                        <Modal.Body><SelectMessages props={{ array: array, index: indexOfSelectMessage }} /></Modal.Body>
                        <Modal.Footer dir="auto">

                            <Button className="btn btn-calendar-modal-cancel"
                                onClick={handleModleMessg}>
                                Close
                            </Button>
                        </Modal.Footer>

                    </Modal>
                    }

                </div>
            </div>


        </div>

    );
}
export default Messages;