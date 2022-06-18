import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const background1={
    backgroundImage: 
    "url('/images/ksnbg.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background2={
    backgroundImage: 
    "url('/images/ksn51.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background3={
    backgroundImage: 
    "url('/images/ksn62.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};


const background4={
    backgroundImage: 
    "url('/images/ksn72.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background5={
    backgroundImage: 
    "url('/images/home-sec3-3.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

export class ProdukSBMPTN extends Component {
    render() {
        return (
            <>  
                <div className='bg-background' style={background1}>
                    <div>
                        <img src="/images/sbmptn-sec1-1.svg" alt="sbmptn-sec1-1" className="object-cover w-full h-full"/>
                        <div div className="px-5 md:px-20 lg:px-24 text-left text-white">
                            <h1 className="w-1/2 text-lg md:py-8 md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-24 lg:top-40">Persiapan SBMPTN</h1>
                            <p className="w-full pr-10 lg:w-1/2 md:py-12 text-xs md:text-lg lg:text-xl font-roboto absolute top-32 lg:top-60">Maksimalkan persiapan UTBK kamu bersama Ocademy mulai dari sekarang! Ocademy telah membuka program persiapan UTBK selama 1 tahun yang terdiri dari berbagai produk yang kamu butuhkan! Dapatkan juga promo besar-besaran untuk produk ini. Ingat, slot terbatas!!!  </p>
                        </div>
                    </div>

                    <div className='px-10'>
                        <div className="flex py-5 items-center">
                            <div className="flex-grow border-t border-oren1"></div>
                            <span className="flex-shrink mx-4 text-oren1 text-3xl font-semibold font-open-sans">Apa saja yang sobat dapatkan?</span>
                            <div className="flex-grow border-t border-oren1"></div>
                        </div>
                        <div>
                            <img src="/images/ksn21.svg" alt="ksn21" className="float-left p-8 lg:py-16 lg:p-32 "/>
                            <div className="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Try Out SBMPTN berbasis CBT</h2><br />
                                    <p className="text-lg font-roboto lg:pr-20">Dapatkan Try Out berbasis komputer yang terdiri dari soal-soal pilihan berkualitas tinggi yang dibuat oleh mahasiswa-mahasiswa perguruan tinggi ternama Indonesia, serta sudah memiliki sistem penilaian IRT yang sama seperti UTBK aslinya.</p>
                                </div>
                                <br />
                                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2">
                                    <div>
                                        <h2 className='text-xl font-bold font-open-sans'>Pilihan Try Out</h2><br />
                                        <div className='grid grid-cols-2 pb-12'>
                                            <img src="/images/sbmptn-saintek.svg" alt="sbmptn-saintek" className="px-2"/>
                                            <img src="/images/sbmptn-soshum.svg" alt="sbmptn-soshum" className="px-2"/>
                                        </div>
                                    </div>
                                    <div className='lg:px-10'>
                                        <h2 className='text-xl font-bold font-open-sans'>Mekanisme Try Out</h2><br />
                                        <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} width={220}>
                                            <img src='/images/ksn-sec2-1.svg' alt='ksn-sec2-1' title='ksn-sec2-1' />
                                            <img src='/images/ksn-sec2-2.svg' alt='ksn-sec2-2' title='ksn-sec2-2' />
                                            <img src='/images/ksn-sec2-3.svg' alt='ksn-sec2-3' title='ksn-sec2-3' />
                                            <img src='/images/ksn-sec2-4.svg' alt='ksn-sec2-4' title='ksn-sec2-4' />                                            
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={background2} className="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl md:text-right lg:text-right font-bold font-open-sans'>Rangkuman</h2><br />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/ksn52.svg" alt="ksn1"/>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg md:text-right lg:text-right lg:pl-80 font-roboto'>Dapatkan rangkuman lengkap materi UTBK dari kelas 10 hingga kelas 12 yang terstruktur, singkat, padat, jelas, dan mudah dipahami. Rangkuman ini disusun buat kamu yang sibuk dengan tugas sekolah ataupun yang ingin mengulang-ulang secara cepat materi kelas 10 hingga 12!</p>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <h2 className='text-2xl md:text-right lg:text-right font-bold font-open-sans'>Pilihan Rangkuman</h2><br />
                            <ul>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">Rangkuman TPS</li>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">Rangkuman TKA Soshum</li>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">Rangkuman TKA Saintek</li>
                            </ul>
                           
                        </div>

                    </div>

                    <div style={background3} className='px-10'>
                        <div>
                            <img src="/images/sbmptn-sec4-1.svg" alt="sbmptn-sec4-1" className="float-left p-8 lg:py-16 lg:p-32"/>
                            <div className="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Quiz berbasis CBT</h2><br />
                                    <p className="lg:pr-80 text-lg font-roboto lg:pr-20">Dapatkan quiz berbasis komputer yang terdiri dari soal-soal pilihan yang penting untuk mengingat-ingat materi yang sebelumnya dipelajari saat Virtual Class Teaching. Quiz ini dapat melatih kamu mengerjakan soal secara cepat dan tepat. Semakin banyak berlatih, maka kamu akan semakin terbiasa mengerjakan ujian dengan cepat dan tepat!</p>
                                </div>
                                <br />
                                <div className='lg:px-10'>
                                    <h2 className='text-xl font-bold font-open-sans'>Mekanisme Quiz</h2><br />
                                    <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} width={220}>
                                        <img src='/images/ksn-sec2-1.svg' alt='ksn-sec2-1' title='ksn-sec2-1' />
                                        <img src='/images/ksn-sec2-2.svg' alt='ksn-sec2-2' title='ksn-sec2-2' />
                                        <img src='/images/ksn-sec2-3.svg' alt='ksn-sec2-3' title='ksn-sec2-3' />
                                        <img src='/images/ksn-sec2-4.svg' alt='ksn-sec2-4' title='ksn-sec2-4' />                                            
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={background2} className="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl lg:text-right font-bold font-open-sans'>PDF Pembahasan</h2><br />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/sbmptn-sec5-1.svg" alt="sbmptn-sec5-1"/>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg md:text-right lg:text-right lg:pl-80 font-roboto'>Dapatkan pembahasan try out berbentuk PDF yang ringkas dan mudah dipahami, di dalam pembahasan tersebut juga terdapat tips dan trik mengerjakan soal dengan cepat dan tepat.</p>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <h2 className='text-2xl md:text-right lg:text-right font-bold font-open-sans'>Pilihan PDF Pembahasan</h2><br />
                            <ul>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">PDF Pembahasan Try Out Soshum</li>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">PDF Pembahasan Try Out Saintek</li>
                            </ul>
                           
                        </div>
                    </div>

                    <div style={background3} className='px-10'>
                        <div>
                            <img src="/images/sbmptn-sec6-1.svg" alt="sbmptn-sec6-1" className="float-left p-8 lg:py-16 lg:p-32"/>
                            <div className="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Video Pembahasan</h2><br />
                                    <p className="lg:pr-80 text-lg font-roboto lg:pr-20">Dapatkan pembahasan try out berbentuk video langsung dari pembuat soalnya! Di dalam video tersebut kamu mendapatkan penjelasan yang lebih dalam dan materi yang terkait dengan soal tersebut.  </p>
                                </div>
                                <br />
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Pilihan Video Pembahasan</h2><br />
                                    <ul>
                                        <li className="lg:pr-80 text-lg font-roboto lg:pr-20">Video Pembahasan Try Out Soshum</li>
                                        <li className="lg:pr-80 text-lg font-roboto lg:pr-20">Video Pembahasan Try Out Saintek</li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={background2} className="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl lg:text-right font-bold font-open-sans'>Rasionalisasi UTBK</h2><br />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/sbmptn-sec7-1.svg" alt="sbmptn-sec7-1"/>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg md:text-right lg:text-right lg:pl-80 font-roboto'>Dapatkan sistem supercomputer yang bisa memprediksi peluang kamu masuk di jurusan dan kampus impian kamu berdasarkan analisis data yang komprehensif dan reliable. Kamu akan mendapatkan rasionalisasi nilai setelah kamu mengerjakan Try Out CBT. </p>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <h2 className='text-2xl md:text-right lg:text-right font-bold font-open-sans'>Fitur Rasionalisasi</h2><br />
                            <ul>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">Penjabaran Nilai</li>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">Letak Kesalahan</li>
                                <li className="text-lg md:text-right lg:text-right lg:pl-80 font-roboto">Prediksi peluang masuk jurusan dan kampus impian</li>
                            </ul>
                           
                        </div>

                    </div>

                    <div style={background3} className='px-10 py-20'>
                        <div>
                            <img src="/images/sbmptn-sec8-1.svg" alt="sbmptn-sec8-1" className="float-left p-8 lg:py-16 lg:p-32"/>
                            <div className="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Rekomendasi Jurusan/Kampus</h2><br />
                                    <p className="lg:pr-80 text-lg font-roboto lg:pr-20">Dapatkan layanan konsultasi jurusan/kampus langsung dari ahlinya! Setelah mengerjakan Try Out CBT dan mendapatkan hasil rasionaliasi nilai, kamu dapat berkonsultasi dengan tim Ocademy mengenai jurusan/kampus melalui Whatsapp SEPUASNYA!!! </p>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>

                    <div style={background2} className="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl lg:text-right font-bold font-open-sans'>Virtual Class</h2><br />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/sbmptn-sec9-1.svg" alt="sbmptn-sec9-1"/>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg md:text-right lg:text-right lg:pl-80 font-roboto'>Dapatkan kelas online tiap minggu bersama tutor-tutor kece dari kampus ternama Indonesia! Setiap minggu nya akan dijelaskan materi PER SUB-BAB dan soal-soal terkait materi tersebut. Kamu juga dapat bertanya mengenai soal/materi yang belum kamu pahami. Kelas dilaksanakan via zoom dan berdurasi 90 menit!!</p>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div style={background4} >
                        <div className='px-10 pb-20 text-center'>
                            <div className="flex py-5 items-center">
                                <div className="flex-grow border-t border-oren1"></div>
                                <span className="flex-shrink mx-4 text-oren1 text-4xl font-bold font-open-sans">Ayo Daftar Sekarang</span>
                                <div className="flex-grow border-t border-oren1"></div>
                            </div>
                            <p className='text-xl font-roboto'>Pilihan Paket</p>
                            <div className='lg:flex'>
                                <div className='my-4 lg:flex-auto lg:w-96 bg-white mx-4 rounded-lg px-12 py-8 drop-shadow-2xl' style={background5}>
                                    <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4'>Paket 1</h2>
                                    <ul className='list-disc text-lg mb-24'>
                                        <li>Try out CBT</li>
                                        <li>Rangkuman materi</li>
                                        <li>PDF & Video Pembahasan try out</li>
                                        <li>Rasionalisasi UTBK</li>
                                        <li>Quiz CBT</li>
                                        <li>Virtual Live Teaching</li>
                                    </ul>
                                    <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center'>Harga : Rp. 799.900</h2>
                                    
                                </div>
                                <div className='my-4 lg:flex-auto lg:w-96 bg-white mx-4 rounded-lg px-12 py-8 drop-shadow-2xl' style={background5}>
                                    <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4'>Paket 2</h2>
                                    <ul className='list-disc text-lg mb-24'>
                                        <li>Try out CBT</li>
                                        <li>Rangkuman materi</li>
                                        <li>PDF & Video Pembahasan try out</li>
                                        <li>Rasionalisasi UTBK</li>
                                    </ul>
                                    <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4'>Harga : Rp 699.900</h2>
                                    
                                </div>
                            </div>
                            <button type="button" className="w-40 bg-oren3 rounded-lg hover:bg-yellow-700 focus:outline-none m-5 mx-auto grid justify-items-center">
                                <Link to="/register">
                                    <p className="text-lg px-4 py-2 text-white font-roboto ">Daftar & Lihat Sekarang</p>
                                </Link>
                            </button>
                            <button type="button" className="w-40 bg-oren3 rounded-lg hover:bg-yellow-700 focus:outline-none m-5 mx-auto grid justify-items-center">
                                <a href="https://forms.gle/mQZ4tYPbzuArqkur7">
                                    <p className="text-lg px-4 py-2 text-white font-roboto ">Beli Sekarang</p>
                                </a>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProdukSBMPTN;