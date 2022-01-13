import React from 'react';
import './Header.css';
const Header = ({ onButtonSubmit }) => {
    return (
        <nav className="header">
            <h3 className="name">LETS GROW MORE TASK-2</h3>
            <div className="btn-container">
                <button className="btn" onClick={onButtonSubmit}>GET USERS</button>
            </div>
            <div className="btn-container">
                <a><button className="btn" href="https://letsgrowmore.in/opportunities/">ABOUT US</button></a>
            </div>
        </nav>
    );
}

export default Header;
