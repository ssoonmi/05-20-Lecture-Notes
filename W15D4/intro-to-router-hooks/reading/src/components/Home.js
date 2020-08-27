import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <h3>Documents</h3>
            <p><Link to="/user/1/doc/22">Document 22 by User 1</Link></p>
            <p><Link to="/user/17/doc/46">Document 46 by User 17</Link></p>
            <h3>Reports</h3>
            <p><Link to="/report/all">All</Link></p>
            <p><Link to="/report/all/advanced">All with advanced controls</Link></p>
            <p><Link to="/report/custom">Custom</Link></p>
            <p><Link to="/report/custom/advanced">Custom with advanced controls</Link></p>
            <p><Link to="/report/advanced">Show buttons</Link> (advanced controls when a button is clicked)</p>
            <p><Link to="/REPORT">Redirect to lowercase and show buttons</Link> (no advanced controls when button is clicked)</p>
        </div>
    )
}