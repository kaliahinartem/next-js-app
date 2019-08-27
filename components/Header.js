import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render() {
        return (
            <div className="Header">
                <a href='#'>Test1</a>
                <a href='#'>Test2</a>
                <a href='#'>Test3</a>
            </div>
        )
    }
}

export default Header;