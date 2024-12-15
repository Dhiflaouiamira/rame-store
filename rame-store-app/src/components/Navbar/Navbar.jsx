import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">Gear</Link></li>
            <li><Link to="#">Records</Link></li>
            <li><Link to="#">Merch</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li><Link to="/contacts">Contacts</Link></li> {/* Link to Contacts */}
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">FAQ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
