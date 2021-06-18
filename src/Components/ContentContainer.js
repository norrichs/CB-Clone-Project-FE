import React from "react";
import "../styles/ContentContainer.scss";
import { useParams } from "react-router-dom";

const ContentContainer = (props) => {
	const params = useParams();

	return (
		<div className="content-container">
			<h2>{`${params.audience}/${params.category}/${params.group}`}</h2>
			<section className="content">{props.children}</section>
		</div>
	);
};

export default ContentContainer;
