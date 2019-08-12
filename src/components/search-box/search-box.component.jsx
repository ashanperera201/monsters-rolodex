import React from 'react';
import "./search-box.component.css";

export const SearchBox = ({ placeholder, handleChangeEvent }) => (
    <input className="search"
        type="search"
        placeholder={placeholder}
        onChange={e => handleChangeEvent(e)}
    />
)