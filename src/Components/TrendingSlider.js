// import React {useState,} from 'react'
import { useEffect, useState } from 'react';
import '../styles/TrendingSlider.scss'


const TrendingSlider = () => {
    const trendingImages = [
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_tops_Ribbed-Crop-Top_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_tunics_Voluminous-Poplin-Tunic_00.jpg", 
      
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_denim-shirts_Oversized-Denim-Shirt_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_denim-shirts_Denim-Shirt_00.jpg",
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_tops_Viscose-V-neck-T-shirt_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_pants-leggings_Capri-Leggings_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_chinos-slacks_Creased-Pants_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_paperbag-pants_Paper-bag-Pants_00.jpg",
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_jumpsuits-rompers_overalls_Denim-Overalls_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_pants-leggings_Rib-knit-Pants_00.jpg",
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_high-waisted_Joggers_00.jpg",
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_jumpsuits-rompers_overalls_Denim-Carpenter-Overalls_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_high-waisted_Patterned-Pants_00.jpg", 
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_maternity-clothes_tops_MAMA-Cotton-Tank-Top_00.jpg",
    
        "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_socks-tights_leggings_Dotted-Tights_00.jpg",
    
    ];

    let [randomImage, setRandomImage] = useState(null)
    
    const getRandomImage = () => {
        let randomImage = trendingImages[ Math.floor(Math.random() * trendingImages.length)]
        console.log('testing', randomImage)
        return randomImage
    }
    
    
    useEffect( () => {setRandomImage(getRandomImage())},[])
    return (
            
        <div className="trending-container-heading">
            <h3>Trending right now</h3>

        <div className="trending-container slider">

            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_tops_Ribbed-Crop-Top_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Classic</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_tunics_Voluminous-Poplin-Tunic_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>New Arrivals</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_denim-shirts_Denim-Shirt_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Tops</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_tops_Viscose-V-neck-T-shirt_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_pants-leggings_Capri-Leggings_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Bottoms</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_chinos-slacks_Creased-Pants_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Stretch</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_paperbag-pants_Paper-bag-Pants_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Joggers</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_jumpsuits-rompers_overalls_Denim-Overalls_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Overalls</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_pants-leggings_Rib-knit-Pants_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Button</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_high-waisted_Joggers_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Sweats</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_jumpsuits-rompers_overalls_Denim-Carpenter-Overalls_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Styles</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_pants_high-waisted_Patterned-Pants_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>PJ's</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_maternity-clothes_tops_MAMA-Cotton-Tank-Top_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Expecting</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_socks-tights_leggings_Dotted-Tights_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Women</p>
                    <p>Business</p>
                </div>
             </div>

    
        </div>




        </div>
    )
}

export default TrendingSlider