import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/archive.html">Archives</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;