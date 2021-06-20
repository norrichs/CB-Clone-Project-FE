import React from "react";
import StickyBuy from "../Components/StickyBuy";
import { Link } from "react-router-dom";
import "../styles/Detail.scss";
import { MdFavorite } from "react-icons/md";

const Detail = (props) => {
	//////// Dummy Data ////////////////
	const [data, setData] = React.useState({});
	const [thumbs, setThumbs] = React.useState([]);
	const [pDImages, setPDImages] = React.useState([]);
	const [sizes, setSizes] = React.useState([])
	const transformResponse = require("../data/transformResponse");
	const rawData = require("../data/women_basics_pants-leggings_Oversized-Joggers.json");
	const dummyData = transformResponse([rawData])[0];
	const pDBaseURL = "/images/";
	console.log("raw data", rawData)
	console.log("dummyData", dummyData);
	console.log("data state", data);
	console.log("images", pDImages);
	console.log("Detail sizes", sizes)

	////////////////////////////////////

	console.log("Loading Detail Page");
	

	const pDDisplay = pDImages.map((image, i) => {
		return (
			<div className={`pd${i+1} image-container`}>
				{/* {`Image ${i}`} */}
				<img src={`${pDBaseURL}${image}`} />
			</div>
		);
	});

	React.useEffect(() => {
		const {
			altText,
			copy_list,
			detail_images,
			images,
			sizes,
			swatchColors,
			thumb_images,
			items,
			...rest
		} = dummyData;
		// console.log('rest',rest)
		setData({ ...rest });
		setThumbs([...thumb_images]);
		setPDImages([...detail_images]);
		setSizes([...sizes]);
	}, []);
	return (
		<div className="product-detail">
			<section className="product-display">
				{pDDisplay}
				<div className='product-content'>
					<h2>{data.copy_desc}</h2>
					<div>
						<span>Title1</span>
						<span>Copy1</span>
					</div>
					<div>
						<span>Title2</span>
						<span>Copy2</span>
					</div>
					<div>
						<span>Title3</span>
						<span>Copy3</span>
					</div>
				</div>
			</section>
			<StickyBuy thumbs={thumbs} data={data} sizes={sizes} />
		</div>
	);
};
export default Detail;
