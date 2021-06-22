import React from "react";
// import ThumbSlider from "./ThumbSlider";
// import { Link } from "react-router-dom";
import "../styles/Detail.scss";
import { MdFavorite } from "react-icons/md";
import SelectSize from '../Components/SelectSize'

const StickyBuy = ({ data, thumbs, sizes ,pDImgBaseURL}, props) => {
	const [sizeSelectShown, setSizeSelectShown] = React.useState(null)
	// console.log('sticky sizes', sizes)
	// console.log("sticky buy data->", data);
	const thumbBaseURL = "/images/";

	const thumbDisplay = thumbs.map((thumb, i) => {
		// console.log(thumbBaseURL + thumb);
		return (
			<li key={i}>
				<img alt="thumb" src={pDImgBaseURL + thumb} />
			</li>
		);
	});
	const handleSelectSizeShown = () => {
		console.log('select status', sizeSelectShown)
		if(sizeSelectShown){
			console.log('setting false')
			setSizeSelectShown(false)
		}else{
			console.log('setting true')
			setSizeSelectShown(true)
		}
	}
	React.useEffect(()=>{
		setSizeSelectShown(false)
	},[])
	return (
		<div className="sticky-container">
			<section className="sticky-buy">
				<header>
					<h2>{data.product_family}</h2>
					<span id="card-favorite-white">
						<MdFavorite />
					</span>
				</header>
				<form>
					<h3>$ {data.price}</h3>
					<label>Styles</label>
						<div className="thumb-slider">
						<ul>{thumbDisplay}</ul>
					</div>
					<div>
						{/* <span>icon</span> */}
						<span>Find in-store</span>
					</div>
					<div className="size-selector" onClick={handleSelectSizeShown}>
						Select size
						{sizeSelectShown 
							? (<SelectSize 
								show={sizeSelectShown} 
								sizes={sizes} 
								handleSelectSizeShown={handleSelectSizeShown}
								/>) 
							: null}
					</div>
					<input type="submit" className="add-button" value="Add"/>
				</form>
			</section>
		</div>
	);
};
export default StickyBuy;
