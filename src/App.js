import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
// import DoctorCard from "./components/DoctorCard";
import DoctorList from "./components/DoctorList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const doctors = [
    {
      id: "1",
      name: "Dr. ABCD",
      hospital: "Bims",
      degree: "MBBS",
      address: "Jail Rd, opp. Sir T Hospital ",
      area: "Panwadi",
      city: "Bhavnagar",
      contact_no: "+91 11111 11111",
      specification: "Nurologist",
      experience: "20 years Experience",
    },
    {
      id: "2",
      name: "Dr. ABCD",
      hospital: "Bims",
      degree: "MBBS",
      address: "Kalubha Road",
      area: "Kalanala",
      city: "Bhavnagar",
      contact_no: "+91 22222 22222",
      specification: "Dentist",
      experience: "5 years Experience",
    },
    {
      id: "3",
      name: "Dr. ABCD",
      hospital: "Bims",
      degree: "MBBS",
      address: "Kalubha Road",
      area: "Kalanala",
      city: "Bhavnagar",
      contact_no: "+91 22222 22222",
      specification: "Dentist",
      experience: "5 years Experience",
    },
    {
      id: "4",
      name: "pqr",
      degree: "MBBS",
      hospital: "bims",
      address: "Kalubha Road",
      area: "Kalanala",
      city: "Bhavnagar",
      contact_no: "+91 22222 22222",
      specification: "Dentist",
      experience: "5 years Experience",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Form/> */}

        <Routes>
          <Route path="/" element={<Form />} />

          <Route path="/display" element={<DoctorList doctors={doctors} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
