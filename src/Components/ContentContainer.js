import React from "react";
import '../styles/ContentContainer.scss'

const ContentContainer = (props) => {
	return (
		<section className="content-container">
			{props.children}
		</section>
	);
};

export default ContentContainer;
