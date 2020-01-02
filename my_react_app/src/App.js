import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import MenuFunctionalComponent from './components/MenuFunctionalComponent'
import Biodata from './components/Biodata'

const data=[{
  name:"Achyuthapreksha",
  place: "Doddaballapur"
}];

class App extends ClassComponent{
  render(){
    return (
      <div className="App">
      <Biodata data={data}></Biodata>
      </div>
    );
  }
}

export default App;
