import React, { Component } from 'react';

const background1={
    backgroundImage: 
    "url('/images/karir52.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

export class Karir extends Component {
    render() {
        return (
            <>  
                <div className="bg-background">
                    <div className="relative overflow-hidden">
                        <img src="/images/karir1.svg" alt="karir1" className="object-cover w-full h-full"/>
                        <h1 className="font-open-sans text-lg py-6 lg:text-4xl text-center absolute w-full lg:py-16 bottom-0 text-white font-bold">Bergabung dengan Ocademy Team</h1>
                        <p className="font-roboto text-xs py-2 lg:text-2xl text-center absolute w-full lg:py-4 bottom-0 text-white">Bergabunglah dan majukan pendidikan Indonesia dengan teknologi!</p>
                    </div>
                    
                    <div className="p-10">
                        <h1 className="text-center text-oren1 font-bold font-open-sans pb-2 lg:pb-8 text-4xl">Available Jobs</h1>
                        <div className="grid grid-1 lg:grid-cols-3 lg:mx-32">
                            <div className="bg-white rounded-lg mx-8 drop-shadow-xl pb-8 m-4">
                                <img src="/images/karir-sec2-1.svg" alt="karir-sec2-1" className='mx-auto'/>
                                <h2 className="text-xl font-bold font-open-sans text-center leading-3"><br />Video Editor</h2><br />
                                <ul className="list-disc font-roboto px-8">
                                    <li>Minimal SMA/SMK</li>
                                    <li>Mahir menggunakan Adobe Premier PRO</li>
                                    <li>Mampu bekerja dalam tim</li>
                                    <li>Dapat berpikir kreatif</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-lg mx-8 drop-shadow-xl pb-8 m-4">
                                <img src="/images/karir-sec2-2.svg" alt="karir-sec2-2" className='mx-auto'/>
                                <h2 className="text-xl font-bold font-open-sans text-center leading-3"><br />Web Admin</h2><br />
                                <ul className="list-disc font-roboto px-8">
                                    <li>Mahasiswa aktif</li>
                                    <li>Berasal dari jurusan IT</li>
                                    <li>Mengerti sistem aplikasi web e-learning</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-lg mx-8 drop-shadow-xl pb-8 m-4">
                                <img src="/images/karir-sec2-3.svg" alt="karir-sec2-3" className='mx-auto'/>
                                <h2 className="text-xl font-bold font-open-sans text-center leading-3"><br />Social Media</h2><br />
                                <ul className="list-disc font-roboto px-8">
                                    <li>Mahasiswa aktif</li>
                                    <li>Mengerti copy writing</li>
                                    <li>Aktif di sosial media (ig, twitter, tiktok)</li>
                                    <li>Mengikuti dan mengerti tren</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-10">
                        <h1 className="text-center text-4xl text-oren1 font-bold font-open-sans pb-8">Benefit</h1>
                        <div className="grid grid-cols-2 lg:flex lg:justify-center">
                            <div><img src="/images/karir41.svg" alt="karir11" className="mx-auto" /></div>
                            <div><img src="/images/karir42.svg" alt="karir11" className="mx-auto" /></div>
                            <div><img src="/images/karir43.svg" alt="karir11" className="mx-auto" /></div>
                            <div><img src="/images/karir44.svg" alt="karir11" className="mx-auto" /></div>
                            <div><img src="/images/karir45.svg" alt="karir11" className="mx-auto" /></div>
                        </div>
                    </div>

                    <div className="p-10" style={background1}>
                        <div className="lg:flex lg:justify-center">
                            <div><img src="/images/karir51.svg" alt="karir51" className="mx-auto py-16"/></div>
                            <div className="lg:py-36 lg:px-16">
                                <h1 className="text-4xl text-oren1 font-bold font-open-sans py-4">Apply Now</h1>
                                <p class="text-xl font-roboto">Kirim CV dan Portofolio kamu ke <span class="font-bold">ocademyofficial@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Karir;