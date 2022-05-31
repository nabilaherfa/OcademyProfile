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
                <div class="bg-background">
                    <div class="p-10 lg:mb-24 lg:flex lg:justify-center lg:pl-36 lg:py-10" style={background1}>
                        <div className='w-full'>
                            <img src="/images/about1.svg" alt="1" />
                        </div>
                        <div className='my-auto lg:px-12'>
                            <h1 class="text-4xl text-oren1 font-bold font-open-sans">Apa itu Ocademy?</h1><br />
                            <p className='font-roboto text-xl'>Ocademy adalah platform penyedia layanan pelatihan dan pembimbingan Kompetisi Sains Nasional yang berkualitas, terjangkau, dan online.</p><br />
                            <p className='font-roboto text-xl'>Ocademy hadir menjadi solusi pelatihan KSN yang mudah, menyenangkan, berkualitas, dan terjangkau. Ocademy menjadi nafas segar bagi para pejuang medalist KSN di tengah pandemi Covid-19. Layanan Ocademy meliputi Try Out, Crash Course, serta Lomba KSN yang diadakan secara online.</p><br />
                        </div>
                    </div>

                    <div class="grid grid-1 lg:grid-cols-3 lg:px-10" style={background2}>
                        <div class="bg-white rounded-lg p-5 lg:w-64 mx-16 text-center drop-shadow-xl lg:mb-20">
                            <h2 class="text-2xl text-oren1 font-semibold font-open-sans">Visi</h2><br />
                            <p class="text-xl font-roboto">Mencetak generasi saintis berskala Internasional dengan menyediakan bimbingan edukasi yang menarik, berkualitas, dan nyaman digunakan untuk seluruh pelajar di Indonesia.</p>
                        </div>
                        <div className='p-10'>
                            <img src="/images/about2.svg" alt="2" className='w-auto mx-auto'/>
                        </div>
                        <div class="bg-white rounded-lg p-5 lg:w-64 mx-16 text-center drop-shadow-xl lg:mb-20">
                            <h2 class="text-2xl text-oren1 text-center font-semibold font-open-sans">Misi</h2><br />
                            <ol class="list-decimal text-xl font-roboto pl-5">
                                <li>Membuat generasi penerus bangsa menjadi lebih kompetitif</li>
                                <li>Meningkatkan rasa minat sains pada generasi penerus bangsa</li>
                                <li>Pemerataan bimbingan edukasi sains yang berkualitas di Indonesia</li>
                            </ol>
                        </div>
                    </div>

                    <div class="p-10">
                        <h1 class="text-4xl text-oren1 font-bold text-center">Our Founder</h1><br />
                        <div class="grid grid-1 lg:flex lg:justify-center">
                            <div class="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mb-16" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mt-16" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mb-16" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mt-16" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-5 w-48 mx-auto m-2 lg:mb-16" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4 mx-auto"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;