import React from 'react'
import '../styles/SplashCard2.scss'
import { NavLink } from 'react-router-dom'

const SplashCard2 = () => {

    return (
        <div>
            <div className="splash-card2-container">

                <div className="splash-card2-image">
                    <img src="https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/divided_s03/may_2021/5273c/5273C-3x2-y2k-is-here-to-stay.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"/>
                </div>

                <div className="splash-card2-heading">
                    <h2>Array of sundresses</h2>
                    <p>Tank dresses, skirts & tops from $5.99</p>
                </div>
                <div className="splash-card2-button">
                    <NavLink to="fake/:shopNow"><button>SHOP NOW</button></NavLink>
                </div>

            </div>
        </div>
    )

}

export default SplashCard2