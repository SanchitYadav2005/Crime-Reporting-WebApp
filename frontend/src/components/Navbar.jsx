import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneIcon } from "@heroicons/24/outline";


function Navbar() {
  return (
    <nav>
        <div>Alertify</div>
        <ul>
            <li>Report</li>
            <li>Contact</li>
            <li>ALL Reports</li>
        </ul>
        <div>
            <Link to="login">login</Link>
            <PhoneIcon/>
        </div>
    </nav>
  )
}

export default Navbar