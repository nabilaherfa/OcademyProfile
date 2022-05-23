import React, { Component } from 'react';

const background1={
    backgroundImage: 
    "url('/images/karir52.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

export class Karir extends Component {
    render() {
        return (
            <>  
                <div class="bg-background">
                    <div class="relative overflow-hidden">
                        <img src="/images/karir1.svg" alt="karir1" class="object-cover w-full h-full"/>
                        <h1 class="text-lg py-6 lg:text-4xl text-center absolute w-full lg:py-16 bottom-0 text-white font-bold">Bergabung dengan Ocademy Team</h1>
                        <p class="text-xs py-2 lg:text-xl text-center absolute w-full lg:py-4 bottom-0 text-white">Bergabunglah dan majukan pendidikan Indonesia dengan teknologi!</p>
                    </div>
                    <div class="p-10">
                        <h1 class="text-center text-4xl text-oren1 font-bold pb-8">Available Jobs</h1>
                        <div class="grid grid-1 lg:grid-cols-3">
                            <div class="bg-white rounded-lg mx-16 p-12 leading-8 drop-shadow-xl">
                                <img src="/images/karir11.svg" alt="karir11" class="mx-auto" />
                                <h2 class="text-xl font-bold text-center"><br />Video Editor</h2><br />
                                <ul class="list-disc">
                                    <li>Minimal SMA/SMK</li>
                                    <li>Mahir menggunakan Adobe Premier PRO</li>
                                    <li>Mampu bekerja dalam tim</li>
                                    <li>Dapat berpikir kreatif</li>
                                </ul>
                            </div>
                            <div class="bg-white rounded-lg mx-16 p-12 leading-8 drop-shadow-xl">
                                <img src="/images/karir11.svg" alt="karir11" class="mx-auto" />
                                <h2 class="text-xl font-bold text-center"><br />Web Admin</h2><br />
                                <ul class="list-disc">
                                    <li>Mahasiswa aktif</li>
                                    <li>Berasal dari jurusan IT</li>
                                    <li>Mengerti sistem aplikasi web e-learning</li>
                                </ul>
                            </div>
                            <div class="bg-white rounded-lg mx-16 p-12 leading-8 drop-shadow-xl">
                                <img src="/images/karir11.svg" alt="karir11" class="mx-auto" />
                                <h2 class="text-xl font-bold text-center"><br />Social Media</h2><br />
                                <ul class="list-disc">
                                    <li>Mahasiswa aktif</li>
                                    <li>Mengerti copy writing</li>
                                    <li>Aktif di sosial media (ig, twitter, tiktok)</li>
                                    <li>Mengikuti dan mengerti tren</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="p-10">
                        <h1 class="text-center text-4xl text-oren1 font-bold pb-8">Benefit</h1>
                        <div class="grid grid-1 lg:grid-cols-5">
                            <img src="/images/karir41.svg" alt="karir11" class="mx-auto" />
                            <img src="/images/karir42.svg" alt="karir11" class="mx-auto" />
                            <img src="/images/karir43.svg" alt="karir11" class="mx-auto" />
                            <img src="/images/karir44.svg" alt="karir11" class="mx-auto" />
                            <img src="/images/karir45.svg" alt="karir11" class="mx-auto" />
                        </div>
                    </div>
                    <div class="p-10" style={background1}>
                        <div class="grid grid-1 lg:grid-cols-2">
                            <div>
                                <img src="/images/karir51.svg" alt="karir51" class="mx-auto py-16"/>
                            </div>
                            <div class="bottom-0 py-44">
                                <h1 class="text-4xl text-oren1 font-bold">Apply Now</h1>
                                <p class="text-xl">Kirim CV dan Portofolio kamu ke <span class="font-bold">ocademyofficial@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Karir;