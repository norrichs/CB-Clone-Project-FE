import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/SideBarNav.scss";

const SideBarNav = (props) => {
	const navTree = [
		{ audience: "women", category: "swimwear", group: "bikini-sets" },
		{ audience: "women", category: "swimwear", group: "swimsuits" },
		{ audience: "women", category: "swimwear", group: "beachwear" },
	];

	// TODO scrape the copy text for the above values, or just set implement a formatting function

	return (
		<nav className="sidebar-nav">
            <h3>Shop by Product</h3>
			<ul>
				<li>
					<NavLink to="/women/swimwear">Swimwear</NavLink>
					<ul>
						<li>
							<NavLink to="/women/swimwear/bikini-sets">
								Bikini Sets
							</NavLink>
						</li>
						<li>
							<NavLink to="/women/swimwear/swimsuits">
								Swimsuits
							</NavLink>
						</li>
						<li>
							<NavLink to="/women/swimwear/beachwear">
								Beachwear
							</NavLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};

export default SideBarNav;
