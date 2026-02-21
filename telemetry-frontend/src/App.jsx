import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [driverName, setDriverName] = useState('');
  const [message, setMessage] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://webprog-it242-nest-js-tumaliwan.vercel.app/api/pitwall');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!driverName || !message) return;

    try {
      // CRITICAL FIX: This must be a POST request, and it must include the data payload!
      await axios.post('https://webprog-it242-nest-js-tumaliwan.vercel.app/api/pitwall', { driverName, message });
      setDriverName('');
      setMessage('');
      fetchMessages(); // Refresh the board
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <div className="telemetry-container">
      <header className="telemetry-header">
        <h1>LIVE PIT WALL FEED</h1>
        <div className="status-indicator">
          <span className="dot blinking"></span> SYSTEM ONLINE
        </div>
      </header>

      <form onSubmit={handleSubmit} className="transmit-form">
        <input
          type="text"
          placeholder="DRIVER ID / NAME"
          value={driverName}
          onChange={(e) => setDriverName(e.target.value)}
          className="telemetry-input"
        />
        <textarea
          placeholder="TRANSMIT MESSAGE TO PIT CREW..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="telemetry-input"
          rows="3"
        />
        <button type="submit" className="transmit-btn">SEND TRANSMISSION</button>
      </form>

      <div className="feed-container">
        {messages.map((msg) => (
          <div key={msg.id} className="feed-card">
            <div className="card-header">
              <span className="driver-name">{msg.driver_name}</span>
              <span className="timestamp">
                {new Date(msg.created_at).toLocaleTimeString()}
              </span>
            </div>
            <p className="card-message">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;