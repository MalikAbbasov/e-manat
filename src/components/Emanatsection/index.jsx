import React from 'react'
import "./emanat.scss"
import { useTranslation } from 'react-i18next'

function Emanatsection() {

    const {t} = useTranslation()

    return (
        <div>
            <div id="emanatsection">
                <div className="container">
                    <div className="container_up">
                        <div className="text">
                            <h1>{t('emanatsection.text.h1')} </h1>
                            <h2>{t('emanatsection.text.h2')}</h2>
                            <img src="https://www.emanat.az/img/home-star.png?w=256&q=75?fm=webp" alt="" />
                        </div>

                    </div>
                    <div className="container_down">
                        <div className="down_left">
                            <div className="card">
                                <img src="https://www.emanat.az/assets/images/be79c4b0-ff4a-424e-8562-ec2c758e2d01.svg?w=96&q=75?fm=webp" alt="" />
                                <h5>{t('emanatsection.card1.h5')}</h5>
                                <p>{t('emanatsection.card1.p')} <a href="https://www.emanat.az/az/faq">{t('emanatsection.card1.a')}</a></p>
                            </div>
                            <div className="card">
                                <img src="https://www.emanat.az/assets/images/a418c9f0-8e5a-4fdd-919e-464e86abea46.svg?w=48&q=75?fm=webp" alt="" />
                                <h5>{t('emanatsection.card2.h5')}</h5>
                                <p>{t('emanatsection.card2.p')}</p>
                            </div>
                            <div className="card">
                                <img src="https://www.emanat.az/assets/images/23f56d1a-3fba-4849-86ec-d3cc40e47598.svg?w=48&q=75?fm=webp" alt="" />
                                <h5>{t('emanatsection.card3.h5')}</h5>
                                <p>{t('emanatsection.card3.p')}</p>
                            </div>
                        </div>
                        <div className="down_center">
                            <img src="https://www.emanat.az/assets/images/565692c4-8ba0-4787-9196-2a3a15bdf381.webp?w=1200&q=75?fm=webp" alt="" />
                        </div>
                        <div className="down_right">
                            <div className="card">
                                <img src="https://www.emanat.az/assets/images/9f87abe0-60df-4882-82a8-53c69ab73f68.svg?w=96&q=75?fm=webp" alt="" />
                                <h5>{t('emanatsection.card4.h5')}</h5>
                                <p>{t('emanatsection.card4.p')}</p>
                            </div>
                            <div className="card">
                                <img src="https://www.emanat.az/assets/images/3a509c51-7633-4c78-a644-2abf3c0b2749.svg?w=96&q=75?fm=webp" alt="" />
                                <h5>{t('emanatsection.card5.h5')}</h5>
                                <p>{t('emanatsection.card5.p')}</p>
                            </div>
                            <div className="card">
                                <img src="https://www.emanat.az/assets/images/cab38690-6b52-4897-9033-fcec1c52f453.svg?w=96&q=75?fm=webp" alt="" />
                                <h5>{t('emanatsection.card6.h5')}</h5>
                                <p>{t('emanatsection.card6.p')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emanatsection