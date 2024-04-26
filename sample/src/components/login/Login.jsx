import React, { useState } from 'react';
import './login.css'; 
import { useNavigate } from 'react-router-dom'; 

const LoginForm = ({ setDoctorName }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Dr. john' && password === 'password') {
      setTimeout(() => {
        setLoggedIn(true);
        setDoctorName('John Doe'); 
        alert('Login successful!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }, 2000); 
    } else if(username === 'Dr. Watson' && password === 'passwordd'){
      setTimeout(() => {
        setLoggedIn(true);
        setDoctorName('Emily Watson'); 
        alert('Login successful!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }, 2000); 
    }
    else if(username === 'Dr. Joshi' && password === 'passwordd'){
      setTimeout(() => {
        setLoggedIn(true);
        setDoctorName('Pragati joshi'); 
        alert('Login successful!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }, 2000); 
    }
    else {
      alert('Invalid username or password. Please try again.');
    }
  };

  

  if (loggedIn) {
    return (
      <div className="login-form">
        <h2>Welcome, {username}!</h2>
      </div>
    );
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;