import React, { useState } from 'react';
import axios from 'axios';

export default function CommandInterface() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  const sendCommand = async () => {
    setResponse("Generating...");
    try {
      const res = await axios.post("https://api.openai.com/v1/completions", {
        model: "text-davinci-003",
        prompt: command,
        max_tokens: 200
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.REACT_APP_OPENAI_API_KEY
        }
      });
      setResponse(res.data.choices[0].text.trim());
    } catch (error) {
      setResponse("Error: " + error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">LensCraft Admin Dashboard</h1>
      <textarea
        className="w-full p-3 border rounded mb-2"
        rows={4}
        placeholder="Enter command..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
      <button onClick={sendCommand} className="bg-black text-white px-4 py-2 rounded">
        Run Command
      </button>
      <div className="mt-4 p-4 bg-white border rounded shadow-sm">
        <strong>Response:</strong>
        <pre className="whitespace-pre-wrap mt-2">{response}</pre>
      </div>
    </div>
  );
}