import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import APropos from './components/page/aPropos/aPropos';
import Home from './components/page/home/Home';
import Projets from './components/page/projets/Projets';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="projets" element={<Projets/>} />
                <Route path="aPropos" element={<APropos/>} />
                <Route path="*" element={<Home/>} />
            </Routes>
        </Router>
    );
}

export default App;
