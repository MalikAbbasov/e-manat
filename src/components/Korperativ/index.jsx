import React from 'react'
import "./korperativ.scss"
import { useTranslation } from 'react-i18next'

function Korperativ() {
    const {t} = useTranslation()
    return (
        <div>
            <div id="korperativ">
                <div className="container">
                    <div className="text">
                        <h1>{t('korperativ.h1-evvel')} <span>{t('korperativ.span')}</span> {t('korperativ.h1-sonra')}</h1>
                        <p>{t('korperativ.p')}</p>
                        <button>{t('korperativ.button')}</button>
                    </div>
                    <div className="photo">
                        <img src="https://www.emanat.az/assets/images/014c11cf-c856-484d-97e5-7ad731aae49d.png?w=256&q=75?fm=webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Korperativ