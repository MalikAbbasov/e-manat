import React from 'react'
import "./komanda.scss"
import { useTranslation } from 'react-i18next'

function Komandamiz() {
    const {t} = useTranslation()
  return (
    <div>
        <div id="komanda">
            <div className="container">
                <div className="text">
                    <h1>{t('komandamiz.h1')}</h1>
                    <p>{t('komandamiz.p')}</p>
                    <button>{t('komandamiz.button')}</button>
                </div>
                <div className="photo">
                    <img src="https://www.emanat.az/assets/images/857528a4-4244-4683-b2f4-b2230bb8fea9.webp?w=1920&q=75?fm=webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Komandamiz