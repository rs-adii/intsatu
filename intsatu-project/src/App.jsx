import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrasi from './pages/Registrasi';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import './App.css'
import './Homepage.css'



    
      
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Registrasi" element={<Registrasi />} />
         <Route path="/Homepage" element={<Homepage />} />
         <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;