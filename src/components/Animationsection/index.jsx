import React, { useEffect } from 'react'
import "./animation.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function Animationsection() {

    useEffect(() => {
        AOS.init({duration:1000})
    }, [])

    const { t } = useTranslation();


    return (
        <div>
            <div id="animationsection">
                <div className="container">
                    <div className="infos">
                        <div data-aos="fade-up-right" className="info">
                            <h3>{t('animation_section.card1.h3')}
                                <div className="line"></div>
                            </h3>
                            <p>{t('animation_section.card1.p')} </p>
                        </div>
                        <div data-aos="fade-up-right" className="info">
                            <h3>{t('animation_section.card2.h3')}
                                <div className="line"></div>
                            </h3>

                            <p>{t('animation_section.card2.p')}</p>
                        </div>
                        <div data-aos="fade-up-right" className="info">
                            <h3>{t('animation_section.card3.h3')}
                                <div className="line"></div>
                            </h3>
                            <p>{t('animation_section.card3.p')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animationsection