import React from 'react'
import "./emekdasliq.scss"
import Carousel from 'react-elastic-carousel';

function Emekdasliq() {

    state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }

      const { items } = this.state;
    return (
        <div>
            <div id="emekdasliq">
                <div className="container">
                    <div className="photo">
                        <img src="https://www.emanat.az/assets/images/5c42ea30-2f7b-487d-89a0-2b57517f7cfa.webp?w=640&q=75?fm=webp" alt="" />

                    </div>
                    <div className="container_slider">
                        <div className="slider_top">
                            <h1>eManat</h1>
                            <h2> ilə əməkdaşlıq</h2>
                        </div>
                        <div className="slider_buton">
                            <p>Ödəniş etdiyiniz anda xidmət təminatçısı ödəniş barəsində məlumat alacaq və məbləğ dərhal balansınıza köçürüləcək.</p>
                            <button>İndi qoşul</button>
                        </div>


                        <div className="slider">
                            <Carousel>
                            {items.map(item => <div key={item.id}>{item.title}</div>)}
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emekdasliq