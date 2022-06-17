import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const background1={
    backgroundImage: 
    "url('/images/home-sec3-1.svg')",
    backgroundRepeat: 'yes',
    backgroundSize: 'cover',
};

const background2={
    backgroundImage: 
    "url('/images/home-sec3-3.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background3={
    backgroundImage: 
    "url('/images/home-sec3-4.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background4={
    backgroundImage: 
    "url('/images/home-sec5-1.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background5={
    backgroundImage: 
    "url('/images/home-sec2-1.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

const background6={
    backgroundImage: 
    "url('/images/home-sec2-3.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

const background7={
    backgroundImage: 
    "url('/images/home-sec2-5.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};


export class Home extends Component {
    render() {
        return (
            <>
                <div className='bg-background'>
                    <div className="w-auto p-3 lg:p-10 ">
                        <Carousel showThumbs={false} showStatus={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                            <div className='text-white'>
                                <img src='/images/home-slides2.svg' alt='home-slides2' title='home-slides2' className="object-cover w-full h-full"/>
                                <div className="flex justify-start">
                                    <div className="p-5 text-left ">
                                        <h1 className="w-1/2 py-2 md:py-8 lg:py-16 text-lg md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-0">Pelatihan SBMPTN</h1>
                                        <p className="md:w-1/2 lg:w-1/2 py-8 md:py-16 lg:py-32 pr-8 text-xs md:text-lg lg:text-2xl font-roboto absolute top-0 py-6">Dapatkan All in One pelatihan menghadapi SBMPTN yang lengkap, murah, dan full online. Kamu bisa dapatkan Try Out CBT, Quiz CBT, Rangkuman, Pembahasan Try Out, Rasionalisasi UTBK, dan Virtual Live Teaching!   </p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                <button type="button" className="drop-shadow-2xl absolute bottom-12 bg-oren3 rounded-lg hover:bg-yellow-700 mx-8 md:my-3 lg:my-4">
                                        <Link to="/produk-SBMPTN">
                                            <p className="text-xs md:text-lg lg:text-lg px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 font-roboto">Lihat Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='text-white'>
                                <img src='/images/home-slides1.svg' alt='home-slides1' title='home-slides1' className="object-cover w-full h-full"/>
                                <div className="flex md:justify-center lg:justify-center">
                                    <div className="p-5 text-left ">
                                        <h1 className="py-2 md:py-8 lg:py-16 text-lg md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-0">Pelatihan KSN</h1>
                                        <p className="py-8 md:py-16 lg:py-32 pr-8 md:pr-16 lg:pr-24 text-xs md:text-lg lg:text-2xl font-roboto absolute top-0">Dapatkan All in One pelatihan menghadapi Kompetisi Sains Nasional yang lengkap, murah, dan full online. Kamu bisa dapatkan Try Out CBT, Pembahasan Try Out, Rangkuman, Perangkingan Nasional, Virtual Live Teaching, dan Sertifikat!  </p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <button type="button" className="drop-shadow-2xl absolute bottom-12 bg-oren3 rounded-lg hover:bg-yellow-700 mx-8 md:my-3 lg:my-4">
                                        <Link to="/produk-KSN">
                                            <p className="text-xs md:text-lg lg:text-lg px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 font-roboto">Lihat Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='text-white'>
                                <img src='/images/home-slides3.svg' alt='home-slides3' title='home-slides3' className="object-cover w-full h-full"/>
                                <div className="flex justify-start">
                                    <div className="p-5 text-left ">
                                        <h1 className="w-1/2 py-2 md:py-8 lg:py-16 text-lg md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-0">Tutor TPB</h1>
                                        <p className="md:w-1/2 lg:w-1/2 py-8 md:py-16 lg:py-32 pr-8 text-xs md:text-lg lg:text-2xl font-roboto absolute top-0 py-6">Ocademy juga membuka kursus bagi mahasiswa TPB(Tahap Persiapan Bersama) ITB loh! Kursus dibuka untuk mata kuliah Kalkulus, Fisika, Kimia, dan Pengenalan Komputasi. Tutor nya merupakan mahasiswa tingkat atas ITB yang kece-kece! </p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                <button type="button" className="drop-shadow-2xl absolute bottom-12 bg-oren3 rounded-lg hover:bg-yellow-700 mx-8 md:my-3 lg:my-4">
                                        <Link to="/produk-TPB">
                                            <p className="text-xs md:text-lg lg:text-lg px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 font-roboto">Lihat Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </Carousel>
                    </div>

                    <div className="w-auto p-3 lg:p-10 ">
                        <div style={background5} className="p-9 py-12 flex md:justify-start lg:justify-start md:pr-40 lg:pr-48">
                            <img src="/images/home-sec2-2.svg" alt="sec2-1" className='w-1/3 mx-auto'/>
                            <div className='my-auto md:mx-10 lg:mx-12 text-white'>
                                <h1 className="text-sm md:text-xl lg:text-2xl font-bold font-open-sans">Ngerasa bingung gimana mulai mempersiapkan belajar buat KSN?</h1>
                                <p className="text-xs py-4 md:text-base lg:text-xl font-roboto">Pernah gak sih kamu udah niat mau ikut Kompetisi Sains Nasional, tapi bingung mau mulai belajar darimana, ga ngerti sama materi-materi KSN, ga sempet ngerangkum materi KSN karena banyak tugas, ujian, dan terdistraksi sama orang lain?</p>
                            </div>
                        </div>
                        <div style={background6} className="p-9 py-12 mt-6 flex md:justify-end lg:justify-end md:ml-30 lg:ml-32">
                            <div className='my-auto lg:mx-10 lg:mx-12 text-white text-right'>
                                <h1 className="text-sm md:text-xl lg:text-2xl font-bold font-open-sans">Udah naik kelas 12, tapi masih belum persiapan SBMPTN?</h1>
                                <p className="text-xs py-4 md:text-base lg:text-xl font-roboto">Pernah gak sih kamu udah naik kelas 12 tapi masih belum ada belajar buat SBMPTN karena sibuk sama tugas sekolah, ga tau mulai darimana, ga ada temen ngambis, atau ga sempat ikut kursus offline karena harga yang mahal?</p>
                            </div>
                            <img src="/images/home-sec2-4.svg" alt="sec2-1" className='w-1/3 mx-auto'/>
                        </div>
                        <div style={background7} className="p-9 py-16 mt-6 flex md:justify-start lg:justify-start md:pr-40 lg:pr-48">
                            <img src="/images/home-sec2-6.svg" alt="sec2-8" className='w-1/3 mx-auto'/>
                            <div className='my-auto md:mx-10 lg:mx-12 text-white'>
                                <h1 className="text-sm md:text-xl lg:text-2xl font-bold font-open-sans">Lulus ITB, tapi takut gak masuk di jurusan impian?</h1>
                                <p className="text-xs py-4 md:text-base lg:text-xl font-roboto">Pernah gak sih kamu udah lulus ITB, tapi takut banget ga masuk ke jurusan impian karena takut IPK TPB ga mencukupi untuk masuk ke jurusan impian, atau merasa takut ga lulus mata kuliah Kalkulus, Fisika, Kimia, dan Pengenalan Komputasi? </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 py-20 lg:pl-28 lg:pr-16 lg:py-16" style={background1}>
                        <div className='lg:flex'>
                            <div className='lg:flex-auto lg:w-2/5 mx-2'>
                                <div>
                                    <img src="/images/home-sec3-2.svg" alt="sec3-2" className='mx-auto'/>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-3xl font-open-sans font-bold lg:pb-6'>Ocademy siap membantu kamu!</h1>
                                    <p className='text-lg font-roboto'>Ocademy hadir untuk menjawab semua permasalahan kamu! Ocademy hadir dengan membawa solusi yang kamu butuhkan, yaitu All In One persiapan kompetisi di berbagai bidang!</p>
                                </div>
                            </div>
                            <div className='my-4 lg:flex-auto lg:w-96 bg-white mx-4 rounded-lg px-12 py-8 drop-shadow-2xl' style={background2}>
                                <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4'>All In One<br />Persiapan KSN</h2>
                                <ul className='list-disc text-lg mb-24'>
                                    <li>Try out CBT</li>
                                    <li>Rangkuman materi</li>
                                    <li>PDF Pembahasan try out</li>
                                    <li>Video pembahasan try out</li>
                                    <li>Perangkingan secara nasional</li>
                                    <li>Virtual Live Teaching*</li>
                                    <li>Sertifikat*</li>
                                </ul>
                                
                                <button type="button" className="w-auto bg-oren3 rounded-lg hover:bg-yellow-700 mt-2 drop-shadow-xl absolute bottom-8 inset-x-1/4">
                                    <Link to="/register">
                                        <p className="text-lg px-4 py-2 text-white">Daftar Sekarang</p>
                                    </Link>
                                </button>
                            </div>
                            <div className='my-4 lg:flex-auto lg:w-96 bg-white mx-4 rounded-lg px-12 py-8 drop-shadow-2xl' style={background3}>
                                <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4 '>All In One<br />Persiapan SBMPTN</h2>
                                <ul className='list-disc text-lg mb-24'>
                                    <li>Try out CBT</li>
                                    <li>Rangkuman materi</li>
                                    <li>Quiz CBT</li>
                                    <li>PDF Pembahasan try out</li>
                                    <li>Video pembahasan try out</li>
                                    <li>Rasionalisasi UTBK</li>
                                    <li>Konsultasi jurusan/kampus</li>
                                    <li>Virtual class</li>
                                </ul>
                                <button type="button" className="w-auto bg-oren3 rounded-lg hover:bg-yellow-700 mt-2 drop-shadow-xl absolute bottom-8 inset-x-1/4">
                                    <Link to="/register">
                                        <p className="text-lg px-4 py-2 text-white">Daftar Sekarang</p>
                                        </Link>
                                </button>
                                
                            </div>
                            <div className='my-4 lg:flex-auto lg:w-96 bg-white mx-4 rounded-lg px-12 py-8 drop-shadow-2xl' style={background2}>
                                <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4'>All In One<br />Persiapan TPB</h2>
                                <ul className='list-disc text-lg mb-24'>
                                    <li>Virtual Class</li>
                                    <li>Persiapan Quiz</li>
                                    <li>Persiapan Praktikum</li>
                                    <li>Persiapan UTS</li>
                                    <li>Persiapan UAS</li>
                                    <li>Konsultasi soal dengan tutor</li>
                                </ul>
                                
                                <button type="button" className="w-auto bg-oren3 rounded-lg hover:bg-yellow-700 mt-2 drop-shadow-xl absolute bottom-8 inset-x-1/4">
                                    <Link to="/register">
                                        <p className="text-lg px-4 py-2 text-white">Daftar Sekarang</p>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='lg:py-16'>
                        <h1 className="text-center text-4xl font-open-sans text-oren1 font-bold lg:pb-8">Kenapa Harus Ocademy?</h1>
                        <div className="grid grid-1 lg:grid-cols-4 p-5 lg:px-36 text-center lg:text-xl">
                            <div className="bg-white rounded-lg mx-12 p-4 drop-shadow-xl my-4">
                                <img src="/images/home-sec4-1.svg" alt="home-sec4-1" className="mx-auto" />
                                <h2 className="font-open-sans font-bold text-center"><br />Terjangkau</h2>
                                <p className='font-roboto'>Harga terjangkau pelajar</p>
                            </div>
                            <div className="bg-white rounded-lg mx-12 p-4 drop-shadow-xl my-4">
                                <img src="/images/home-sec4-2.svg" alt="home-sec4-2" className="mx-auto" />
                                <h2 className="font-open-sans font-bold text-center"><br />20.000++</h2>
                                <p className='font-roboto'>Bank soal variatif</p>
                            </div>
                            <div className="bg-white rounded-lg mx-12 p-4 drop-shadow-xl my-4">
                                <img src="/images/home-sec4-3.svg" alt="home-sec4-3" className="mx-auto" />
                                <h2 className="font-open-sans font-bold text-center"><br />Puluhan</h2>
                                <p className='font-roboto'>Pembuat soal dari PTN ternama Indonesia</p>
                            </div>
                            <div className="bg-white rounded-lg mx-12 p-4 drop-shadow-xl my-4">
                                <img src="/images/sbmptn-sec9-1.svg" alt="home-sec4-3" className="mx-auto" />
                                <h2 className="font-open-sans font-bold text-center"><br />Online</h2>
                                <p className='font-roboto'>Learning from anywhere and anytime</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-10'>
                        <h1 className="text-4xl text-center font-open-sans text-oren1 font-bold pb-8">Apa Kata Mereka?</h1>
                        <p className='text-xl text-center font-roboto lg:px-56'>Sudah banyak Sobat Ocademy yang merasakan kualitas produk dari Ocademy nih! So, jangan ragu-ragu ya untuk daftar berbagai produk-produk unggul dari Ocademy!</p>
                        <div className="w-auto p-3 lg:p-10 drop-shadow-2xl">
                            <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                                <div className='py-8 bg-white rounded-lg lg:flex lg:text-left p-4' style={background4}>
                                    <div className="rounded-lg px-6 lg:w-1/2">
                                        <img src="/images/cewee.svg" alt="dummy_image1" className="py-4 border-4 rounded-full border-oren4"/>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='py-2 text-xl font-open-sans font-bold'>@desiiftryn12</h1>
                                        <h2 className='text-lg font-open-sans lg:pb-4'>Pengguna Produk Pelatihan KSN Ocademy</h2>
                                        <p className='py-2 text-lg font-roboto'>" Beuh Try Out Ocademy bagus banget, soal-soalnya HOTS dan baru. Selain itu, pdf dan video pembahasannya cukup jelas, padat, dan mudah dipahami. "</p>
                                    </div>
                                    <div className="rounded-lg px-6 lg:w-1/2">
                                        <img src="/images/cewee.svg" alt="dummy_image1" className="py-4 border-4 rounded-full border-oren4"/>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='py-2 text-xl font-open-sans font-bold'>@salmadm_354</h1>
                                        <h2 className='text-lg font-open-sans lg:pb-4'>Pengguna Produk Pelatihan KSN Ocademy</h2>
                                        <p className='py-2 text-lg font-roboto'>" Try Out KSN Ocademy mantep banget, soal-soalnya berkualitas, pembahasannya juga bikin aku lebih paham sama materi dan cara ngejawan soalnya. Thank you Ocademy! "</p>
                                    </div>
                                </div>
                                <div className='py-8 bg-white rounded-lg lg:flex lg:text-left p-4' style={background4}>
                                    <div className="rounded-lg px-6 lg:w-1/2">
                                        <img src="/images/cewee.svg" alt="dummy_image1" className="py-4 border-4 rounded-full border-oren4"/>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='py-2 text-xl font-open-sans font-bold'>@raudhatulf_</h1>
                                        <h2 className='text-lg font-open-sans lg:pb-4'>Pengguna Produk Pelatihan KSN Ocademy</h2>
                                        <p className='py-2 text-lg font-roboto'>" Ocademy sangat membantu aku memahami materi KSN, aku jadi paham banget sama materi dan soal-soal yang diujikan waktu KSN nanti. Terima kasih Ocademy! "</p>
                                    </div>
                                    <div className="rounded-lg px-6 lg:w-1/2">
                                        <img src="/images/cowoo.svg" alt="dummy_image1" className="py-4 border-4 rounded-full border-oren4"/>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='py-2 text-xl font-open-sans font-bold'>@okhann_</h1>
                                        <h2 className='text-lg font-open-sans lg:pb-4'>Pengguna Produk Pelatihan KSN Ocademy</h2>
                                        <p className='py-2 text-lg font-roboto'>" Ocademy bikin aku gampang ngerjain soal-soal KSN, karena Ocademy bikin soal yang rumit jadi gampang dimengerti. Tutor nya ngasih tips untuk ngerjain soalnya secepat dan sesimple mungkin! "</p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;