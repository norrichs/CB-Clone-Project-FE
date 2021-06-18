import React, { useEffect } from "react";
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

const Main = ({ awsURL }, props) => {
	// console.log('this is the props', props)
	// console.log('awsurl', awsURL)
	// console.log("these are the params", useParams());
	const { audience, category, group } = useParams();

	const [contentDisplay, setContentDisplay] = React.useState([])
	
	// const getProduct = () => {
	// 	fetch(url + "audience")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log("received user data", data.data);
	// 		});
	// };
	// console.log(awsURL + "/product/" + audience + "/" + category + "/" + group)
	const getProductFamilies = async () => {
		// console.log('fetching: ' + awsURL + "/product/" + audience + "/" + category + "/" + group + "/")
		fetch(awsURL + "/product/" + audience + "/" + category + "/" + group)
			.then((res) => {
				// console.log('get families response', res)
				return res.json()
			})
			.then((data)=>{
				// console.log('got data', data)
				setContentDisplay(data.body.Items.map((pFam, i)=> <ProductCard key={i} pFam={pFam}/>))
			})
	}


	useEffect(()=>{
		getProductFamilies()
	},[])
	return (
		<main >
			<SideBarNav />
			<ContentContainer>
				{/* <h2>{`${audience}/${category}/${group}`}</h2> */}
				{contentDisplay}
			</ContentContainer>
			<ChatButton />
		</main>
	);
};

export default Main;
