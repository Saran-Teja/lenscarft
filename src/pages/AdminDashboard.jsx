import React, { useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async () => {
    try {
      setStatus('Sending...');
      const res = await axios.post('/api/update-content', { prompt });
      setStatus(res.data.message || 'Update triggered');
    } catch (err) {
      setStatus('Error: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <textarea
        className="w-full border rounded p-2 mb-4"
        rows="5"
        placeholder="Type your command here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
        Send to AI
      </button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}