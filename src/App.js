import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerInputs from './Components/CustomerInputs';



function App() {

  const [estimates, setEstimates] = useState([])
  
  function StartNewEstimate(obj) {
    obj.areas = []
    setEstimates([...estimates, obj])
  }

  useEffect(() => {
    console.log(estimates)
  }, [estimates])


  return (
    <div className="App">
      <header className="App-header">
        <CustomerInputs
        StartNewEstimate={StartNewEstimate}
        />
      </header>
    </div>
  );
}

export default App;
