import React from 'react';
import './Sidebar.css';
import { FaHome, FaUser, FaCalendar, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Board.</h2>
      <ul>
        <li><FaHome /> Dashboard</li>
        <li><FaUser /> Users</li>
        <li><FaCalendar /> Schedules</li>
        <li><FaCog /> Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
