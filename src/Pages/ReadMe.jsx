import React from "react";
import "../styles/ReadMe.scss";

const ReadMe = () => {
	return (
		<section class="readme-copy">
			<h2>H & M Clone - Readme</h2>
			<p>
				This site was developed as an excercise for the
				<a href="http://www.generalassemb.ly">General Assembly</a>
				Software Engineering Intensive in June 2021. It is a partial
				reproduction of the
				<a href="https://www2.hm.com/en_us/index.html">
					H & M ecommerce site
				</a>
			</p>
			<h3>Stack:</h3>
			<ul>
				<li>
					Backend: AWS API, Lambda functions, dynamoDB, S3 image
					storage
				</li>
				<li>
					Frontend: React, <a href="https://sass-lang.com/">Sass</a>,{" "}
					<a href="https://react-icons.github.io/react-icons">
						React-icons
					</a>
				</li>
			</ul>
			<h3>Data:</h3>
			<ul>
				<li>
					Custom data-scraping scripts were developed to generate
					structured data representing a good portion of the H & M
					site. This site is rendered from that structured data and
					downloaded images.
				</li>
				<li>
					Approximately 71.2k images were scraped and are being used
					here.
				</li>
			</ul>
			<h3>Implemented Features:</h3>
			<ul>
				<li>
					Reproduction header with dropdown and dynamic navigation
					menus. (look for the "Shop by Category" section)
				</li>
				<li>Dynamically generated sidebar nav with nested menus</li>
				<li>Dynamic database queries keyed to route parameters</li>
				<li>Error handling (omit data with missing images, etc)</li>
				<li>
					Dynamically generated Product Detail pages showing sales
					copy and product images, with a custom size selection
					interface
				</li>
			</ul>
			<h3>To Do:</h3>
			<ul>
				<li>Auth and session tracking</li>
				<li>Favorites page</li>
				<li>Shopping bag page</li>
				<li>Product filters</li>
				<li>
					Product reviews (I have the data, just need the frontend!)
				</li>
				<li>
					Fill gaps in backend data. I'll do this by implementing a
					Puppeteer script to discover all routes that don't return
					expected data and produce a listing of original data to
					re-scrape
				</li>
				<li>Refactor for improved accessibility</li>
			</ul>
			<h3>More</h3>
			<ul>
				<li>Frontend Github</li>
				<li>
					Backend Github (to-do. currently all backend code is only in
					AWS)
				</li>
				<li><a href="https://www.notion.so/Capstone-project-17f9e9fa107d40f09d4470685e357840">Planning Notion</a></li>
				<li>This site was developed in collaboration with <a href="https://github.com/Cody-Durham">Cody Durham</a></li>
				<li>
					<a href="https://norrichs.com">My Portfolio</a>
				</li>
			</ul>
		</section>
	);
};
export default ReadMe;
