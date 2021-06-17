import React from "react";
import '../styles/ContentContainer.scss'

const ContentContainer = (props) => {
	return (
		<section>
			<h1>this is the ContentContainer</h1>
			<h2>{props.children}</h2>
		</section>
	);
};

export default ContentContainer;
