import React from 'react';

import ToggleButton from '../toggle/ToggleButton';
import './Nav.css';



class NavBar extends React.Component {

    render() {
    return(
        <header className="navbar">
            <nav className="navbar__nav">
                <div className="navbar__button">
                    <ToggleButton click={this.props.slideClickHandler}/>
                </div>
                <div className="navbar__logo">
                    <h2 title="To the top">EMILY BRYAN</h2>
                </div>
                <div className="spacer" />
                    <div className="navbar_items">
                        <ul>
                            <li>
                                <a href="https://www.georgeallisontech.com" target="_blank" rel="noopener noreferrer" title="nowhere yet">Home</a>
                            </li>
                            <li>
                                <a href="https://www.georgeallisontech.com" target="_blank" rel="noopener noreferrer" title="nowhere yet">Services</a> 
                            </li>
                            <li>
                                <a href="https://www.georgeallisontech.com" target="_blank" rel="noopener noreferrer" title="nowhere yet">Contact</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </header>
    )
    }
}

export default NavBar;