import React from 'react'
import "./map.scss"
import { useTranslation } from 'react-i18next'

function Map() {
    const {t} = useTranslation()
  return (
    <div>
        <div id="map">
            <div className="container">
                <div className="text">
                    <h1> {t('map.h1')}</h1>
                    <h4>{t('map.h4')}</h4>
                    <button>{t('map.button')}</button>
                </div>
                <div className="photo">
                    <div className="image"> 
                        <img src="https://www.emanat.az/img/1.png?w=1200&q=75?fm=webp" alt="" />
                    </div>
                    <div className="image animation1">
                        <img src="https://www.emanat.az/img/2.png?w=640&q=75?fm=webp" alt="" />
                    </div>
                    <div className="image animation2">
                        <img src="https://www.emanat.az/img/3.png?w=640&q=75?fm=webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map