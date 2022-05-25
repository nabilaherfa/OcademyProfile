import React, { Component } from 'react';
import { FaTiktok, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export class Footer extends Component {
    render() {
        return (
            <footer class="px-8 font-roboto lg:text-left bg-bg-footer text-text-footer">
                <div class="mx-4 lg:mx-24 py-10 md:text-left">
                    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-5">
                        <div class="py-5 lg:col-span-2 lg:pr-36">
                            <img class="lg:block h-8 w-auto mb-6" src="/images/logo.svg" alt="Ocademy" />
                            <p class="font-bold">Be A Golden Generation with Ocademy!</p><br />
                            <p>Nikmati produk & layanan kami dengan mudah, aman, dan nyaman.</p>
                        </div>

                        <div class="py-5">
                            <h6 class="mb-2 font-semibold lg:mb-8 text-xl">Tentang</h6>
                            <p class="lg:mb-4 text-lg">
                                <a href="/about">Tentang Ocademy</a>
                            </p>
                            <p class="lg:mb-4 text-lg">
                                <a href="karir">Karir</a>
                            </p>
                        </div>

                        <div class="py-5">
                            <h6 class="mb-2 font-semibold lg:mb-8 text-xl">Produk</h6>
                            <p class="lg:mb-4 text-lg">
                                <a href="/produk-KSN">Pelatihan KSN</a>
                            </p>
                            <p class="lg:mb-4 text-lg">
                                <a href="/produk-SBMPTN">Pelatihan SBMPTN</a>
                            </p>
                        </div>

                        <div class="py-5">
                            <h6 class="font-semibold mb-8 text-xl">Social Media</h6>
                            <div class="flex">
                                <div>
                                    <a href="/" class="mr-6">
                                        <FaInstagram size={30}/>
                                    </a>
                                    <a href="/" class="mr-6">
                                        <FaWhatsapp size={30}/>
                                    </a>
                                </div>
                                <div className='px-10'>
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