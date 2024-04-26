import React, { useState } from "react";
import { Link } from "react-router-dom";
import { hospitals } from "../json_data/hospitalData";
import "./home.css";
import bgImg from '../assets/img_bg.jpeg'

const Home = () => {
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
    <div className="Home">
      <div className="top">
      <img src={bgImg} className="bg_Img" alt="" />
        <h1>Vaidya Vaani</h1>

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
};

export default Home;
