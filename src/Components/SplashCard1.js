import React from 'react'
// import { useParams } from 'react-router-dom'
import '../styles/SplashCard1.scss'
import { NavLink } from 'react-router-dom'




const SplashCard1 = ({awsURL, imgBaseURL}, props) => {
    // console.log('this is the props', props); // empty object
    // console.log('testing', awsURL)
    // console.log('URL', awsURL);
    // console.log('image from url', imgBaseURL);
  
// const { audience, category, group } = useParams()
// console.log('SplashCard.js params', audience, category, group)


// const getSplashImage = async () => {
//     // console.log(awsURL + "/product/" + audience + "/" + category + "/" + group)
//     fetch(awsURL + "/product/" + audience + "/" + category + "/" + group)
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         // console.log("this is the data", data)

//     })
// }
// getSplashImage()



    return (
        <div>
            <div className="splash-card1-container">

                <div className="splash-card1-image">
                    <img alt="Splash card" src="https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s03/june_2021/1603a/1603A-3x2-array-of-sundresses-new.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"/>
                </div>

                <div className="splash-card1-heading">
                    <h2>Array of sundresses</h2>
                    <p>Add a healthy dose of vitiman D with mood-lifting yellow</p>
                </div>
                <div className="splash-card1-button">
                   <NavLink to="fake/:shopNow"><button>SHOP NOW</button></NavLink>
                </div>

            </div>
        </div>
    )

}

export default SplashCard1