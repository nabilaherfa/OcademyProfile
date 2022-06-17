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

export class ProdukTPB extends Component {
    render() {
        return (
            <>  
                <div className='bg-background' style={background1}>
                    <div>
                        <img src="/images/sbmptn-sec1-1.svg" alt="sbmptn-sec1-1" className="object-cover w-full h-full"/>
                        <div div className="px-5 md:px-20 lg:px-24 text-left text-white">
                            <h1 className="w-1/2 text-lg md:py-8 md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-24 lg:top-40">Persiapan TPB ITB</h1>
                            <p className="w-3/4 lg:w-1/2 md:py-12 text-xs md:text-lg lg:text-xl font-roboto absolute top-32 lg:top-60">Maksimalkan persiapan masuk jurusan impian kamu bersama Ocademy mulai dari sekarang! Ocademy telah membuka program persiapan TPB selama 1 semester yang terdiri dari berbagai produk yang kamu butuhkan! Dapatkan juga promo besar-besaran untuk produk ini. Ingat, slot terbatas!!!  </p>
                        </div>
                    </div>

                    <div className='px-10'>
                        <div className="flex py-5 items-center">
                            <div className="flex-grow border-t border-oren1"></div>
                            <span className="flex-shrink mx-4 text-oren1 text-3xl font-semibold font-open-sans">Apa saja yang sobat dapatkan?</span>
                            <div className="flex-grow border-t border-oren1"></div>
                        </div>
                        <div>
                            <img src="/images/sbmptn-sec9-1.svg" alt="ksn21" className="float-left p-8 lg:py-16 lg:p-32 "/>
                            <div className="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Virtual Class</h2><br />
                                    <p className="text-lg font-roboto lg:pr-20">Dapatkan kelas online bersama para tutor berpengalaman yang merupakan mahasiswa tingkat atas ITB dengan indeks mata kuliah TPB sangaat memuaskan. Kelas berdurasi 90 menit untuk setiap pertemuan. Jadwal kelas dapat menyesuaikan dengan kebutuhan para tpbabes!</p>
                                </div>
                                <br />
                                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2">
                                    <div>
                                        <h2 className='text-xl font-bold font-open-sans'>Pilihan Kelas</h2><br />
                                        <ul>
                                            <li classname="lg:pr-80 text-lg font-roboto lg:pr-20">Kelas Kalkulus</li>
                                            <li classname="lg:pr-80 text-lg font-roboto lg:pr-20">Kelas Fisika</li>
                                            <li classname="lg:pr-80 text-lg font-roboto lg:pr-20">Kelas Kimia</li>
                                            <li classname="lg:pr-80 text-lg font-roboto lg:pr-20">Kelas Pengenalan Komputasi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={background2} className="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl md:text-right lg:text-right font-bold font-open-sans'>Persiapan Quiz</h2><br />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/ksn52.svg" alt="ksn1"/>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg md:text-right lg:text-right lg:pl-80 font-roboto'>Dapatkan latihan soal-soal quiz yang berasal dari Bank Soal Ocademy! Latihan soal dilakukan bersama para tutor/pengajar di saat jam kelas berlangsung. Soal-soal latihannya juga berasal dari soal-soal quiz di tahun-tahun sebelumnya yang tentunya sangat-sangat membantu kamu dalam mempersiapkan Quiz!</p>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </div>

                    <div style={background3} className='px-10'>
                        <div>
                            <img src="/images/sbmptn-sec4-1.svg" alt="sbmptn-sec4-1" className="float-left p-8 lg:py-16 lg:p-32"/>
                            <div className="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Persiapan UTS</h2><br />
                                    <p className="lg:pr-80 text-lg font-roboto lg:pr-20">Dapatkan latihan soal-soal UTS yang berasal dari Bank Soal Ocademy! Latihan soal dilakukan bersama para tutor/pengajar di saat jam kelas berlangsung. Soal-soal latihannya juga berasal dari soal-soal UTS di tahun-tahun sebelumnya yang tentunya sangat-sangat membantu kamu dalam mempersiapkan UTS!</p>
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
                            <h2 className='text-2xl lg:text-right font-bold font-open-sans'>Persiapan Praktikum</h2><br />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/sbmptn-sec5-1.svg" alt="sbmptn-sec5-1"/>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg md:text-right lg:text-right lg:pl-80 font-roboto'>Dapatkan persiapan praktikum dengan berlatihan soal-soal praktikum yang berasal dari Bank Soal Ocademy! Latihan soal dilakukan bersama para tutor/pengajar di saat jam kelas berlangsung. Soal-soal latihannya juga berasal dari soal-soal praktikum di tahun-tahun sebelumnya. Kamu juga dapat konsultasi soal-soal TP/Tugas Pendahuluan Praktikum bersama tutor/pengajar  yang tentunya sangat-sangat membantu kamu dalam menghadapi Praktikum!</p>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
           
                    </div>

                    <div style={background3} className='px-10'>
                        <div>
                            <img src="/images/sbmptn-sec6-1.svg" alt="sbmptn-sec6-1" className="float-left p-8 lg:py-16 lg:p-32"/>
                            <div className="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Persiapan UAS</h2><br />
                                    <p className="lg:pr-80 text-lg font-roboto lg:pr-20">Dapatkan latihan soal-soal UAS yang berasal dari Bank Soal Ocademy! Latihan soal dilakukan bersama para tutor/pengajar di saat jam kelas berlangsung. Soal-soal latihannya juga berasal dari soal-soal UAS di tahun-tahun sebelumnya yang tentunya sangat-sangat membantu kamu dalam menghadapi UAS!  </p>
                                </div>
                                <br />
                        
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                    </div>

                    <div style={background2} className="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl lg:text-right font-bold font-open-sans'>Konsultasi Soal Bersama Tutor</h2><br />
                        </div>
                        <div className="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/sbmptn-sec7-1.svg" alt="sbmptn-sec7-1"/>
                        </div>
                        <div className="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg md:text-right lg:text-right lg:pl-80 font-roboto'>Dapatkan FREE konsultasi soal dengan tutor SEPUASNYA. Kamu dapat berkonsultasi dengan pengajar melalui fitur chat mengenai soal-soal yang belum kamu pahami diluar jam kelas. </p>
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
                            <p className='text-xl font-roboto'>Dapatkan promo 45% bulan ini hanya dengan 399.900 saja!</p>
                            <button type="button" className="w-40 bg-oren3 rounded-lg hover:bg-yellow-700 focus:outline-none m-5 mx-auto grid justify-items-center">
                                <Link to="/register">
                                    <p className="text-lg px-4 py-2 text-white font-roboto ">Daftar Sekarang</p>
                                </Link>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProdukTPB;