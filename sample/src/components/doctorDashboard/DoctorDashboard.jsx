// DoctorDashboard.jsx

import React, { useState } from 'react';

const DoctorDashboard = () => {
  const [crNumber, setCRNumber] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);
  const [notes, setNotes] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleSearch = () => {
    setPatientDetails({
      firstName: 'Kadambadi',
      lastName: 'Doe',
      dob: '1990-01-01',
      gender: 'Male',
      address: '123 Main St',
      crNumber: 'CR123456',
    });
  };

  const handleAddNote = () => {
    console.log('Added note:', notes);
  };

  const handlePrescribe = () => {
    // Logic to write prescriptions
    console.log('Prescription:', prescription);
  };

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <div>
        <label>
          Search Patient by CR Number:
          <input
            type="text"
            value={crNumber}
            onChange={(e) => setCRNumber(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>

      {patientDetails && (
        <div>
          <h3>Patient Details</h3>
          <p>Name: {`${patientDetails.firstName} ${patientDetails.lastName}`}</p>
          <p>Date of Birth: {patientDetails.dob}</p>
          <p>Gender: {patientDetails.gender}</p>
          <p>Address: {patientDetails.address}</p>
          <p>CR Number: {patientDetails.crNumber}</p>

          <div>
            <h4>Add Note to Medical History</h4>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
            <button onClick={handleAddNote}>Add Note</button>
          </div>

          <div>
            <h4>Prescribe Medication</h4>
            <textarea
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
            ></textarea>
            <button onClick={handlePrescribe}>Prescribe</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
