import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bhavya Rana
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/bhavya-rana-6a024417b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my react app
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
