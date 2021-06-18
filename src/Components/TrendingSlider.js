import react from 'react'
import '../styles/TrendingSlider.scss'

const trendingImages = [
    "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_tops_Ribbed-Crop-Top_00.jpg", 

    "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_tunics_Voluminous-Poplin-Tunic_00.jpg", 
  
    "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_denim-shirts_Oversized-Denim-Shirt_00.jpg", 

    "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_denim-shirts_Denim-Shirt_00.jpg",

    "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_tops_Viscose-V-neck-T-shirt_00.jpg", 

    "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_basics_pants-leggings_Capri-Leggings_00.jpg", 

    "https://bc-clone-images.s3.us-east-2.amazonaws.com/group women_pants_paperbag-pants_Pull-on-Linen-Pants_00.jpg", 

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






const TrendingSlider = () => {
    return (
        
        <div>
            {/* <h3>Trending right now</h3> */}

        <div className="trending-container slider">

            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            <div className="trending-single-image-container">
                <div className="trending-image">
                    <img src="https://bc-clone-images.s3.us-east-2.amazonaws.com/group/women_shirts-blouses_blouses_Balloon-sleeved-Blouse_00.jpg"/>
                </div>
                <div className="trending-image-copy">
                    <p>Baby</p>
                    <p>Newborn</p>
                </div>
             </div>
            






        </div>




        </div>
    )
}

export default TrendingSlider