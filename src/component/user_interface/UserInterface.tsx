import React from "react";
import "./UserInterface.css"
import {Header} from "../header/Header";
import {VideoPlayer} from "./VideoPlayer";
import {FameCounter} from "../counter/Counter";
import {ActionList} from "../action/ActionList";

export const UserInterface = () =>
    <div className="user_interface">
        <Header/>

        <ActionList/>
        <FameCounter/>
        <VideoPlayer/>
    </div>

