import React from "react";
import "./Counter.css"
import {AppContext} from "../../App";

const suffix = ["", "million", "billion", "trillion",
    "quadrillion", "quintillion", "sextillion",
    "septllion", "octillion", "nonillion",
    "decillion"]

export const readableNumber = (notReadableNumber: number): string => {
    let index = 0
    let x = notReadableNumber
    if (x < 1000000)  return `${Math.floor(x)} ${suffix[index]}`
    x = notReadableNumber / 1000000
    index += 1
    while (x >= 1000) {
        x = x / 1000
        index += 1
    }
    return `${parseFloat(x.toFixed(3))} ${suffix[index]}`
}

export const FameCounter = () =>
    <AppContext.Consumer>
        {context => {
            return <div className="counter">
                <p>{readableNumber(context.fame)} Fame</p>
                <p id="f_per_second">{readableNumber(context.famePerSecond)} per second</p>
            </div>
        }

        }
    </AppContext.Consumer>