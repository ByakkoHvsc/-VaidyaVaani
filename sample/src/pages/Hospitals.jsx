import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sampleData } from "../json_data/hospitalData"; 
import { Link } from "react-router-dom";

function Hospitals() {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const response = await new Promise(resolve =>
          setTimeout(() => {
            resolve(sampleData[id]);
          }, 500)
        );

        if (response) {
          setHospital(response);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching hospital data:", error);
        setLoading(false);
      }
    };

    fetchHospitalData();
  }, [id]);

  if (loading) {
    return <div>Loading hospital details...</div>;
  }

  if (!hospital) {
    return <div>No hospital found for the given ID.</div>;
  }

  return (
    <div className="hospital-detail" style={{marginTop: '50px'}}>
      <h1>{hospital.name}</h1>
      <p>
        <strong>Location:</strong> {hospital.location}
      </p>
      <p>
        <strong>Services:</strong> {hospital.services.join(", ")}
      </p>
      <p>
        <strong>Contact:</strong> {hospital.contact}
      </p>

      
      <Link to={'/register'} style={{ color : "#fff",backgroundColor : "#000", padding: "10px", margin: "10px"}}>  New Patient</Link>
    </div>
  );
}

export default Hospitals;
