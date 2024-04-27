import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Contact from "./pages/Contact.jsx";
import Hospitals from "./pages/Hospitals.jsx";
import HospitalsList from "./pages/HospitalsList.jsx";
import PatientRegistration from "./components/patientRegistration/PatientRegistration.jsx";
import DoctorDashboard from "./components/doctorDashboard/DoctorDashboard.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import SecureCommunication from "./components/SecureCommunication.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase.js";
import './App.css';
import SignupPage from "./pages/Signup.jsx";
import SigninPage from "./pages/Signin.jsx";
const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "jaishreekampoowale2@gmail.com",
      "Jaishree1@"
    ).then((value) => console.log(value));


  };
  return (
    <div className="App">
       <div>
    </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/hospitals" element={<HospitalsList />} />
          <Route path="/hospitals/:id" element={<Hospitals />} />
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/chat" element={<SecureCommunication />} />

        </Routes>
        {/* <SignupPage /> */}
        {/* <SigninPage /> */}
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
