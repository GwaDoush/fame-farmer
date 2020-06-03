import React from "react";
import "./VideoPlayer.css"
import {ActionContext} from "../../App";

export const VideoPlayer = () =>
    <ActionContext.Consumer>
        {
            actionState =>
                <div className="center">
                    <div className="player" onClick={() => actionState.addFame()}/>
                </div>
        }
    </ActionContext.Consumer>