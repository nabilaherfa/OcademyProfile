import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    '/images/slider1.png',
    '/images/slider1.png',
    '/images/slider1.png',
];

export class Home extends Component {
    render() {
        return (
            <>
                <div class="m-10">
                    <SimpleImageSlider
                        width={1200}
                        height={460}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={false}
                        style={{ margin: '0 auto' }}
                    />
                </div>
            </>
        );
    }
}

export default Home;