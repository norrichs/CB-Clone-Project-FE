import React from "react";
import StickyBuy from "../Components/StickyBuy";
import { useParams } from "react-router-dom";
import "../styles/Detail.scss";
// import { MdFavorite } from "react-icons/md";

const Detail = ({ awsURL, pDImgBaseURL }, props) => {
	const { a_c, g_f } = useParams();
	const [data, setData] = React.useState({});
	const [itemIndex, setItemIndex] = React.useState(0);
	const [thumbs, setThumbs] = React.useState([]);
	const [pDImages, setPDImages] = React.useState([]);
	const [sizeList, setSizeList] = React.useState([]);
	const [copyList, setCopyList] = React.useState([]);
	const [itemsArray, setItemsArray] = React.useState([]);

	let productDetailData = null;

	// Data handling function for Detail page
	//	Uses route parameters to construct backend route
	//	JSON data retrieved from database is spread to
	//	local State variables

	// option 1 - Retrieve item names from 'items' array
	//		either from 'title' field (would need reformat) or from images URL
	// option 2 - Pick a random index to get an item array element

	const getProductFamily = async () => {
		console.log("fetching: " + awsURL + `/product-family/${a_c}/${g_f}/`);
		fetch(awsURL + `/product-family/${a_c}/${g_f}/`)
			.then((res) => {
				// console.log('get families response', res)
				return res.json();
			})
			.then((data) => {
				console.log("Detail got data", data.body.Items[0]);
				productDetailData = {...data.body.Items[0]};
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
				} = data.body.Items[0];
				// console.log('rest',rest)
				// console.log('sizes fresh',sizes)
				// console.log('thumbs fresh', thumb_images)
				setData({ ...rest });
				setThumbs([
					...items.map((item) => {
						return {
							thumb: item.thumb,
							title: item.title,
						};
					}),
				]);
				// setItemIndex(Math.floor(Math.rand * items.length));
				setItemsArray([...items.map(item=>{
					const { images, ...rest} = item
					return {images: [...images], ...rest}
					
				})]);

				setPDImages([...productDetailData.items[itemIndex].images]); 
				setSizeList([...sizes]);
				setCopyList(
					copy_list.map((el) => {
						return { ...el };
					})
				);
			});
	};

	const handleSelectItem = (i) => {
		console.log('select item data', productDetailData)
		setItemIndex(i)
		setPDImages([...itemsArray[i].images])
	}

	// Copy List Display
	//	Constructs a div / span - based table of product copy / info

	const copyListDisplay = copyList.map((el, i) => {
		return (
			<li>
				<div>
					<span>{el.title}</span>
					<span>--</span>
					<span>{el.copy}</span>
				</div>
			</li>
		);
	});

	// Product Detail Display :
	//	Collates larger-sized image for display on Detail page
	//	TODO add some logic to handle new data-set.
	//		New file names include a post-fix denoting a 'style'
	//		Default is going to need to include that style postfix
	//		Need to fix backend data, and then implement the logic to deal with it

	const pDDisplay = pDImages.map((image, i) => {
		return (
			<div key={i} className={`pd${i + 1} image-container`}>
				<img src={`${pDImgBaseURL}details/${image}`} />
			</div>
		);
	});

	React.useEffect(() => {
		getProductFamily();
	}, []);
	// console.log("sizes array",sizeList)
	// console.log('thumb array', thumbs)
	return (
		<div className="product-detail">
			<section className="product-display">
				{pDDisplay}
				<div className="product-content">
					<div>
						<h2>{data.copy_desc}</h2>
						<ul>{copyListDisplay}</ul>
					</div>
				</div>
			</section>
			<StickyBuy
				thumbs={thumbs}
				data={data}
				sizes={sizeList}
				pDImgBaseURL={pDImgBaseURL}
				handleSelectItem={handleSelectItem}
				itemIndex={itemIndex}
			/>
		</div>
	);
};
export default Detail;
