// oren2+kuning
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

export class ProdukKSN extends Component {
    render() {
        return (
            <>  
                <div className='bg-background' style={background1}>
                    <div>
                        <img src="/images/ksn1.svg" alt="ksn1" class="object-cover w-full h-full"/>
                        <div class="p-5 flex justify-start md:justify-center lg:justify-center text-left">
                            <div>
                                <h1 class="text-lg py-6 md:text-4xl lg:text-4xl font-bold absolute py-24 md:py-32 lg:py-44 top-0 text-white">Persiapan KSN</h1>
                            </div>
                            <div>
                                <p class="text-xs py-2 md:pr-20 lg:pr-24 md:text-sm lg:text-xl absolute py-32 md:py-48 lg:py-64 top-0 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                            </div>
                        </div>
                    </div>

                    <div className='px-10'>
                        <div class="flex py-5 items-center">
                            <div class="flex-grow border-t border-oren1"></div>
                            <span class="flex-shrink mx-4 text-oren1 text-3xl font-semibold font-open-sans">Apa saja yang sobat dapatkan?</span>
                            <div class="flex-grow border-t border-oren1"></div>
                        </div>
                        <div>
                            <img src="/images/ksn21.svg" alt="ksn21" class="float-left p-8 lg:py-16 lg:p-32 "/>
                            <div class="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Try Out KSN berbasis CBT</h2><br />
                                    <p class="text-lg font-roboto lg:pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                                <br />
                                <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-2">
                                    <div className='py-4'>
                                        <h2 className='text-xl font-bold font-open-sans'>9 Bidang Try Out</h2><br />
                                        <div className='grid grid-cols-3 lg:grid-cols-5'>
                                            <img src="/images/ksn-astronomi.svg" alt="ksn-astronomi" />
                                            <img src="/images/ksn-math.svg" alt="ksn-math" />
                                            <img src="/images/ksn-fisika.svg" alt="ksn-fisika" />
                                            <img src="/images/ksn-kimia.svg" alt="ksn-kimia" />
                                            <img src="/images/ksn-ekonomi.svg" alt="ksn-ekonomi" />
                                            <img src="/images/ksn-kebumian.svg" alt="ksn-kebumian" />
                                            <img src="/images/ksn-geografi.svg" alt="ksn-geografi" />
                                            <img src="/images/ksn-biologi.svg" alt="ksn-biologi" />
                                            <img src="/images/ksn-komputer.svg" alt="ksn-komputer" />
                                        </div>
                                    </div>
                                    <div className='lg:px-10 py-4'>
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

                    <div style={background2} class="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl lg:text-right font-bold font-open-sans'>Rangkuman</h2><br />
                        </div>
                        <div class="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/ksn52.svg" alt="ksn1"/>
                        </div>
                        <div class="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg lg:text-right lg:pl-80 font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
                        </div>
                        <div className='pb-8 md:row-start-3 md:col-span-2 md:flex md:justify-end lg:row-start-3 lg:col-span-2 lg:flex lg:justify-end'>
                            <div className='m-4'>
                                <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} width={220}>
                                    <img src='/images/dummy-slider1.svg' alt='dummy-slider1' title='dummy-slider1' />
                                    <img src='/images/dummy-slider2.svg' alt='dummy-slider2' title='dummy-slider2' />
                                    <img src='/images/dummy-slider3.svg' alt='dummy-slider3' title='dummy-slider3' />
                                </Carousel>
                            </div>
                            <div className='m-4'>
                                <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} width={220}>
                                    <img src='/images/dummy-slider1.svg' alt='dummy-slider1' title='dummy-slider1' />
                                    <img src='/images/dummy-slider2.svg' alt='dummy-slider2' title='dummy-slider2' />
                                    <img src='/images/dummy-slider3.svg' alt='dummy-slider3' title='dummy-slider3' />
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div style={background3} className='px-10'>
                        <div>
                            <img src="/images/ksn61.svg" alt="ksn61" class="float-left p-8 lg:py-16 lg:p-32"/>
                            <div class="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>PDF Pembahasan</h2><br />
                                    <p class="lg:pr-80 text-lg font-roboto lg:pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                                <br />
                                <div className='lg:px-10'>
                                    <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} width={220}>
                                        <img src='/images/dummy-slider1.svg' alt='dummy-slider1' title='dummy-slider1' />
                                        <img src='/images/dummy-slider2.svg' alt='dummy-slider2' title='dummy-slider2' />
                                        <img src='/images/dummy-slider3.svg' alt='dummy-slider3' title='dummy-slider3' />
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={background2} class="p-10 grid md:grid-flow-col lg:grid-flow-col text-white">
                        <div className='md:col-start-2 lg:col-start-2'>
                            <h2 className='text-2xl lg:text-right font-bold font-open-sans'>Video Pembahasan</h2><br />
                        </div>
                        <div class="md:row-span-3 md:col-start-3 md:mx-4 lg:row-span-3 lg:col-start-3 my-auto lg:mx-24">
                            <img src="/images/ksn71.svg" alt="ksn71"/>
                        </div>
                        <div class="md:col-span-2 lg:col-span-2 py-4">
                            <p className='text-lg lg:text-right lg:pl-80 font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
                        </div>
                        <div className='pb-8 md:row-start-3 md:col-span-2 md:flex md:justify-end lg:row-start-3 lg:col-span-2 lg:flex lg:justify-end'>
                            <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} width={220}>
                                <img src='/images/dummy-slider1.svg' alt='dummy-slider1' title='dummy-slider1' />
                                <img src='/images/dummy-slider2.svg' alt='dummy-slider2' title='dummy-slider2' />
                                <img src='/images/dummy-slider3.svg' alt='dummy-slider3' title='dummy-slider3' />
                            </Carousel>
                        </div>
                    </div>

                    <div style={background4} className='px-10'>
                        <div>
                            <img src="/images/ksn81.svg" alt="ksn81" class="float-left p-8 lg:py-16 lg:p-32"/>
                            <div class="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold font-open-sans'>Perangkingan secara Nasional</h2><br />
                                    <p class="lg:pr-80 text-lg font-roboto lg:pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                                <br />
                                <div className='lg:px-10'>
                                    <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} width={220}>
                                        <img src='/images/dummy-slider1.svg' alt='dummy-slider1' title='dummy-slider1' />
                                        <img src='/images/dummy-slider2.svg' alt='dummy-slider2' title='dummy-slider2' />
                                        <img src='/images/dummy-slider3.svg' alt='dummy-slider3' title='dummy-slider3' />
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className='px-10 pb-20 text-center'>
                            <div class="flex py-5 items-center">
                                <div class="flex-grow border-t border-oren1"></div>
                                <span class="flex-shrink mx-4 text-oren1 text-4xl font-bold font-open-sans">Ayo Coba Sekarang</span>
                                <div class="flex-grow border-t border-oren1"></div>
                            </div>
                            <p className='text-xl font-roboto'>Dapatkan promo terbaik bulan ini hanya dengan XXXX</p>
                            <button type="button" class="w-40 bg-oren3 rounded-lg hover:bg-yellow-700 focus:outline-none m-5 mx-auto grid justify-items-center">
                                <Link to="/">
                                    <p class="text-lg px-4 py-2 text-white font-roboto ">Coba Sekarang</p>
                                </Link>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProdukKSN;