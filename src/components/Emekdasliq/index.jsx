import React from 'react'
import "./emekdasliq.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

function Emekdasliq() {

    const {t} = useTranslation()

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3500,
        cssEase: "linear"
      };
    
    return (
        <div>
            <div id="emekdasliq">
                <div className="container">
                    <div className="photo">
                        <img src="https://www.emanat.az/assets/images/5c42ea30-2f7b-487d-89a0-2b57517f7cfa.webp?w=640&q=75?fm=webp" alt="" />

                    </div>
                    <div className="container_slider">
                        <div className="slider_top">
                            <h1>{t('emekdasliq.h1')}</h1>
                            <h2> {t('emekdasliq.h2')}</h2>
                        </div>
                        <div className="slider_buton">
                            <p>{t('emekdasliq.p')}</p>
                            <button>{t('emekdasliq.button')}</button>
                        </div>


                        <div className="slider">
                            <Slider {...settings}>
                                <img src="https://www.emanat.az/assets/images/764a908c-74c4-4cf7-99f9-519d0425ac18.png?w=256&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/11a7b587-9354-42a7-85c5-92805647a362.png?w=256&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/512afd7a-fc39-4a91-87af-baa28cbfa8ef.png?w=256&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/be5602aa-2393-4ea3-88a5-b48b4ed61f8a.png?w=640&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/34d62230-536d-4fbd-868e-32d9bccaac83.png?w=256&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/86c4d9a9-a1e8-4eea-98e5-f89daa9007db.png?w=256&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/6213856d-47fc-4be5-a756-041b151145cc.png?w=640&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/3d1faee9-e44a-4b5d-83a4-07f38a322582.png?w=256&q=75?fm=webp" alt="" />
                                <img src="https://www.emanat.az/assets/images/f0d7cd16-5a82-47d0-8037-489462c21259.png?w=256&q=75?fm=webp" alt="" />
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emekdasliq