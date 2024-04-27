import React, { useState } from "react";
import { Link } from "react-router-dom";
import { hospitals } from "../json_data/hospitalData"; 

function HospitalsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = hospitals.filter(
      (hospital) =>
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };
  return (
    <div className="hospitals-list">
      <div className="Home">

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search hospitals by name or location..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Hospital List */}
      <ul>
        {filteredHospitals.map((hospital) => (
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
