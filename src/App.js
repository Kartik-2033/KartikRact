import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');


  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
    }
  }



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="KartikReact" home="Home" about="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container mb-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={} /> */}
            <TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert} />
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;