import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo3.png";
import "./navbar.css";

const Navbar = () => {
  const [mailId, setMailId] = useState("");

  useEffect(() => {
    setMailId(localStorage.getItem("email"));
  }, []);

  return (
    <nav className='navbar'>
      <div className='container'>
        <a className='navbar' href='/'>
          <img src={logo} alt='logo' width='200' height='80' className='logo' />
        </a>
        <div className='navLinks'>
          <ul>
            <li>
              <Link to='/'>
                <button type='button' className='btn btn-outline-danger btn1'>
                  Stays
                </button>
              </Link>
            </li>
            <li>
              <Link to='/masterFlight'>
                <button type='button' className='btn btn-outline-danger btn1'>
                  Flights
                </button>
              </Link>
            </li>
            <li>
              <div className='dropdown ms-2'>
                <button
                  className='btn btn-primary dropdown-toggle btn2'
                  type='button'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Login
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <li>
                    <a className='dropdown-item' href='.'>
                      {mailId}
                    </a>
                  </li>
                  <Link to='/login'>
                    <li>
                      <a
                        className='dropdown-item'
                        href='.'
                        onClick={() => setMailId("User")}
                      >
                        Logout
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;