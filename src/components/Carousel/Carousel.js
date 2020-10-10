import React, { useEffect } from 'react';

import Glide from '@glidejs/glide';
import '../../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

import classes from './Carousel.module.css';
import Slidephoto1 from '../../assets/images/Slideshow1.jpg';
import Slidephoto2 from '../../assets/images/Slideshow2.jpg';

const Carousel = () => {
    useEffect(() => {
        new Glide(".glide", {
            peek: 0,
            perView: 1,
            type: "carousel",
            autoplay: 2000,
            animationDuration: 2000
        }).mount();
    });

    return (
        <section className={classes.Carousel}>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <img className={classes.CarouselImg} src={Slidephoto1} alt='' />
                        </li>
                        <li className="glide__slide">
                            <img className={classes.CarouselImg} src={Slidephoto2} alt='' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Carousel;