import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <div className="contacts-page">
      <div className="contacts-container">
        {/* Left Section */}
        <div className="left-section">
          {/* Logo */}
          <div className="logo-container">
            <img src="/images/ramelogo.jpg" alt="Rame Store Logo" className="logo-img" />
          </div>

          {/* Box 1: Questions */}
          <div className="questions-box">
            <h2>Got questions?<br />Need help? Let’s chat!</h2>
            <ul>
              <li>. Product recommendations 🎧</li>
              <li>. Order questions 📦</li>
              <li>. General inquiries ✉️</li>
            </ul>
          </div>

          {/* Box 2: How to Reach Us */}
          <div className="contact-box">
            <h3>How to Reach Us:</h3>
            <p>📧 Email: contact@ramestore.com</p>
            <p>📞 Call : +216 29 050 348</p>
            <p>💬 DM   : Slide into our Instagram @the_ramestore</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" className="full-width-input" placeholder="Email Address" />
            <textarea placeholder="Your message ..."></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
