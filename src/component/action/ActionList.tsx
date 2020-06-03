import React from "react";
import "./Action.css"
import {AppContext, ActionContext, ActionResource} from "../../App";
import {readableNumber} from "../counter/Counter";

export const ActionList = () =>
    <AppContext.Consumer>
        {
            appContext => <div className="action_list">
                <Action resource={appContext.follower}
                        resourceKey={"follower"}
                        enabled={appContext.fame >= appContext.follower.cost}/>
                <Action resource={appContext.subscriber}
                        resourceKey={"subscriber"}
                        enabled={appContext.fame >= appContext.subscriber.cost}/>
                <Action resource={appContext.embedded}
                        resourceKey={"embedded"}
                        enabled={appContext.fame >= appContext.embedded.cost}/>
                <Action resource={appContext.sponsor}
                        resourceKey={"sponsor"}
                        enabled={appContext.fame >= appContext.sponsor.cost}/>
            </div>
        }
    </AppContext.Consumer>

interface ActionProps {
    resource: ActionResource
    resourceKey: string
    enabled: boolean
}

const Action = (props: ActionProps) =>
    <ActionContext.Consumer>
        {actionContext => <>
            <div className={`action_box ${props.enabled ? 'enabled' : 'disabled'}`}
                 onClick={() => props.enabled ? actionContext.addFameForAction(props.resourceKey) : null}>
                <div className="count">
                    <span>{props.resource.count}</span>
                </div>
                <div className="title">
                    <span>{props.resource.label}</span>
                </div>
                <div className="cost">
                    <span>{readableNumber(props.resource.cost)}</span>
                </div>
            </div>
        </>
        }
    </ActionContext.Consumer>