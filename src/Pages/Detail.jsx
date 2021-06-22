import React from "react";
import StickyBuy from "../Components/StickyBuy";
import { useParams } from "react-router-dom";
import "../styles/Detail.scss";
// import { MdFavorite } from "react-icons/md";

const Detail = ({awsURL, pDImgBaseURL}, props) => {

	const {a_c, g_f} = useParams()
	const [data, setData] = React.useState({});
	const [thumbs, setThumbs] = React.useState([]);
	const [pDImages, setPDImages] = React.useState([]);
	const [sizeList, setSizeList] = React.useState([])
	const [copyList, setCopyList] = React.useState([])

	const getProductFamily = async () => {
		console.log('fetching: '+ awsURL + `/product-family/${a_c}/${g_f}/`)
		fetch(awsURL + `/product-family/${a_c}/${g_f}/`)
			.then((res) => {
				// console.log('get families response', res)
				return res.json()
			})
			.then((data)=>{
				console.log('Detail got data', data.body.Items[0])
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
				setThumbs([...thumb_images]);
				setPDImages([...detail_images]);
				setSizeList([...sizes]);
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
	// console.log("sizes array",sizeList)
	// console.log('thumb array', thumbs)
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
			<StickyBuy thumbs={thumbs} data={data} sizes={sizeList} pDImgBaseURL={pDImgBaseURL}/>
		</div>
	);
};
export default Detail;
