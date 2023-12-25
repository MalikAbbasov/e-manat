import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";



function Header() {
  const { t } = useTranslation();

  return (
      <div>
        <div id="header">
          <div className="container">
            <div className="text">
              <h1>{t('header.text.h1')}</h1>
              <p>{t('header.text.p')}</p>
              <button>{t('header.text.button')}</button>
            </div>
            <div className="image">
              <img
                src="https://www.emanat.az/assets/images/0fd85708-a2ff-4300-9c9d-6bb15a1c8f9c.png?w=640&q=75?fm=webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Header;
