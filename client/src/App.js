import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { accessToken, logout } from './spotify';

function App() {

  const [token, setToken] = useState(null);

useEffect(() => {
  setToken(accessToken);
},[])

  return (
    <div className="App">
      <header className="App-header">
      {!token ? (
        <a
          className="App-link"
          href="http://localhost:8888/login"
        >
          Login to Spotify
        </a>
        ) : (
        <>
        <h1>Logged in!</h1>
        <button onClick={logout}>Logout</button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
