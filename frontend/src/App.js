import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './container/home/home';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer';
import Register from './container/register/register';
import About from './container/about/about';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<div><Navbar /><Home /><Footer/></div>} />
                    <Route path="/register" element={<div><Navbar /><Register /><Footer/></div>} />
                    <Route path="/about" element={<div><Navbar /><About /><Footer/></div>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
