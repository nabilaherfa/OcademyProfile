// oren2+kuning
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const background1={
    backgroundImage: 
    "url('/images/ksnbg.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

const background2={
    backgroundImage: 
    "url('/images/ksn51.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

const background3={
    backgroundImage: 
    "url('/images/ksn62.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};


const background4={
    backgroundImage: 
    "url('/images/ksn72.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

export class ProdukKSN extends Component {
    render() {
        return (
            <>  
                <div className='bg-background' style={background1}>
                    <div>
                        <img src="/images/ksn1.svg" alt="ksn1" class="object-cover w-full h-full"/>
                        <div class="grid grid-1 lg:grid-cols-2">
                            <div></div>
                            <div class="p-5">
                                <h1 class="text-lg py-6 lg:text-4xl font-bold text-left absolute lg:py-44 top-0 text-white">Persiapan KSN</h1>
                                <p class="text-xs py-2 pr-24 lg:text-base text-left absolute lg:py-64 top-0 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                            </div>
                        </div>
                    </div>

                    <div className='px-10'>
                        <div class="flex py-5 items-center">
                            <div class="flex-grow border-t border-oren1"></div>
                            <span class="flex-shrink mx-4 text-oren1 text-3xl font-semibold">Apa saja yang sobat dapatkan?</span>
                            <div class="flex-grow border-t border-oren1"></div>
                        </div>
                        <div>
                            <div>
                                <img src="/images/ksn21.svg" alt="ksn21" class="float-left py-16 p-32"/>
                            </div>
                            <div class="p-10 pb-16 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold'>Try Out KSN berbasis CBT</h2><br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                                <br />
                                <div class="grid grid-1 lg:grid-cols-2">
                                    <div>
                                        <h2 className='text-xl font-bold'>9 Bidang Try Out</h2><br />
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
                                    <div className='px-10'>
                                        <h2 className='text-xl font-bold'>Mekanisme Try Out</h2><br />
                                        <Carousel showThumbs={false} showArrows={false} showStatus={false}>
                                            <img src='/images/ksn41.svg' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={background2} className='p-10 grid grid-cols-3 text-white'>
                        <div class="col-span-2">
                            <h2 className='text-2xl text-right font-bold'>Rangkuman</h2><br />
                            <p className='text-lg text-right lg:pl-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
                            <div className='grid grid-1 lg:grid grid-cols-2'>
                                <div className='col-start-2'>
                                    <div className='py-10 grid grid-1 lg:grid grid-cols-2 mx-auto'>
                                        <Carousel showThumbs={false} showArrows={false} showStatus={false} width={140}>
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                        </Carousel>
                                        <Carousel showThumbs={false} showArrows={false} showStatus={false} width={140}>
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <img src="/images/ksn52.svg" alt="ksn1" class="mx-auto"/>
                        </div>
                    </div>

                    <div style={background3} className='px-10 grid grid-cols-3'>
                        <div>
                            <img src="/images/ksn61.svg" alt="ksn21" class="float-left py-16 p-32"/>
                        </div>
                        <div class="col-span-2">
                            <div class="p-10 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold'>PDF Pembahasan</h2><br />
                                    <p className='lg:pr-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                                <br />
                                <Carousel showThumbs={false} showArrows={false} showStatus={false} width={150}>
                                    <img src='/images/ksn41.svg' alt='imagem' title='imagem' />
                                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div style={background2} className='p-8 grid grid-cols-3 text-white'>
                        <div class="col-span-2">
                            <h2 className='text-2xl text-right font-bold'>Video Pembahasan</h2><br />
                            <p className='text-lg text-right lg:pl-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
                            <div className='grid grid-1 lg:grid grid-cols-2'>
                                <div className='col-start-2'>
                                    <div className='py-10 grid justify-items-end'>
                                        <Carousel showThumbs={false} showArrows={false} showStatus={false} width={140}>
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <img src="/images/ksn71.svg" alt="ksn71" class="mx-auto"/>
                        </div>
                    </div>

                    <div style={background4} >
                        <div className='px-10 grid grid-cols-3'>
                            <div>
                                <img src="/images/ksn71.svg" alt="ksn21" class="float-left py-16 p-32"/>
                            </div>
                            <div class="col-span-2">
                                <div class="p-10 pb-16 leading-7">
                                    <div>
                                        <h2 className='text-2xl font-bold'>Perangkingan secara Nasional</h2><br />
                                        <p className='lg:pr-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                    </div>
                                    <br />
                                    <Carousel showThumbs={false} showArrows={false} showStatus={false} width={150}>
                                        <img src='/images/ksn41.svg' alt='imagem' title='imagem' />
                                        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                        <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className='px-10 pb-20'>
                            <div class="flex py-5 items-center">
                                <div class="flex-grow border-t border-oren1"></div>
                                <span class="flex-shrink mx-4 text-oren1 text-3xl font-semibold">Ayo Coba Sekarang</span>
                                <div class="flex-grow border-t border-oren1"></div>
                            </div>
                            <p className='text-center'>Dapatkan promo terbaik bulan ini hanya<br />dengan XXXX</p>
                            <Link to="/" className='grid justify-items-center'>
                                <button type="button" class="w-40 bg-oren rounded-lg hover:text-white focus:outline-none m-5 mx-auto">
                                    <p class="text-lg px-4 text-white">Coba Sekarang</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
// bg-gradient-to-r from-purple-400 md:from-yellow-500
export default ProdukKSN;


{/* <div style={background2} className="p-20 grid grid-cols-3 text-white">
    <div class="col-span-2">
        <h2 className='text-2xl text-right font-bold'>Rangkuman</h2><br />
        <p className='text-lg text-right lg:pl-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
    </div>
    <div className='p-5 text-white'>
        <img src="/images/ksn52.svg" alt="ksn1" class="mx-auto"/>
    </div>
    <div className='col-start-2'>
        <div className='grid grid-1 lg:grid grid-cols-2'>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} width={140}>
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            </Carousel>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} width={140}>
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            </Carousel>
        </div>
    </div>
</div> */}

{/* <div style={background2} className="p-20 grid grid-cols-3 text-white">
    <div class="col-span-2">
        <div>
            <h2 className='text-2xl text-right font-bold'>Rangkuman</h2><br />
            <p className='text-lg text-right lg:pl-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
        </div>
        <div className='flex'>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} width={140} className="mx-auto">
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            </Carousel>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} width={140} className="mx-auto">
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            </Carousel>
        </div>
    </div>
    <div>
        <img src="/images/ksn52.svg" alt="ksn1" class="mx-auto py-auto"/>
    </div>
                    </div> */}