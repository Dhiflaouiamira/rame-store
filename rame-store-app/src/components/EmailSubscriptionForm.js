import React, { useState } from 'react';
import axios from 'axios';

function EmailSubscriptionForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous message

    try {
      const response = await axios.post('http://localhost:5000/api/emails', { email });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'An error occurred');
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Subscribe for Product Notifications</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', width: '100%' }}>Subscribe</button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
}

export default EmailSubscriptionForm;
