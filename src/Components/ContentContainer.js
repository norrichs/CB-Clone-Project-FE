import React from "react";
import "../styles/ContentContainer.scss";

const ContentContainer = (props) => {
	return (
		<div className="content-container">
			{/* <h2>{`${params.audience}/${params.category}/${params.group}`}</h2> */}
			<section className="content">{props.children}</section>
		</div>
	);
};

export default ContentContainer;
