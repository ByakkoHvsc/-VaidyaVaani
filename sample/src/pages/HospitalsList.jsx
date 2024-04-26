import React from "react";
import { Link } from "react-router-dom";
import { hospitals } from "../json_data/hospitalData"; 

function HospitalsList() {
  return (
    <div className="hospitals-list">
      <h1>List of Hospitals</h1>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <Link to={`/hospitals/${hospital.id}`}>
              {hospital.name} - {hospital.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HospitalsList;
