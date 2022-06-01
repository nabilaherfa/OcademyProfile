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
                    <div class="w-auto p-3 lg:p-10 ">
                        <Carousel showThumbs={false} showStatus={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                            <div className='text-white'>
                                <img src='/images/home-slides1.svg' alt='home-slides1' title='home-slides1' class="object-cover w-full h-full"/>
                                <div class="flex md:justify-center lg:justify-center">
                                    <div class="p-5 text-left ">
                                        <h1 class="py-2 md:py-8 lg:py-16 text-lg md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-0">Pelatihan KSN</h1>
                                        <p class="py-8 md:py-16 lg:py-32 pr-8 md:pr-16 lg:pr-24 text-xs md:text-lg lg:text-2xl font-roboto absolute top-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  </p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <button type="button" class="drop-shadow-2xl absolute bottom-12 bg-oren3 rounded-lg hover:bg-yellow-700 mx-8 md:my-3 lg:my-4">
                                        <Link to="/produk-KSN">
                                            <p class="text-xs md:text-lg lg:text-lg px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 font-roboto">Coba Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='text-white'>
                                <img src='/images/home-slides2.svg' alt='home-slides2' title='home-slides2' class="object-cover w-full h-full"/>
                                <div class="flex justify-start">
                                    <div class="p-5 text-left ">
                                        <h1 class="w-1/2 py-2 md:py-8 lg:py-16 text-lg md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-0">Pelatihan SBMPTN</h1>
                                        <p class="md:w-1/2 lg:w-1/2 py-8 md:py-16 lg:py-32 pr-8 text-xs md:text-lg lg:text-2xl font-roboto absolute top-0 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  </p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                <button type="button" class="drop-shadow-2xl absolute bottom-12 bg-oren3 rounded-lg hover:bg-yellow-700 mx-8 md:my-3 lg:my-4">
                                        <Link to="/produk-KSN">
                                            <p class="text-xs md:text-lg lg:text-lg px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 font-roboto">Coba Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='text-white'>
                                <img src='/images/home-slides3.svg' alt='home-slides3' title='home-slides3' class="object-cover w-full h-full"/>
                                <div class="flex justify-start">
                                    <div class="p-5 text-left ">
                                        <h1 class="w-1/2 py-2 md:py-8 lg:py-16 text-lg md:text-2xl lg:text-4xl font-bold font-open-sans absolute top-0">Promo</h1>
                                        <p class="md:w-1/2 lg:w-1/2 py-8 md:py-16 lg:py-32 pr-8 text-xs md:text-lg lg:text-2xl font-roboto absolute top-0 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  </p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                <button type="button" class="drop-shadow-2xl absolute bottom-12 bg-oren3 rounded-lg hover:bg-yellow-700 mx-8 md:my-3 lg:my-4">
                                        <Link to="/">
                                            <p class="text-xs md:text-lg lg:text-lg px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 font-roboto">Coba Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </Carousel>
                    </div>

                    {/* <div class="w-auto p-3 lg:p-10 ">
                        <Carousel showThumbs={false} showStatus={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                            <div>
                                <img src='/images/home-slides1.svg' alt='home-slides1' title='home-slides1' class="object-cover w-full h-full"/>
                                <div class="grid grid-1 lg:grid-cols-2">
                                    <div></div>
                                    <div class="p-5">
                                        <h1 class="text-lg py-6 lg:text-4xl font-bold text-left absolute lg:py-16 top-0 text-white">Pelatihan KSN</h1>
                                        <p class="text-xs py-2 pr-24 lg:text-2xl text-left absolute lg:py-32 top-0 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  </p>
                                        <button type="button" class="drop-shadow-2xl absolute bottom-32 w-40 bg-oren3 rounded-lg hover:text-white focus:outline-none m-5">
                                            <Link to="/produk-KSN">
                                                <p class="text-lg px-4 py-2 text-white font-roboto">Coba Sekarang</p>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='/images/home-slides2.svg' alt='home-slides2' title='home-slides2' class="object-cover w-full h-full"/>
                                <div class="grid grid-1 lg:grid-cols-2">
                                    <div div class="p-10 text-left text-white">
                                        <h1 class="w-1/2 text-lg lg:text-4xl font-bold absolute top-0 lg:top-12">Pelatihan SBMPTN</h1>
                                        <p class="w-1/2 text-xs lg:text-2xl absolute top-0 py-6 lg:top-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  </p>
                                    </div>
                                    <button type="button" class="drop-shadow-2xl absolute bottom-32 w-40 bg-oren3 rounded-lg hover:text-white focus:outline-none m-5">
                                        <Link to="/produk-SBMPTN">
                                            <p class="text-lg px-4 py-2 text-white font-roboto">Coba Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <img src='/images/home-slides3.svg' alt='home-slides3' title='home-slides3' class="object-cover w-full h-full"/>
                                <div class="grid grid-1 lg:grid-cols-2">
                                    <div div class="p-10 text-left text-white">
                                        <h1 class="w-1/2 text-lg lg:text-4xl font-bold absolute top-0 lg:top-12">Promo</h1>
                                        <p class="w-1/2 text-xs lg:text-2xl absolute top-0 py-6 lg:top-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  </p>
                                    </div>
                                    <button type="button" class="drop-shadow-2xl absolute bottom-32 w-40 bg-oren3 rounded-lg hover:text-white focus:outline-none m-5">
                                        <Link to="/">
                                            <p class="text-lg px-4 py-2 text-white font-roboto">Coba Sekarang</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </Carousel>
                    </div> */}

                    <div class="w-auto p-3 lg:p-10 ">
                        <div style={background5} className="p-9 py-12 flex md:justify-start lg:justify-start md:pr-40 lg:pr-48">
                            <img src="/images/home-sec2-2.svg" alt="sec2-1" className='w-1/3 mx-auto'/>
                            <div className='my-auto md:mx-10 lg:mx-12 text-white'>
                                <h1 class="text-sm md:text-xl lg:text-2xl font-bold font-open-sans">Ngerasa bingung gimana mulai mempersiapkan belajar buat KSN?</h1>
                                <p class="text-xs py-4 md:text-base lg:text-xl font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.</p>
                            </div>
                        </div>
                        <div style={background6} className="p-9 py-12 mt-6 flex md:justify-end lg:justify-end md:ml-30 lg:ml-32">
                            <div className='my-auto lg:mx-10 lg:mx-12 text-white text-right'>
                                <h1 class="text-sm md:text-xl lg:text-2xl font-bold font-open-sans">Udah naik kelas 12, tapi masih belum persiapan SBMPTN?</h1>
                                <p class="text-xs py-4 md:text-base lg:text-xl font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.</p>
                            </div>
                            <img src="/images/home-sec2-4.svg" alt="sec2-1" className='w-1/3 mx-auto'/>
                        </div>
                        <div style={background7} className="p-9 py-16 mt-6 flex md:justify-start lg:justify-start md:pr-40 lg:pr-48">
                            <img src="/images/home-sec2-6.svg" alt="sec2-8" className='w-1/3 mx-auto'/>
                            <div className='my-auto md:mx-10 lg:mx-12 text-white'>
                                <h1 class="text-sm md:text-xl lg:text-2xl font-bold font-open-sans">Mau persiapan SBMPTN, tapi waktu udah mepet?</h1>
                                <p class="text-xs py-4 md:text-base lg:text-xl font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-10 py-20 lg:pl-28 lg:pr-16 lg:py-16" style={background1}>
                        <div className='lg:flex'>
                            <div className='lg:flex-auto lg:w-2/5 mx-2'>
                                <div>
                                    <img src="/images/home-sec3-2.svg" alt="sec3-2" className='mx-auto'/>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-3xl font-open-sans font-bold lg:pb-6'>Ocademy siap membantu kamu!</h1>
                                    <p className='text-lg font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt officiis necessitatibus suscipit molestiae veniam dicta culpa officia nam rerum, alias deleniti unde nulla non ratione accusantium totam veritatis animi?</p>
                                </div>
                            </div>
                            <div className='my-4 lg:flex-auto lg:w-96 bg-white mx-4 rounded-lg px-12 py-8 drop-shadow-2xl' style={background2}>
                                <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4'>All In One<br />Persiapan KSN</h2>
                                <ul className='list-disc text-lg mb-24'>
                                    <li>Try out</li>
                                    <li>Rangkuman materi</li>
                                    <li>PDF Pembahasan try out</li>
                                    <li>Video pembahasan try out</li>
                                    <li>Perangkingan secara nasional</li>
                                </ul>
                                
                                <button type="button" class="w-auto bg-oren3 rounded-lg hover:bg-yellow-700 mt-2 drop-shadow-xl absolute bottom-8 inset-x-1/4">
                                    <Link to="/">
                                        <p class="text-lg px-4 py-2 text-white">Coba Sekarang</p>
                                    </Link>
                                </button>
                            </div>
                            <div className='my-4 lg:flex-auto lg:w-96 bg-white mx-4 rounded-lg px-12 py-8 drop-shadow-2xl' style={background3}>
                                <h2 className='text-2xl font-open-sans font-bold text-oren1 text-center lg:pb-4 '>All In One<br />Persiapan SBMPTN</h2>
                                <ul className='list-disc text-lg mb-24'>
                                    <li>Try out</li>
                                    <li>Rangkuman materi</li>
                                    <li>Quiz</li>
                                    <li>PDF Pembahasan try out</li>
                                    <li>Video pembahasan try out</li>
                                    <li>Rasionalisasi nilai</li>
                                    <li>Rekomendasi jurusan/kampus</li>
                                    <li>Virtual class</li>
                                </ul>
                                <button type="button" class="w-auto bg-oren3 rounded-lg hover:bg-yellow-700 mt-2 drop-shadow-xl absolute bottom-8 inset-x-1/4">
                                    <Link to="/">
                                        <p class="text-lg px-4 py-2 text-white">Coba Sekarang</p>
                                        </Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>

                    <div className='lg:py-16'>
                        <h1 class="text-center text-4xl font-open-sans text-oren1 font-bold lg:pb-8">Kenapa Harus Ocademy?</h1>
                        <div class="grid grid-1 lg:grid-cols-3 p-5 lg:px-36 text-center lg:text-xl">
                            <div class="bg-white rounded-lg mx-12 p-4 drop-shadow-xl my-4">
                                <img src="/images/home-sec4-1.svg" alt="home-sec4-1" class="mx-auto" />
                                <h2 class="font-open-sans font-bold text-center"><br />10.000++</h2>
                                <p className='font-roboto'>Pengguna Ocademy</p>
                            </div>
                            <div class="bg-white rounded-lg mx-12 p-4 drop-shadow-xl my-4">
                                <img src="/images/home-sec4-2.svg" alt="home-sec4-2" class="mx-auto" />
                                <h2 class="font-open-sans font-bold text-center"><br />Ribuan</h2>
                                <p className='font-roboto'>Bank soal variative</p>
                            </div>
                            <div class="bg-white rounded-lg mx-12 p-4 drop-shadow-xl my-4">
                                <img src="/images/home-sec4-3.svg" alt="home-sec4-3" class="mx-auto" />
                                <h2 class="font-open-sans font-bold text-center"><br />Puluhan</h2>
                                <p className='font-roboto'>Pembuat soal dari PTN ternama Indonesia</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-10'>
                        <h1 class="text-4xl text-center font-open-sans text-oren1 font-bold pb-8">Apa Kata Mereka?</h1>
                        <p className='text-xl text-center font-roboto lg:px-56'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sapiente dicta fugit aliquid aut quo ea cupiditate dolorem at ratione, voluptatibus eaque, nam facilis blanditiis aspernatur fugiat! Cupiditate, dolorem distinctio.</p>
                        <div class="w-auto p-3 lg:p-10 drop-shadow-2xl">
                            <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                                <div className='py-8 bg-white rounded-lg lg:flex lg:text-left p-4' style={background4}>
                                    <div class="rounded-lg px-6 lg:w-1/2">
                                        <img src="/images/dummy_image1.png" alt="dummy_image1" class="py-4 border-4 rounded-full border-oren4"/>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='py-2 text-xl font-open-sans font-bold'>Nabila erfariani</h1>
                                        <h2 className='text-lg font-open-sans lg:pb-4'>Informatika - ITB</h2>
                                        <p className='py-2 text-lg font-roboto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa, harum possimus aliquid eum dolorem alias mollitia hic aut ratione omnis est incidunt distinctio eius nam vero itaque ipsam autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit soluta dolor nostrum omnis ipsum beatae fugit doloribus animi. Labore, explicabo perspiciatis consequatur officia quibusdam alias temporibus pariatur iste corporis.</p>
                                    </div>
                                </div>
                                <div className='py-8 bg-white rounded-lg lg:flex lg:text-left p-4' style={background4}>
                                    <div class="rounded-lg px-6 lg:w-1/2">
                                        <img src="/images/dummy_image1.png" alt="dummy_image1" class="py-4 border-4 rounded-full border-oren4"/>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='py-2 text-xl font-open-sans font-bold'>Nabila erfariani</h1>
                                        <h2 className='text-lg font-open-sans lg:pb-4'>Informatika - ITB</h2>
                                        <p className='py-2 text-lg font-roboto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa, harum possimus aliquid eum dolorem alias mollitia hic aut ratione omnis est incidunt distinctio eius nam vero itaque ipsam autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit soluta dolor nostrum omnis ipsum beatae fugit doloribus animi. Labore, explicabo perspiciatis consequatur officia quibusdam alias temporibus pariatur iste corporis.</p>
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