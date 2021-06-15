import react from 'react'
import { GiPlainCircle } from 'react-icons/gi'
import { MdFavorite } from 'react-icons/md'

import { useParams } from 'react-router';

import {link} from 'react-router-dom'
    //  {/* <ChatButton/> */}
    //  {/* <FilterAndSortModal/> */}
    //  {/* <ProductCard/> */}
    //  {/* <ProductCardFavorite/> */}
    //  {/* <ReturnToTopButton/> */}
    //  {/* <ShowingSticky/> */}
    //  {/* <SideBarNav/> */}
    //  {/* <SignInModal/> */}
    //  {/* <StikyFilterHeader/> */}



import ContentContainer from '../Components/ContentContainer'
import ProductCard from '../Components/ProductCard'


// import ChatButton from './Componets/ChatButton';
// import FilterAndSortModal from './Componets/FilterAndSortModal';
// import ProductCard from './Componets/ProductCard';
// import ProductCardFavorite from './Componets/ProductCardFavorite';
// import ReturnToTopButton from './Componets/ReturnToTopButton';
// import ShowingSticky from './Componets/ShowingSticky';
// import SideBarNav from './Componets/SideBarNav';
// import SignInModal from './Componets/SignInModal';
// import StikyFilterHeader from './Componets/StickyFilterHeader.jsHamburgerDropdown';



// console.log('test');

const Main = ({url}, props) => {
    // console.log('this is the props', props)
    // console.log(url)
    console.log('this is the useParams', useParams());
    const {audence, category, group } = useParams()

    const getProduct = () => {
        fetch(url + 'audience')
        .then((res) => res.json())
        .then((data) => {
            console.log("received user data", data.data);
        })
    }
    


    
    return (
        <>
        <h1>this is the Main PAGE</h1>
        <ContentContainer>
            <p>/:audience</p>
        </ContentContainer>

        <ContentContainer>
            <p>/:audience/:category</p>
        </ContentContainer>

        <ContentContainer>
        <p>/:audience/:category/:group</p>
        {ProductCard}
        <h3>this is where the product Card will go</h3>
        
        <div class="card-container">
            <div class="card-image-container">
                <img  class='card-image' src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1623788815/Portfolio%20Project/HM%20re-create%20project/kids_clothing_tops-t-shirts_2-pack-Cotton-Henley-ShirtsModel_01_ekvkm5.jpg"/>
            </div>
            <div id="card-info">
            {/* <AiOutlineHeart/> */}
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


        </ContentContainer>
        </>
    )
}
// Main()
export default Main
