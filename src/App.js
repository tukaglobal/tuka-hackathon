import React from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Accordion/>
    </div>
  );
}

export default App;
