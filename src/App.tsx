import React from 'react';
import './App.css';
import Header from './components/header/Header/Header';
import Nav from './components/header/Nav/Nav';

function App() {
    const nav = <Nav namesOfLinks={["acceuil", "projets"]}/>
    return (
        <div className="App">
          <Header nav={nav}/>
        </div>
    );
}

export default App;
