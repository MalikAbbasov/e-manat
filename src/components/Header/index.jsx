import React from 'react'
import "./header.scss"

function Header() {
  return (
    <div>
        <div id="header">
            <div className="container">
                <div className="text">
                    <h1>ETİBARLI ÖDƏNİŞLƏR BİR ÜNVANDA!</h1>
                    <p>3000-DƏN ARTIQ ÖDƏNİŞ TERMİNALIMIZ VƏ İSTİFADƏÇİ DOSTU İNTERFEYSİMİZLƏ 7/24 XİDMƏTİNİZDƏYİK!</p>
                    <button>Daha ƏtraflI</button>
                </div>
                <div className="image">
                    <img src="https://www.emanat.az/assets/images/0fd85708-a2ff-4300-9c9d-6bb15a1c8f9c.png?w=640&q=75?fm=webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header