import React, { Component } from 'react';

const background1={
    backgroundImage: "url('/images/about11.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background2={
    backgroundImage: 
    "url('/images/about21.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

const background3={
    backgroundImage: 
    "url('/images/about3.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

export class About extends Component {
    render() {
        return (
            <>  
                <div className="bg-background">
                    <div className="p-10 lg:mb-24 lg:flex lg:justify-center lg:pl-36 lg:py-10" style={background1}>
                        <div className='w-full'>
                            <img src="/images/about1.svg" alt="1" />
                        </div>
                        <div className='my-auto lg:px-12'>
                            <h1 className="text-4xl text-oren1 font-bold font-open-sans">Apa itu Ocademy?</h1><br />
                            <p className='font-roboto text-xl'>Ocademy adalah platform pelatihan kompetisi & bimbingan belajar berbasis teknologi yang mengutamakan kualitas soal, pengajar, dan layanan yang dapat diakses darimana saja, serta sudah dipercaya oleh lebih dari 10.000 pengguna dari seluruh Indonesia! Ocademy juga sudah terdaftar resmi dengan nomor legalitas AHU-004854.AH.01.30.Tahun 2021.</p><br />
                            <p className='font-roboto text-xl'>Ocademy hadir menjadi solusi bimbingan belajar online yang mudah diakses, menyenangkan, dan berkualitas dengan harga terjangkau. Ocademy menjadi nafas segar bagi para pejuang KSN & SBMPTN di tengah pandemi Covid-19. Layanan Ocademy meliputi All In One Pelatihan KSN, SBMPTN, dan Tutor TPB.</p><br />
                        </div>
                    </div>

                    <div className="grid grid-1 lg:grid-cols-3 lg:px-10" style={background2}>
                        <div className="bg-white rounded-lg p-5 lg:w-64 mx-16 text-center drop-shadow-xl lg:mb-20">
                            <h2 className="text-2xl text-oren1 font-semibold font-open-sans">Visi</h2><br />
                            <p className="text-xl font-roboto">Meningkatkan level pendidikan Indonesia secara merata melalui teknologi dan layanan yang berkualitas.</p>
                        </div>
                        <div className='p-10'>
                            <img src="/images/about2.svg" alt="2" className='w-auto mx-auto'/>
                        </div>
                        <div className="bg-white rounded-lg p-5 lg:w-64 mx-16 text-center drop-shadow-xl lg:mb-20">
                            <h2 className="text-2xl text-oren1 text-center font-semibold font-open-sans">Misi</h2><br />
                            <ol className="list-decimal text-xl font-roboto pl-5">
                                <li>Memfasilitasi pendidikan berbasis teknologi yang mudah dijangkau bagi seluruh kalangan masyarakat Indonesia</li>
                                <li>Memberikan pelatihan/kursus yang berkualitas dengan harga terjangkau, serta mudah diakses darimana saja dan kapan saja</li>
                                <li>Meningkatkan partisipasi aktif masyarakat dalam pemerataan kualitas pendidikan di Indonesia</li>
                            </ol>
                        </div>
                    </div>

                    <div className="p-10">
                        <h1 className="text-4xl text-oren1 font-bold text-center">Our Founder</h1><br />
                        <div className="grid grid-1 lg:flex lg:justify-center">
                            <div className="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mb-16" style={background3}>
                                <img src="/images/nabila.png" alt="1" className="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 className="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>Mahasiswa</p>
                                <p>Teknik Informatika ITB</p>
                            </div>
                            <div className="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mt-16" style={background3}>
                                <img src="/images/akhdi.png" alt="1" className="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 className="text-lg font-bold">Syahrahman A.G.</h2>
                                <p>Mahasiswa</p>
                                <p>Teknik Dirgantara ITB</p>
                            </div>
                            <div className="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mb-16" style={background3}>
                                <img src="/images/tasya.png" alt="1" className="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 className="text-lg font-bold">Tasya Nadzmus S.</h2>
                                <p>Mahasiswa</p>
                                <p>Astronomi ITB</p>
                            </div>
                            <div className="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mt-16" style={background3}>
                                <img src="/images/anin.png" alt="1" className="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 className="text-lg font-bold">Aninda Febrianti</h2>
                                <p>Mahasiswa</p>
                                <p>Kimia ITB</p>
                            </div>
                            <div className="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mb-16" style={background3}>
                                <img src="/images/fida.png" alt="1" className="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 className="text-lg font-bold">Isnaini Mufidhatul</h2>
                                <p>Mahasiswa</p>
                                <p>Fisika ITB</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;