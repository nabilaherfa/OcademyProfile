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

export class ProdukSBMPTN extends Component {
    render() {
        return (
            <>  
                <div className='bg-background' style={background1}>
                    <div>
                        <img src="/images/sbmptn-sec1-1.svg" alt="sbmptn-sec1-1" class="object-cover w-full h-full"/>
                        <div div class="px-5 lg:px-24 text-left text-white">
                            <h1 class="w-1/2 text-lg lg:text-4xl font-bold absolute top-24 lg:top-40">Persiapan SBMPTN</h1>
                            <p class="w-3/4 lg:w-1/2 text-xs lg:text-xl absolute top-32 lg:top-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  </p>
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
                                    <h2 className='text-2xl font-bold'>Try Out SBMPTN berbasis CBT</h2><br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                                <br />
                                <div class="grid grid-1 lg:grid-cols-2">
                                    <div>
                                        <h2 className='text-xl font-bold'>Pilihan Try Out</h2><br />
                                        <div className='grid lg:grid-cols-2'>
                                            <img src="/images/sbmptn-saintek.svg" alt="sbmptn-saintek" />
                                            <img src="/images/sbmptn-soshum.svg" alt="sbmptn-soshum" />
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
                                    <div className='py-10 grid grid-1 lg:grid grid-cols-2'>
                                        <div></div>
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
                            <img src="/images/sbmptn-sec4-1.svg" alt="sbmptn-sec4-1" class="float-left py-16 p-32"/>
                        </div>
                        <div class="col-span-2">
                            <div class="p-10 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold'>Quiz berbasis CBT</h2><br />
                                    <p className='lg:pr-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                                <br />
                                <h2 className='text-2xl font-bold'>Mekanisme Quiz</h2><br />
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
                            <h2 className='text-2xl text-right font-bold'>Rasionalisasi</h2><br />
                            <p className='text-lg text-right lg:pl-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
                        </div>
                        <div className='p-5'>
                            <img src="/images/sbmptn-sec7-1.svg" alt="sbmptn-sec7-1" class="mx-auto"/>
                        </div>
                    </div>

                    <div style={background3} className='px-10 grid grid-cols-3'>
                        <div>
                            <img src="/images/sbmptn-sec8-1.svg" alt="sbmptn-sec8-1" class="float-left py-16 p-32"/>
                        </div>
                        <div class="col-span-2">
                            <div class="p-10 leading-7">
                                <div>
                                    <h2 className='text-2xl font-bold'>Rekomendasi Jurusan/Kampus</h2><br />
                                    <p className='lg:pr-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sit pharetra augue senectus facilisi. Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam.  Sit et, tristique posuere iaculis amet. Adipiscing arcu mattis aenean elit dictum risus diam. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={background2} className='p-8 grid grid-cols-3 text-white'>
                        <div class="col-span-2">
                            <h2 className='text-2xl text-right font-bold'>Virtual Class</h2><br />
                            <p className='text-lg text-right lg:pl-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed sunt facilis dicta harum sit architecto distinctio, reprehenderit natus corrupti odio, explicabo nesciunt, unde cumque? Quam officiis quisquam odio qui?</p>
                            <div className='grid grid-1 lg:grid grid-cols-2'>
                                <div className='col-start-2'>
                                    <div className='py-10 grid justify-items-end'>
                                        <h3>Mekanisme Video</h3>
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
                            <img src="/images/sbmptn-sec9-1.svg" alt="sbmptn-sec9-1" class="mx-auto"/>
                        </div>
                    </div>

                    <div style={background4} >
                        <div className='px-10 pb-20'>
                            <div class="flex py-5 items-center">
                                <div class="flex-grow border-t border-oren1"></div>
                                <span class="flex-shrink mx-4 text-oren1 text-3xl font-semibold">Ayo Coba Sekarang</span>
                                <div class="flex-grow border-t border-oren1"></div>
                            </div>
                            <p className='text-center'>Dapatkan promo terbaik bulan ini hanya<br />dengan XXXX</p>
                            <Link to="/" className='grid justify-items-center'>
                                <button type="button" class="w-40 bg-oren3 rounded-lg hover:text-white focus:outline-none m-5 mx-auto">
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

export default ProdukSBMPTN;