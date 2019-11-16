import React from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Navbar/>
      <SignUp/>
      <Search/>
    </div>
  );
}

export default App;
