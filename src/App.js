import React from 'react';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';


function App() {
  const title = 'Welcome to Iyere Blog';




  return (
    <div className="App">
      <Navbar  />
      <div className='content'>
        <h1>{ title }</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
