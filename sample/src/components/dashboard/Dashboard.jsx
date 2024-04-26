import React from 'react';
import './dashboard.css';
import { useNavigate,Link } from 'react-router-dom';

const Dashboard = ({ doctorName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h1 className="welcome-text">Welcome, Dr. {doctorName}!</h1>
      <div className="button-container">
        <button className="dashboard-button"><Link to='/doctordashboard' className='dashboard'>Search By CR</Link></button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>

      </div>
    </div>
  );
};

export default Dashboard;