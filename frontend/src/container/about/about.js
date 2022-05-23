import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const background1={
    backgroundImage: 
    "url('/images/about11.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '700px',
};

const background2={
    backgroundImage: 
    "url('/images/about21.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

const background3={
    backgroundImage: 
    "url('/images/about3.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

export class About extends Component {
    render() {
        return (
            <>  
                <div class="bg-background">
                    <div class="grid grid-1 lg:grid-cols-2 p-24" style={background1}>
                        <div>
                            <img src="/images/about1.svg" alt="1" />
                        </div>
                        <div>
                            <h1 class="text-4xl text-oren1 font-bold">Apa itu Ocademy?</h1><br />
                            <p>Ocademy adalah platform penyedia layanan pelatihan dan pembimbingan Kompetisi Sains Nasional yang berkualitas, terjangkau, dan online.</p><br />
                            <p>Ocademy hadir menjadi solusi pelatihan KSN yang mudah, menyenangkan, berkualitas, dan terjangkau. Ocademy menjadi nafas segar bagi para pejuang medalist KSN di tengah pandemi Covid-19. Layanan Ocademy meliputi Try Out, Crash Course, serta Lomba KSN yang diadakan secara online.</p><br />
                        </div>
                    </div>
                    <div class="grid grid-1 lg:grid-cols-3 p-24" style={background2}>
                        <div class="bg-white rounded-lg p-5 w-64 text-center">
                            <h2 class="text-2xl text-oren1 font-semibold">Visi</h2><br />
                            <p class="text-base">Mencetak generasi saintis berskala Internasional dengan menyediakan bimbingan edukasi yang menarik, berkualitas, dan nyaman digunakan untuk seluruh pelajar di Indonesia.</p>
                        </div>
                        <div>
                            <img src="/images/about2.svg" alt="2" />
                        </div>
                        <div class="bg-white rounded-lg p-5 w-64">
                            <h2 class="text-2xl text-oren1 font-semibold text-center">Misi</h2><br />
                            <ol class="list-decimal text-base pl-5">
                                <li>Membuat generasi penerus bangsa menjadi lebih kompetitif</li>
                                <li>Meningkatkan rasa minat sains pada generasi penerus bangsa</li>
                                <li>Pemerataan bimbingan edukasi sains yang berkualitas di Indonesia</li>
                            </ol>
                        </div>
                    </div>
                    <div class="p-16">
                        <h1 class="text-4xl text-oren1 font-bold text-center">Our Founder</h1><br />
                        <div class="grid grid-1 lg:grid-cols-5">
                            <div class="bg-white text-center rounded-lg p-4 w-44" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-4 w-44" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-4 w-44" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-4 w-44" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4"/><br />
                                <h2 class="text-lg font-bold">Nabilah Erfariani</h2>
                                <p>CEO</p>
                            </div>
                            <div class="bg-white text-center rounded-lg p-4 w-44" style={background3}>
                                <img src="/images/dummy_image1.png" alt="1" class="border-4 rounded-full border-oren4"/><br />
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