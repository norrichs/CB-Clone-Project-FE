import react from 'react'
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
        </ContentContainer>
        </>
    )
}
// Main()
export default Main
