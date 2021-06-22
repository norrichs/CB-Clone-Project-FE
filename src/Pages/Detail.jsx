import React from "react";
import StickyBuy from "../Components/StickyBuy";
import { useParams } from "react-router-dom";
import "../styles/Detail.scss";
// import { MdFavorite } from "react-icons/md";

const Detail = ({awsURL, pDImgBaseURL}, props) => {
	//////// Dummy Data ////////////////
	const {a_c, g_f} = useParams()
	const [data, setData] = React.useState({});
	const [thumbs, setThumbs] = React.useState([]);
	const [pDImages, setPDImages] = React.useState([]);
	const [sizes, setSizes] = React.useState([])
	const [copyList, setCopyList] = React.useState([])
	// const transformResponse = require("../data/transformResponse");
	// const rawData = require("../data/women_basics_pants-leggings_Oversized-Joggers.json");
	// const dummyData = transformResponse([rawData])[0];
	
	// console.log("raw data", rawData)
	// console.log("dummyData", dummyData);
	// console.log("data state", data);
	// console.log("images", pDImages);
	// console.log("Detail sizes", sizes)
	// console.log('route params @ detail', a_c, g_f)
	console.log('copylist state', copyList)
// dummy data



// dummy data

	////////////////////////////////
	const getProductFamily = async () => {
		console.log('fetching: '+ awsURL + `/product-family/${a_c}/${g_f}/`)
		fetch(awsURL + `/product-family/${a_c}/${g_f}/`)
			.then((res) => {
				console.log('get families response', res)
				return res.json()
			})
			.then((data)=>{
				console.log('got data', data.body.Items[0])
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
				setData({ ...rest });
				setThumbs([...thumb_images]);
				setPDImages([...detail_images]);
				setSizes([...sizes]);
				setCopyList(copy_list.map(el=>{return {...el}}))

			})
	}
	const copyListDisplay = copyList.map((el,i)=>{
		return(
			<li>
				<div>
					<span>{el.title}</span><span>--</span><span>{el.copy}</span>
				</div>
			</li>
		)
	})

	const pDDisplay = pDImages.map((image, i) => {
		return (
			<div key={i} className={`pd${i+1} image-container`}>
				<img src={`${pDImgBaseURL}${image}`} />
			</div>
		);
	});
	
	React.useEffect(() => {
		getProductFamily()
	}, []);
	return (
		<div className="product-detail">
			<section className="product-display">
				{pDDisplay}
				<div className='product-content'>
					<div>
						<h2>{data.copy_desc}</h2>
						<ul>
							{copyListDisplay}
						</ul>
					</div>

				</div>
			</section>
			<StickyBuy thumbs={thumbs} data={data} sizes={sizes} />
		</div>
	);
};
export default Detail;
