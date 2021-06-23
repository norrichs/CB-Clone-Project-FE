import React from "react";
import "./styles/App.scss";
import "./styles/ProductCardStyling.scss";
import "./styles/BottomNav.scss";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import HeaderDropDown from "./Components/HeaderDropDown";

/////////////// COMPONENTS BELOW /////////////////////
import Header from "./Components/Header";
import ExpandableHeader from "./Components/ExpandableHeader";
import BottomNav from "./Components/BottomNav";

/////////////// PAGES BELOW /////////////////////
import Main from "./Pages/Main";
import Splash from "./Pages/Splash";
import Bag from "./Pages/Bag";
import Favorites from "./Pages/Favorites";
import Detail from "./Pages/Detail";
import { HiTranslate } from "react-icons/hi";

function App() {
	const awsURL = "https://ccexp5wwrk.execute-api.us-east-2.amazonaws.com/dev";

	const imgBaseURL = "https://bc-clone-images.s3.us-east-2.amazonaws.com/group/";
	const pDImgBaseURL = "https://bc-clone-images.s3.us-east-2.amazonaws.com/detail/"

	
		// const [isShown, setIsShown] = useState(false)

		

		return (
			<div className="App">
			<Header/>
			{/* <HeaderDropDown isShown={isShown}/> */}
			<ExpandableHeader />
			<Switch>
				{/* may not need the routerProps in the the render prop */}
				<Route exact path="/">
					<Splash awsURL={awsURL} imgBaseURL={imgBaseURL}/>
				</Route>
				<Route exact path="/product/:audience">
					<Main awsURL={awsURL} imgBaseURL={imgBaseURL} />
				</Route>
				<Route exact path="/product/:audience/:category">
					<Main awsURL={awsURL} imgBaseURL={imgBaseURL} />
				</Route>

				<Route exact path="/product/:audience/:category/:group">
					<Main awsURL={awsURL} imgBaseURL={imgBaseURL} />
				</Route>

				<Route exact path="/detail/:a_c/:g_f">
					<Detail awsURL={awsURL} pDImgBaseURL={pDImgBaseURL}/>
				</Route>

				<Route exact path="/bag">
					<Bag />
				</Route>

				<Route exact path="/favorites">
					<Favorites />
				</Route>
			</Switch>
			<BottomNav />
		</div>
	);
}

export default App;
