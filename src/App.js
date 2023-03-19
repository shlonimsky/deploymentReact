import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data,setData] = useState('')
  fetch('https://deploy-node-e4sv.onrender.com/api')
  .then(res => res.json())
  .then(dataRes => setData(dataRes))
  .catch(err => console.log(err))

  return (
    <div className="App">
      <header className="App-header">
       {data}
      </header>
    </div>
  );
}

export default App;
