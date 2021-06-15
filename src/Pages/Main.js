import react from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
//  {/* <ChatButton/> */}
//  {/* <FilterAndSortModal/> */}
//  {/* <ProductCard/> */}
//  {/* <ProductCardFavorite/> */}
//  {/* <ReturnToTopButton/> */}
//  {/* <ShowingSticky/> */}
//  {/* <SideBarNav/> */}
//  {/* <SignInModal/> */}
//  {/* <StikyFilterHeader/> */}

import ContentContainer from "../Components/ContentContainer";

// import ChatButton from './Components/ChatButton';
// import FilterAndSortModal from './Components/FilterAndSortModal';
// import ProductCard from './Components/ProductCard';
// import ProductCardFavorite from './Components/ProductCardFavorite';
// import ReturnToTopButton from './Components/ReturnToTopButton';
// import ShowingSticky from './Components/ShowingSticky';
import SideBarNav from '../Components/SideBarNav'
// import SignInModal from './Components/SignInModal';
// import StikyFilterHeader from './Components/StickyFilterHeader.jsHamburgerDropdown';

// console.log('test');

const Main = ({ url }, props) => {
	// console.log('this is the props', props)
	// console.log(url)
	console.log("this is the useParams", useParams());
	const { audience, category, group } = useParams();

	
    
    const getProduct = () => {
		fetch(url + "audience")
			.then((res) => res.json())
			.then((data) => {
				console.log("received user data", data.data);
			});
	};

	return (
		<main>
			<h1>this is the Main PAGE</h1>
            <SideBarNav/>
			<ContentContainer>
				{`${audience}/${category}/${group}`}
			</ContentContainer>
		</main>
	);
};
// Main()
export default Main;
