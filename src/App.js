import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async function() {
    const response = await (await (fetch('.netlify/functions/helloWorld'))).json();
    setMessage(response.message);
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://docs.netlify.com/functions/overview/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Serverless
        </a>
      </header>
    </div>
  );
}

export default App;
