import React, { useState } from 'react';
import CommandInterface from './components/CommandInterface';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const login = () => {
    if (password === "admin123") setAuthenticated(true);
    else alert("Wrong password");
  };

  if (!authenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 bg-white rounded shadow w-80">
          <h2 className="text-xl mb-4 font-semibold">Admin Login</h2>
          <input
            type="password"
            className="border w-full p-2 mb-4 rounded"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} className="bg-black text-white w-full py-2 rounded">
            Login
          </button>
        </div>
      </div>
    );
  }

  return <CommandInterface />;
}

export default App;