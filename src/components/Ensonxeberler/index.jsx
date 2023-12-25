import React from 'react'
import { Link } from 'react-router-dom'
import "./sonxeber.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

function Ensonxeberler() {


    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    const {t} = useTranslation()


    return (
        <div>
            <div id="sonxeber">
                <div className="container">
                    <div className="xeberler">
                        <h1>{t('sonxeber.h1')}</h1>
                        <Link>{t('sonxeber.link')}</Link>
                    </div>
                    <div className="myslider">
                        <Slider {...settings}>
                            <div className="mycard">
                                <img src="https://www.emanat.az/assets/images/0e318d2e-7ac8-45dc-becf-dae918e8f16b.webp?w=750&q=75?fm=webp" alt="" />
                                <h4>{t('sonxeber.mycard1-h4')}</h4>
                            </div>
                            <div className="mycard">
                                <img src="https://www.emanat.az/assets/images/659b47b5-dad2-4711-9c7b-7e57b52e76fa.png?w=384&q=75?fm=webp" alt="" />
                                <h4>{t('sonxeber.mycard2-h4')}</h4>
                            </div>
                            <div className="mycard">
                                <img src="https://www.emanat.az/assets/images/4d7fe914-ef11-4690-9fcc-4cb9a7fa13b5.png?w=750&q=75?fm=webp" alt="" />
                                <h4>{t('sonxeber.mycard3-h4')}</h4>
                            </div>
                            <div className="mycard">
                                <img src="https://www.emanat.az/assets/images/c1452745-7baa-4483-a4ad-ac45cf8c99c3.webp?w=384&q=75?fm=webp" alt="" />
                                <h4>{t('sonxeber.mycard4-h4')} </h4>
                            </div>
                            <div className="mycard">
                                <img src="https://www.emanat.az/assets/images/78e67713-f073-470f-896b-c8991ccbe542.webp?w=750&q=75?fm=webp" alt="" />
                                <h4>{t('sonxeber.mycard5-h4')}</h4>
                            </div>
                            <div className="mycard">
                                <img src="https://www.emanat.az/assets/images/1eb82a4a-c24b-4d38-b200-4ff22130627e.webp?w=750&q=75?fm=webp" alt="" />
                                <h4>{t('sonxeber.mycard6-h4')}</h4>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ensonxeberler