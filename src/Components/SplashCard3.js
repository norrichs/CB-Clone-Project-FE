import React from 'react'
import '../styles/SplashCard3.scss'
import { NavLink } from 'react-router-dom'

const SplashCard3 = () => {

    return (
        <div>
            <div className="splash-card2-container">

                <div className="splash-card2-image">
                    <img src="https://www2.hm.com/content/dam/home_s03/april_2021/7053d/7053d-handcrafted-interior-collection-3x2-teasers.jpg"/>
                </div>

                <div className="splash-card2-heading">
                    <h2>For the love of craft</h2>
                    <p>A limited-edition collection of handmade decor</p>
                </div>
                <div className="splash-card2-button">
                    <NavLink to="fake/:shopNow"><button>SHOP NOW</button></NavLink>
                </div>

            </div>
        </div>
    )

}

export default SplashCard3