import React from 'react'
import './BottomNavBar.css'
import permission from '../../assets/permission.png'
import record from '../../assets/record.png'
import report from '../../assets/report.png'
import { Link } from 'react-router-dom'
const BottomNavBar = () => {
  return (
    <div className="bottom-nav">
      <Link to='/permission' href="#home" className="nav-item">
            <img src={permission} alt="" />
            <span>Permission</span>
      </Link>
      <Link to="/record" className="nav-item">
            <img src={record} alt="" />
            <span>Record</span>
      </Link>
      <Link to="/report" className="nav-item">
            <img src={report} alt="" />
            <span>Report</span>
      </Link>
    </div>
  )
}

export default BottomNavBar