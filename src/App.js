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
      <Search suggestions={[
        "alternative_pop",
        "alternative_rock",
        "blues",
        "brazillian",
        "classic_pop",
        "classic_rock",
        "classical",
        "country",
        "dance",
        "electronic",
        "folk",
        "gospel",
        "hiphop",
        "jazz",
        "latin",
        "metal",
        "modern_pop",
        "pop_rock",
        "reggae",
        "rnb",
        "spoken"
      ]}
      />
    </div>
  );
}

export default App;
