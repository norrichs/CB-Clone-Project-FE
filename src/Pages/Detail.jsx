import React from "react";

const Detail = (props) => {
	console.log('Loading Detail Page')
	console.log("Detail props", props.data);

	return (
		<div>
			<h1>Product detail</h1>

			{/* <StickyBuy>
			<h1>
				{props.label}
			</h1>
		</StickyBuy> */}
		</div>
	);
};
export default Detail;
