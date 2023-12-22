import React, { useEffect } from 'react'
import "./animation.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Animationsection() {

    useEffect(() => {
        AOS.init({duration:1000})
    }, [])


    return (
        <div>
            <div id="animationsection">
                <div className="container">
                    <div className="infos">
                        <div data-aos="fade-up-right" className="info">
                            <h3>1000+ xidmət
                                <div className="line"></div>
                            </h3>
                            <p>Bütün mobil, kommunal, bank, internet, TV, dövlət və s. ödənişləri eManat terminallarında!</p>
                        </div>
                        <div data-aos="fade-up-right" className="info">
                            <h3>3000+ terminal
                                <div className="line"></div>
                            </h3>

                            <p>Sənə yaxın eManat ödəniş terminalında istədiyin xidmətə rahatlıqla ödəniş edə bilərsən!</p>
                        </div>
                        <div data-aos="fade-up-right" className="info">
                            <h3>Sürətli və etibarlı
                                <div className="line"></div>
                            </h3>
                            <p>eManat ilə bütün ödənişləri rahat, sürətli və etibarlı həyata keçir!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animationsection