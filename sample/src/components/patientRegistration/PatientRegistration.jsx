// PatientRegistration.jsx

import React, { useState } from 'react';

const PatientRegistration = () => {
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    address: '',
  });

  const [crNumber, setCRNumber] = useState('');

  const generateCRNumber = () => {
    const randomCRNumber = Math.floor(Math.random() * 1000000);
    setCRNumber(`CR${randomCRNumber}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', patient);
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={patient.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={patient.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={patient.dob}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select name="gender" value={patient.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={patient.address}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        <button type="button" onClick={generateCRNumber}>
          Generate CR Number
        </button>
        <div>
          <label>
            CR Number:
            <input type="text" value={crNumber} readOnly />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
