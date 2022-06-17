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
import ProdukOC from './container/produk/produkOC';
import ProdukTPB from './container/produk/produkTPB';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/karir" element={<Karir />} />
                    <Route path="/produk-SBMPTN" element={<ProdukSBMPTN />} />
                    <Route path="/produk-KSN" element={<ProdukKSN />} />
                    <Route path="/produk-OC" element={<ProdukOC />} />
                    <Route path="/produk-TPB" element={<ProdukTPB />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
