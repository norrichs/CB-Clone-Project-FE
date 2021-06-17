import React from 'react';
import { GiPlainCircle } from 'react-icons/gi'
import { MdFavorite } from 'react-icons/md'

const ProductCard = () => {
    return (
        
        <div class="card-container">
            <div class="card-image-container">
                <img  class='card-image' src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1623788815/Portfolio%20Project/HM%20re-create%20project/kids_clothing_tops-t-shirts_2-pack-Cotton-Henley-ShirtsModel_01_ekvkm5.jpg"/>
            </div>
            <div id="card-info">
                <div id="card-product-name">
                    <article>T-shirt and Shorts</article>
                    <article>$14.99</article>
                        <div id="card-circles-container">
                            <span id="card-circles-1">
                                <GiPlainCircle/>
                            </span>
                            <span id="card-circles-2">
                                <GiPlainCircle/>
                            </span>
                            <span id="card-circles-3">
                                <GiPlainCircle/>
                            </span>
                        </div>
                    </div>
                <div id="card-favorite-white">
                <MdFavorite/>
                </div>
            </div>
        </div>

    )

}

export default ProductCard;