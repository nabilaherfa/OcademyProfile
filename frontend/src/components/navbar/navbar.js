import React, { Component } from 'react';

// const vert_align = {
//     display: 'flex',
//     flexDirection: 'column'
// }
// <div id='fixed-top" style={vert_align} fixed='top'>
//     <HeaderComponent />
//     <TabComponent />
// </div>
export class Navbar extends Component {
    render() {
        return (
            <>  
                <nav class="sticky top-0 bg-white drop-shadow-xl">
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div class="relative flex items-center justify-between h-16">
                            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                    
                                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    
                                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div class="flex-shrink-0 flex items-center">
                                    <a href="/">
                                        <img class="block lg:hidden h-8 w-auto" src="/images/Ocademy logo.svg" alt="Ocademy" />
                                        <img class="hidden lg:block h-8 w-auto" src="/images/Ocademy logo.svg" alt="Ocademy" />
                                    </a>
                                    <img class="hidden lg:block h-5 w-auto px-3" src="/images/Ocademy.svg" alt="Ocademy text" />
                                </div>
                            </div>

                            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div class="hidden sm:block sm:ml-6">
                                    <div class="flex space-x-4 text-text-navbar">
                                        <a href="/" class="hover:text-oren px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Beranda</a>
                                        <a href="/" class="hover:text-oren px-3 py-2 rounded-md text-sm font-medium">Tentang Ocademy</a>
                                        <a href="/" class="hover:text-oren px-3 py-2 rounded-md text-sm font-medium">Produk</a>
                                        <a href="/" class="hover:text-oren px-3 py-2 rounded-md text-sm font-medium">Karir</a>
                                        <button type="button" class="bg-oren px-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <p class="px-2 text-white">Login/Register</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="sm:hidden" id="mobile-menu">
                        <div class="px-2 pt-2 pb-3 space-y-1 text-text-navbar">
                            <a href="/" class="hover:text-oren block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Beranda</a>
                            <a href="/" class="hover:text-oren block px-3 py-2 rounded-md text-base font-medium">Tentang Ocademy</a>
                            <a href="/" class="hover:text-oren block px-3 py-2 rounded-md text-base font-medium">Produk</a>
                            <a href="/" class="hover:text-oren block px-3 py-2 rounded-md text-base font-medium">Karir</a>
                            <button type="button" class="w-full bg-oren rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <p class="px-2 text-white">Login/Register</p>
                            </button>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;