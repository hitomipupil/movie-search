import PropTypes from "prop-types";

import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({inputHandler}) => {
    const [value, setValue] = useState("");

    const changeHandler = (e) => {
        const val = e.target.value.toLowerCase();
        setValue(val);
        // want to use value at App
        inputHandler(val);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                value={value}
                placeholder="🔍"
                onChange={(e) => changeHandler(e)}
            />
        </div>
    );
};

SearchBar.propTypes = {
    inputHandler: PropTypes.func.isRequired
};

export default SearchBar;
