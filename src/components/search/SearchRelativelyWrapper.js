import React from "react";
import * as s from "./searchRelativelyWrapper.css"

export const SearchRelativelyWrapper = (props) => {
    const {children} = props;
    return <div className={s.wrapper}>
        {children}
    </div>
}
