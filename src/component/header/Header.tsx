import React from "react";
import "./Header.css"
import {AppContext} from "../../App";

export const Header = () =>
    <AppContext.Consumer>
        {(context) => <div className="header">
            <span id="title">{context.streamerName.toUpperCase()}</span>
        </div>
        }
    </AppContext.Consumer>
