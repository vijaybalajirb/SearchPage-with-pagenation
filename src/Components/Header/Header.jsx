import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from '../../../src/assets/mainlogo.png';

// Header component representing the main header of the application
const Header = () => {
    // Component logic (currently empty in this example)

    // Render the main header containing the logo
    return (
        <div className="main-header">
            {/* Display the logo image */}
            <img className="main-logo" src={logo} alt="Tagalys" />
        </div>
    );
}

export default Header;
