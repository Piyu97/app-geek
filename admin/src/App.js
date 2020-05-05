import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"
import Register from "./components/Register"
import Navbar from "./components/Navbar"

function App() {
    return (
        < BrowserRouter >
        <Navbar></Navbar>
            <Routes />
        </BrowserRouter>
    );
}

export default App;