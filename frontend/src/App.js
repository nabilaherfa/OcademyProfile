import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './container/home/home';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer';
import Register from './container/register/register';
import About from './container/about/about';
import Karir from './container/karir/karir';
import ProdukSBMPTN from './container/produk/produkSBMPTN';
import ProdukKSN from './container/produk/produkKSN';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<div><Navbar /><Home /><Footer/></div>} />
                    <Route path="/register" element={<div><Navbar /><Register /><Footer/></div>} />
                    <Route path="/about" element={<div><Navbar /><About /><Footer/></div>} />
                    <Route path="/karir" element={<div><Navbar /><Karir /><Footer/></div>} />
                    <Route path="/produk/sbmptn" element={<div><Navbar /><ProdukSBMPTN /><Footer/></div>} />
                    <Route path="/produk/ksn" element={<div><Navbar /><ProdukKSN /><Footer/></div>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
