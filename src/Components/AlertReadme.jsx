import React from "react";
import { Link } from "react-router-dom";
import "../styles/AlertReadme.scss";

const AlertReadme = () => {
	const [displayState, setDisplayeState] = React.useState("closed");

	return (
		<div className="alert-wrapper">
			<aside className={`alert-readme ${displayState}`}>
				<div
					className="alert-closed-content"
					onClick={() => {setDisplayeState('open')}}
				>
					Read Me
				</div>
				<div className="alert-open-content">
					<div
						className="close-button"
						onClick={() => {setDisplayeState('closed')}}
					>
						X
					</div>
					<div>
						<p>Hi and welcome!</p>
						<p>
							This is a clone of the{" "}
							<a href="https://www2.hm.com/en_us/index.html">
								H & M ecommerce site
							</a>
							, developed as an educational excercise to practice the
							produciton of a well-realized and functional design"
						</p>
						<p>
							<Link to="/ReadMe/">Click Here</Link> for more information.
						</p>
					</div>
				</div>
			</aside>
		</div>
	);
};
export default AlertReadme;
