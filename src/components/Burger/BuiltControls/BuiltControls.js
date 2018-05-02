import React from "react";
import classes from "./BuiltControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {level:"Cheese", type:"cheese"},
    {level:"Salad", type:"salad"},
    {level:"Bacon", type:"bacon"},
    {level:"Meat", type:"meat"},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {
            controls.map(ctrl => (
                <BuildControl key={ctrl.level} label={ctrl.level}/>
            ))
        }

    </div>
);

export default buildControls


