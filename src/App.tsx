import React, {Component, useEffect, useState} from 'react';
import './App.css';
import {UserInterface} from "./component/user_interface/UserInterface";


const SAVE_KEY = 'new_state_6';

export interface ActionResource {
    label: string;
    count: number;
    cost: number;
    coefficient: number;
    baseReward: number;
}

const nextActionResource = (actionResource: ActionResource) => ({
    ...actionResource,
    cost: Math.ceil(actionResource.cost * actionResource.coefficient),
    count: actionResource.count + 1
})

export interface ActionState {
    save: NodeJS.Timeout
    addFamePerSec: NodeJS.Timeout
    addFame: () => void
    addFameForAction: (resourceName: string) => void
}

export interface AppState {
    streamerName: string
    fame: number
    famePerSecond: number
    subscriber: ActionResource
    follower: ActionResource
    embedded: ActionResource
    sponsor: ActionResource
    [key: string]: any
}

const initialAppState: AppState = {
    fame: 0,
    famePerSecond: 0,
    streamerName: 'GwaDoush',
    follower: {coefficient: 1.2, cost: 15, count: 0, baseReward: 0.1, label: "Follower"},
    subscriber: {coefficient: 1.15, cost: 100, count: 0, baseReward: 1, label: "Subscriber"},
    embedded: {coefficient: 1.15, cost: 1100, count: 0, baseReward: 8, label: "Embedded"},
    sponsor: {coefficient: 1.15, cost: 12000, count: 0, baseReward: 47, label: "Sponsor"}
}

const initialActionState: ActionState = {
    save: setInterval(() => {
    }, 0),
    addFamePerSec: setInterval(() => {
    }, 1000),
    addFameForAction(resourceName: string): void {
    },
    addFame: () => {
    }
}

const loadState = () => {
    const localStorageState = localStorage.getItem(SAVE_KEY)
    if (!localStorageState) localStorage.clear()
    return localStorageState ? {...JSON.parse(localStorageState)} : initialAppState
}

export const AppContext = React.createContext<AppState>(initialAppState)
export const ActionContext = React.createContext<ActionState>(initialActionState)

class App extends Component<any, AppState> {

    state = loadState()

    action = {
        save: setInterval(() => {
            localStorage.setItem(SAVE_KEY, JSON.stringify(this.state));
        }, 1000),
        addFamePerSec: setInterval(() => {
            this.setState({...this.state, fame: this.state.fame + this.state.famePerSecond / 10})
        }, 100),
        addFame: () => {
            this.setState({...this.state, fame: this.state.fame + 1})
        },
        addFameForAction: (resourceKey: string) => {
            let newState: AppState = {
                ...this.state,
                fame: this.state.fame - this.state[resourceKey].cost,
                famePerSecond: this.state.famePerSecond + this.state[resourceKey].baseReward,
            }
            newState[resourceKey] = nextActionResource(this.state[resourceKey])
            this.setState({...newState})
        },
    }

    render = () => <div className="App">
        <ActionContext.Provider value={this.action}>
            <AppContext.Provider value={this.state}>
                <UserInterface/>
            </AppContext.Provider>
        </ActionContext.Provider>
    </div>
}

export default App;
