import React, { useState } from 'react';
import "./navbar.scss"; 
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

function Navbar() {


    const [locale, setLocale] = useState(i18n.language)

    i18n.on("languageChanged", (lng)=>setLocale(i18n.language))

    const { t } = useTranslation();

    const [asideInp, setAsideInp] = useState(false)
    
    function handleInput() {
        setAsideInp(!asideInp)
    }


    const handleChange=(event)=>{
        i18n.changeLanguage(event.target.value)
      }

    return (
        <div>
            <div id="navbar">
                <div className="navbar_container">
                    <div className="color"></div>
                    <div className="container">
                        <div className="container_pages">
                            <div className="search">
                                <i onClick={handleInput} className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="pages">
                                <ul>
                                    <li>{t('navbar.pages.li1')}</li>
                                    <li>{t('navbar.pages.li2')}</li>
                                    <li>{t('navbar.pages.li3')}</li>
                                    <li>{t('navbar.pages.li4')}</li>
                                    <li>{t('navbar.pages.li5')}</li>
                                </ul>
                            </div>
                                
                                <div className="language">
                                <select name="" id="" value={locale} onChange={handleChange}>
                                    <option  value={"az"} >Az</option>
                                    <option  value={"en"} >Eng</option>
                                    <option  value={"ru"} >Ru</option>
                                    <option value="fr">Fr</option>
                                </select>
                            </div>
                                
                        </div>
                    </div>
                </div>
                <div className={`aside_input ${asideInp? "show":null}`}>
                    <div className="input-aside">
                        <div className="search_input">
                            <div className="inpt">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Axtarış' />
                            </div>
                            <i onClick={handleInput}  className=" exit_aside fa-solid fa-xmark"></i>
                        </div>
                        <div className="down"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;