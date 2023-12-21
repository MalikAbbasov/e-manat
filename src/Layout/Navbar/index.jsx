import React from 'react'
import "./navbar.scss"
function Navbar() {
    return (
        <div>
            <div id="navbar">
                <div className="color"></div>
                <div className="container">
                    <div className="container_pages">
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="pages">
                            <ul>
                                <li>Ana Səhifə</li>
                                <li>Haqqımızda </li>
                                <li>Əməkdaşlıq</li>
                                <li>Karyera</li>
                                <li>Terminal xəritəsi</li>
                            </ul>
                        </div>
                        <div className="language">
                            <select name="" id="">
                                <option value="az">Az</option>
                                <option value="eng">Eng</option>
                                <option value="ru">Ru</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <div className="input-aside">
                    <div className="search_input">
                        <div className="inpt">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder='Axtarış' />
                        </div>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div className="down"></div>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar