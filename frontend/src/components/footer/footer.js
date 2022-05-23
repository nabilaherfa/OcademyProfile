import React, { Component } from 'react';
import { FaTiktok, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export class Footer extends Component {
    render() {
        return (
            <footer class="text-center lg:text-left bg-bg-footer text-text-footer">
                <div class="mx-6 py-10 text-center md:text-left">
                    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div class="flex-shrink-0 flex items-center mb-6">
                                <div>
                                    <img class="lg:block h-8 w-auto" src="/images/Ocademy logo.svg" alt="Ocademy" />
                                </div>
                                <img class="hidden lg:block h-5 w-auto px-3" src="/images/Ocademy.svg" alt="Ocademy text" />
                            </div>
                            <p class="font-bold">Be A Golden Generation with Ocademy!</p><br />
                            <p>Nikmati produk & layanan kami dengan mudah, aman, dan nyaman.</p>
                        </div>

                        <div>
                            <h6 class="font-semibold mb-8 flex justify-center md:justify-start text-xl">Tentang</h6>
                            <p class="mb-4">
                                <a href="#!">Tentang Ocademy</a>
                            </p>
                            <p class="mb-4">
                                <a href="#!">Karir</a>
                            </p>
                        </div>

                        <div>
                            <h6 class="font-semibold mb-8 flex justify-center md:justify-start text-xl">Produk</h6>
                            <p class="mb-4">
                                <a href="#!">Pelatihan KSN</a>
                            </p>
                            <p class="mb-4">
                                <a href="#!">Pelatihan SBMPTN</a>
                            </p>
                        </div>

                        <div>
                            <h6 class="font-semibold mb-8 flex justify-center md:justify-start text-xl">Social Media</h6>
                            <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4">
                                <div>
                                    <a href="/" class="mr-6">
                                        <FaInstagram size={30}/>
                                    </a>
                                    <a href="/" class="mr-6">
                                        <FaWhatsapp size={30}/>
                                    </a>
                                </div>
                                <div>
                                    <a href="#!" class="mr-6">
                                        <FaTwitter size={30}/>
                                    </a>
                                    <a href="/" class="mr-6">
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