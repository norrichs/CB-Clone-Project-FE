import React from "react";
import "./styles/App.scss";
import "./styles/ProductCardStyling.scss";
import "./styles/BottomNav.scss";
import { Route, Switch } from "react-router-dom";

/////////////// COMPONENTS BELOW /////////////////////
import Header from "./Components/Header.jsx";
// import ExpandableHeader from "./Components/ExpandableHeader.jsx";
import BottomNav from "./Components/BottomNav.jsx";

/////////////// PAGES BELOW /////////////////////
import Main from "./Pages/Main.jsx";
import Splash from "./Pages/Splash.jsx";
import Bag from "./Pages/Bag.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Detail from "./Pages/Detail.jsx";
// import { HiTranslate } from "react-icons/hi";

function App() {
	const awsURL = "https://39tcx2hv1l.execute-api.us-east-2.amazonaws.com/dev";
	const imgBaseURL = "https://bc-clone-images-2.s3.us-east-2.amazonaws.com/group/";
	const pDImgBaseURL = "https://bc-clone-images-2.s3.us-east-2.amazonaws.com/";
	
		return (
			<div className="App">
			<Header/>
			{/* <HeaderDropDown isShown={isShown}/>
			<ExpandableHeader /> */}
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
