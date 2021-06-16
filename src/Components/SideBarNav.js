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
	const productTree = [
		{
			women: [
				{ swimwear: ["bikini-sets", "swimsuits", "beachwear"] },
				{ skirts: ["short-skirts"] },
			],
		},
		{
			men: [
				{
					"suits-blazers": [
						"waistcoats",
						"sport-coats-jackets",
						"suits",
					],
				},
				{ underwear: ["briefs"] },
			],
		},
		{
			kids: [
				{ outerwear: ["jackets", "vests", "snowsuits"] },
				{ clothing: ["tops-t-shirts"] },
			],
		},
	];

	// {console.log("audience", audience[Object.keys(audience)[0]])}
	const sbn = productTree.map((audience, i) => {
		return (
			<li key={i}>
				{/* <h3>{Object.keys(audience)[0]}</h3> */}
				<ul>
					{audience[Object.keys(audience)[0]].map(
						(category, i) => {
							return (
								<li key={i}>
                                    <NavLink to={`/${Object.keys(audience)[0]}/${Object.keys(category)[0]}`}>{Object.keys(category)[0]}</NavLink>
									<ul>
										{category[Object.keys(category)[0]].map((group,i)=>{
                                            return (
                                                <li className="side-nav-group" key={i}>
                                                    <NavLink 
                                                        to={`/${Object.keys(audience)[0]}/${Object.keys(category)[0]}/${group}`}
                                                        activeClassName={"active-navlink"}
                                                    >
                                                        {group}
                                                    </NavLink>
                                                </li>
                                            )
                                        })}
									</ul>
								</li>
							);
						}
					)}
				</ul>
			</li>
		);
	});

	return (
		<nav className="sidebar-nav">
            <h2>New Arrivals</h2>
            <ul>
                <li><NavLink activeClassName={"active-navlink"} to="/products">View All</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/clothes">Clothes</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/shoes-and-accessories">Shoes and Accessories</NavLink></li>
            </ul>
            <h2>Offers & Deals</h2>
            <ul>
                <li><NavLink activeClassName={"active-navlink"} to="/sale">Up to 50% off</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/sale">Tees up to 60% off</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/sale">Hoodies & Sweatshirts from $12.99</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/sale">Pants from $9.99</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/sale">Multipacks from $9.99</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/sale">Student Discount: Get 15% off</NavLink></li>
            </ul>
            <h2>Trending Now</h2>
            <ul>
                <li><NavLink activeClassName={"active-navlink"} to="/sale">The Summer Shop</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/linen">Linen Clothing</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/heights">In the Heights</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/blank">Blank Staples: Wholesale</NavLink></li>
            </ul>
            <h2>Shop by Category</h2>
            <li><NavLink activeClassName={"active-navlink"} to="/products">View All</NavLink></li>
			{sbn}
            <h2>Shop by Concept</h2>
            <ul>
                <li><NavLink activeClassName={"active-navlink"} to="/men">H&M Men</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/modern">Modern Classic</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/casual">Casual Wear</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/divided">Divided</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/basics">Basics</NavLink></li>
            </ul>
            <h2>Sustainability</h2>
            <ul>
                <li><NavLink activeClassName={"active-navlink"} to="/conscious">View Products</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/care">H&M Take Care</NavLink></li>
                <li><NavLink activeClassName={"active-navlink"} to="/learn">Learn More</NavLink></li>
            </ul>
            <h2>Gift Cards</h2>
            <ul><li>GiftCards</li></ul>
		</nav>
	);
};

export default SideBarNav;
