import React from "react";
// import ThumbSlider from "./ThumbSlider";
import { Link } from "react-router-dom";
import "../styles/Detail.scss";
import { MdFavorite } from "react-icons/md";
import SelectSize from '../Components/SelectSize'

const StickyBuy = ({ data, thumbs, sizes }, props) => {
	console.log('sticky sizes', sizes)
	console.log("sticky buy data->", data);
	const thumbBaseURL = "/images/";
	const thumbDisplay = thumbs.map((thumb, i) => {
		console.log(thumbBaseURL + thumb);
		return (
			<li key={i}>
				<img alt="thumb" src={thumbBaseURL + thumb} />
			</li>
		);
	});

	return (
		<div className="sticky-container">
			<section className="sticky-buy">
				<header>
					<h2>{data.product_family}</h2>
					<span id="card-favorite-white">
						<MdFavorite />
					</span>
				</header>
				<h3>{data.price}</h3>
				<label>style label</label>
				<div className="thumb-slider">
					<h3>thumbs</h3>
					<ul>{thumbDisplay}</ul>
				</div>
				<div>
					<span>icon</span>
					<span>Find in-store</span>
				</div>
				<form>
					<SelectSize sizes={sizes}/>
					<button></button>
				</form>
			</section>
		</div>
	);
};
export default StickyBuy;
