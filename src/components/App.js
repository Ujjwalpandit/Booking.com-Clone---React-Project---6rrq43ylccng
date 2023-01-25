import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Login from "./Login/Login";
import Master from "./Flight/Master";
import MasterHotel from "./Hotel/MasterHotel";
import Navbar from "./Navbar/Navbar";
import Checkout from "./CheckOut/Checkout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<MasterHotel />} />
        <Route exact path='/masterFlight' element={<Master />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
