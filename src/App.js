import React from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <Cards name="Jennifer"/>
      <Cards name="Benn"/>
      <Cards name="Sopee"/>
      <Cards name="Hannah"/>
      <Cards name="Matt"/>
      <Cards name="Liz"/>
    </div>
  );
}

export default App;
