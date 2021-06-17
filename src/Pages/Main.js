import React from "react";
// import { Link } from "react-router-dom";
import SideBarNav from "../Components/SideBarNav";
import ChatButton from "../Components/ChatButton";

import { useParams } from "react-router";

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
import ProductCard from "../Components/ProductCard";
import '../styles/Main.scss'

// import ChatButton from './Componets/ChatButton';
// import FilterAndSortModal from './Componets/FilterAndSortModal';
// import ProductCard from './Componets/ProductCard';
// import ProductCardFavorite from './Componets/ProductCardFavorite';
// import ReturnToTopButton from './Componets/ReturnToTopButton';
// import ShowingSticky from './Componets/ShowingSticky';
// import SignInModal from './Componets/SignInModal';
// import StikyFilterHeader from './Componets/StickyFilterHeader.jsHamburgerDropdown';

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
		<main >
			<SideBarNav />
			<ContentContainer>
				{`${audience}/${category}/${group}`}
			</ContentContainer>
			<h3>this is where the product Card will go</h3>
			{ProductCard}
			<ChatButton />
		</main>
	);
};

export default Main;
