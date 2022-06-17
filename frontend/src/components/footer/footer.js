import React, { Component } from 'react';
import { FaTiktok, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export class Footer extends Component {
    render() {
        return (
            <footer className="px-8 font-roboto lg:text-left bg-bg-footer text-text-footer">
                <div className="mx-4 lg:mx-24 py-10 md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-5">
                        <div className="py-5 lg:col-span-2 lg:pr-36">
                            <img className="lg:block h-8 w-auto mb-6" src="/images/logo.svg" alt="Ocademy" />
                            <p className="font-bold">Be A Golden Generation with Ocademy!</p><br />
                            <p>Nikmati produk & layanan kami dengan mudah, aman, dan nyaman.</p>
                        </div>

                        <div className="py-5">
                            <h6 className="mb-2 font-semibold lg:mb-8 text-xl">Tentang</h6>
                            <p className="lg:mb-4 text-lg">
                                <a href="/about">Tentang Ocademy</a>
                            </p>
                            <p className="lg:mb-4 text-lg">
                                <a href="/karir">Karir</a>
                            </p>
                        </div>

                        <div className="py-5">
                            <h6 className="mb-2 font-semibold lg:mb-8 text-xl">Produk</h6>
                            <p className="lg:mb-4 text-lg">
                                <a href="/produk-KSN">Pelatihan KSN</a>
                            </p>
                            <p className="lg:mb-4 text-lg">
                                <a href="/produk-SBMPTN">Pelatihan SBMPTN</a>
                            </p>
                            <p className="lg:mb-4 text-lg">
                                <a href="/produk-OC">Ocademy Competition</a>
                            </p>
                            <p className="lg:mb-4 text-lg">
                                <a href="/produk-TPB">Pelatihan TPB</a>
                            </p>
                        </div>

                        <div className="py-5">
                            <h6 className="font-semibold mb-8 text-xl">Social Media</h6>
                            <div className="flex">
                                <div>
                                    <a href="https://www.instagram.com/ocademy.id/" className="mr-6">
                                        <FaInstagram size={30}/>
                                    </a>
                                    <a href="https://wa.me/6285159932224" className="mr-6">
                                        <FaWhatsapp size={30}/>
                                    </a>
                                </div>
                                <div className='px-10'>
                                    <a href="https://twitter.com/ocademy_id" className="mr-6">
                                        <FaTwitter size={30}/>
                                    </a>
                                    <a href="https://www.tiktok.com/@ocademy.id" className="mr-6">
                                        <FaTiktok size={30}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;