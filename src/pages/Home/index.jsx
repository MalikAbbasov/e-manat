import React from 'react'
import Header from '../../components/Header'
import Animationsection from '../../components/Animationsection'
import Emanatsection from '../../components/Emanatsection'
import Emekdasliq from '../../components/Emekdasliq'
import Map from '../../components/Map'
import Komandamiz from '../../components/Komandamiz'
import Korperativ from '../../components/Korperativ'
import Ensonxeberler from '../../components/Ensonxeberler'
import Infiniteanimation from '../../components/Infiniteanimation'



function Home() {
  return (
    <div>
        <Header/>
        <Animationsection/>
        <Emanatsection/>
        <Emekdasliq/>
        <Map/>
        <Komandamiz/>
        <Korperativ/>
        <Ensonxeberler/>
        <Infiniteanimation/>
    </div>
  )
}

export default Home