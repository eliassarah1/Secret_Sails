import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useBetween } from "use-between";
import './selectMessage.css'

//  when user click to read any message

const SelectMessages = (props) => {
   
    var data = props.props;
    const location = useLocation();

    useEffect(() => {
        data.index = data.array.length - 1
    }, [])
   
    if (data.array.length!=0) {
       
        return (

            <div className="SelectMessages" >
             

                <h3>Message {location.pathname == '/SendMessages' ? "to" : "from"} {data.array[data.index].country} </h3>

                <div className="details messageTextSelect">{data.array[data.index].messageText}</div>

                <div className=" details date"> {data.array[data.index].date} </div>

            </div>

        );
    }
}

export default SelectMessages;