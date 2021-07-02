import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [otherMessage, setOtherMessage] = useState("");

  const fetchData = async function() {
    const response = await (await (fetch('.netlify/functions/helloWorld'))).json();
    setMessage(response.message);
  };

  const fetchOtherData = async function() {
    const response = await (await (fetch('.netlify/functions/getGood'))).json();
    console.log(response.message)
    setOtherMessage(response.message);
  }

  useEffect(() => {
    fetchData()
    fetchOtherData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <p>
          {otherMessage}
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
