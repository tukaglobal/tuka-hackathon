import React from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Navbar/>
      <SignUp/>
      <Search/>
      <Accordion/>
    </div>
  );
}

export default App;
