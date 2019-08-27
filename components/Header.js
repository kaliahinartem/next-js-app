import React, { Component } from 'react';
import './Header.css';
import Link from 'next/link'

class Header extends Component{
    render() {
        return (
            <div className="Header">
                <Link href='/terms'>Test1</Link>
                <a href='#'>Test2</a>
                <a href='#'>Test3</a>
            </div>
        )
    }
}

export default Header;