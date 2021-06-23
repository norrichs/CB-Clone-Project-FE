import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import SideBarNav from "../Components/SideBarNav";
import ChatButton from "../Components/ChatButton";
import { useParams, useLocation } from "react-router";
import ContentContainer from "../Components/ContentContainer";
import ProductCard from "../Components/ProductCard";
import '../styles/Main.scss'

const Main = ({ awsURL, imgBaseURL }, props) => {
	// console.log('this is the props', props)
	// console.log('awsurl', awsURL)
	// console.log("these are the params", useParams());
	// console.log('raw main params', useParams())
	const { audience, category, group } = useParams();
	console.log('Main.js params', audience, category, group)
	const location = useLocation()
	// console.log('location object', location)
	const [contentDisplay, setContentDisplay] = React.useState([])
	
	// console.log(awsURL + "/product/" + audience + "/" + category + "/" + group)
	const getProductFamiliesForGroup = async () => {
		// console.log('fetching: ' + awsURL + "/product/" + audience + "/" + category + "/" + group + "/")
		fetch(awsURL + "/product/" + audience + "/" + category + "/" + group)
			.then((res) => {
				// console.log('get families response', res)
				return res.json()
			})
			.then((data)=>{
				console.log('got data', data)
				setContentDisplay(data.body.Items.map((pFam, i)=> {
					// console.log('setContentDisplay product family data: ', pFam)
					return (<ProductCard 
						key={i}
						imgBaseURL={imgBaseURL} 
						pFam={{
							a_c: pFam.a_c,
							g_f: pFam.g_f,
							audience: pFam.audience,
							category: pFam.category,
							group: pFam.group,
							price: pFam.price,
							price_sale: pFam.price_sale,
							image0: pFam.images[0],
							image1: pFam.images[1],
							alt0: pFam.altText[0],
							alt1: pFam.altText[1],
							label: pFam.product_family
						}}/>)
				}))
			})
	}
	const getProductFamiliesForCategory = async () => {
		// console.log('fetching: ' + awsURL + "/product/" + audience + "/" + category + "/")
		fetch(awsURL + "/product/" + audience + "/" + category + "/")
			.then((res) => {
				// console.log('get families response', res)
				return res.json()
			})
			.then((data)=>{
				// console.log('got data', data)
				setContentDisplay(data.body.Items.map((pFam, i)=> {
					// console.log('setContentDisplay product family data: ', pFam)
					return (<ProductCard 
						key={i}
						imgBaseURL={imgBaseURL} 
						pFam={{
							audience: pFam.audience,
							category: pFam.category,
							group: pFam.group,
							price: pFam.price,
							price_sale: pFam.price_sale,
							image0: pFam.images[0],
							image1: pFam.images[1],
							alt0: pFam.altText[0],
							alt1: pFam.altText[1],
							label: pFam.product_family
						}}/>)
				}))
			})
	}

	useEffect(()=>{
		group === undefined ? getProductFamiliesForCategory() : getProductFamiliesForGroup() 
	},[location])
	return (
		<main id={'main-container'}>
            
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
 