import React from 'react'
import { Link } from "react-router-dom";


function Menu() {
    return (<ul>
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link to='/faq'>faq </Link></li>
        <li><Link to='/aboutUs'>About US </Link></li>
        <li><Link to='/contactUs'>Contact US </Link></li>
    </ul>)
}

export default Menu

