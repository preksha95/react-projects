import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import MenuFunctionalComponent from './components/MenuFunctionalComponent'
import Biodata from './components/Biodata'

function App() {
  const data=[{
    name:"Achyuthapreksha",
    place: "Doddaballapur"
  }];

  return (
    <div className="App">
    <Biodata info={data}></Biodata>
    </div>
  );
}

export default App;
