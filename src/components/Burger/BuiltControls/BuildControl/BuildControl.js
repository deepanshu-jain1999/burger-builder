import React from "react";
import classes from "./BuildControl.css";

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.level}</div>
        <button className={classes.Less}>more</button>
        <button className={classes.More}>less</button>
    </div>

);

export default buildControl;