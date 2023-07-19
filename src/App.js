import React from 'react';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import AddBlog from './AddBlog';

function App() {
  const title = 'Welcome to Iyere Blog';

  return (
    <div className="App">
      <Navbar  />
      <div className='content'>
        <h1>{ title }</h1>
        <Home />
        <AddBlog />
      </div>
    </div>
  );
}

export default App;
