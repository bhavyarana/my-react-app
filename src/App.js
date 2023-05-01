import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Form from './components/Form';

function App() {
  return (
    <>
<<<<<<< HEAD
    <Navbar title="Bhavya" home="My Home"/>
    <Slider/>
    <Form heading="Enter The Text Here"/>
=======
    <Navbar title="Bhavya"/>
>>>>>>> a38efc3227149f511dc2514b2f2b978813603f67
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
