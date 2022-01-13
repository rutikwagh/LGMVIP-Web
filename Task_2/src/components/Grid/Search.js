import React from 'react';
import "./Search.css";

const Search = ({ searchChange }) => {
    return (
        <div className="search">
            <input
                className="search-btn"
                type="search"
                placeholder="Type User Name     🔍"
                onChange={searchChange} />
        </div>
    );
}

export default Search;
