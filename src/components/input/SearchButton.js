import React from "react";
import * as s from "./searchButton.css"

export const SearchButton = (props) => {
    return <button aria-label="Search" className={s.button} {...props} />
}
