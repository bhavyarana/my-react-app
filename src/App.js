// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Form from './components/Form';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled" , "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled" , "success")
    }
  }
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert(
      {
        msg:message,
        typ:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtiles" home="My Home" mode={mode} toggleMode= {toggleMode}/>
    <Alert alertText={alert}/>
    <Routes>
          <Route exact path="/" element={<Form heading="Enter The Text Below" mode={mode} alertFunc={showAlert}/>}></Route>
          <Route exact path="/slider" element={<Slider />}></Route>
        </Routes>
            
          

    {/* <div className="App">
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
    </div> */}
    </Router>
    </>
  );
}

export default App;
