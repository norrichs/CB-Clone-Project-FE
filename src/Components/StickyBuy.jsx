import React from "react";
import "../styles/Detail.scss";
import { MdFavorite } from "react-icons/md";
import SelectSize from "../Components/SelectSize";

const StickyBuy = (
	{ data, thumbs, sizes, pDImgBaseURL, handleSelectItem, itemIndex },
	props
) => {
	const [sizeSelectShown, setSizeSelectShown] = React.useState(null);

	const thumbDisplay = thumbs.map((thumb, i) => {
		return (
			<li key={i} onClick={() => handleSelectItem(i)}>
				<img
					alt={thumb.title}
					src={pDImgBaseURL + "thumbs/" + thumb.thumb}
					class={`thumb ${itemIndex !== i || 'selected-thumb'}`}
				/>
			</li>
		);
	});

	const handleSelectSizeShown = () => {
		console.log("select status", sizeSelectShown);
		if (sizeSelectShown) {
			console.log("setting false");
			setSizeSelectShown(false);
		} else {
			console.log("setting true");
			setSizeSelectShown(true);
		}
	};
	React.useEffect(() => {
		setSizeSelectShown(false);
	}, []);
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
					<div
						className="size-selector"
						onClick={handleSelectSizeShown}
					>
						<span>Select size</span>
						<span>{"\u2304"}</span>
						{sizeSelectShown ? (
							<SelectSize
								show={sizeSelectShown}
								sizes={sizes}
								handleSelectSizeShown={handleSelectSizeShown}
							/>
						) : null}
					</div>
					<input type="submit" className="add-button" value="Add" />
				</form>
			</section>
		</div>
	);
};
export default StickyBuy;
