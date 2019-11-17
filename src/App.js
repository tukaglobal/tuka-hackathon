import React from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <SignUp/>
    </div>
  );
}

export default App;
