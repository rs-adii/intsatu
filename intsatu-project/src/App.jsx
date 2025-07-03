import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrasi from './pages/Registrasi';
import Homepage from './pages/Homepage';
import './App.css'
import './Styles.css'
import './Homepage.css'



    
      
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registrasi />} />
         <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;