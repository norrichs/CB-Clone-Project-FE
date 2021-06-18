import React from 'react';
import './styles/App.scss'
import './styles/ProductCardStyling.scss'
import './styles/BottomNav.scss'
import { Route, Switch } from 'react-router-dom';


/////////////// COMPONENTS BELOW /////////////////////
import Header from './Components/Header';
import ExpandableHeader from './Components/ExpandableHeader';
import BottomNav from './Components/BottomNav';


/////////////// PAGES BELOW /////////////////////
import Main from './Pages/Main';
import Splash from './Pages/Splash';
import Bag from './Pages/Bag';
import Favorites from './Pages/Favorites'

function App() {
  const awsURL = 'https://ccexp5wwrk.execute-api.us-east-2.amazonaws.com/dev';

  // const [audience, setAudience] = React.useState([]);
  // const [category, setCategory] = React.useState([]);
  // const [group, setGroup] = React.useState([]);
  // const [bag, setBag] = React.useState([])
  // const [showExpandableHeader, setShowExpandableHeader] = React.useState(false)
  
////////// CRUD FUNCTIONS HERE ///////////////
// const getProduct = () => {
//   fetch(url)
//   .then( (response) => response.json() )
//   .then((data) => setProduct(data.body))
//   console.log(url)
// }
// const getAudience = async () => {
//   const response = await fetch(url + '/')
//   console.log(response) 
//   const data = await response.json()
//   console.log('this is the data', data)
//   setAudience(data)
// }

// const getCategory = async () => {
//   const response = await fetch(url + '/:')
//   console.log(response) 
//   const data = await response.json()
//   console.log('this is the data', data)
//   setCategory(data)
// }
// const revealExpandableHeader = () => {}



  return (
    <div className="App">
        <Header/>
        <ExpandableHeader/>
      <Switch>
        {/* may not need the routerProps in the the render prop */}
        <Route exact path="/">
          <Splash
          />
        </Route>
        <Route exact path="/:audience">
          <Main
            awsURL={awsURL}
            />
        </Route>
        <Route exact path="/:audience/:category">
          <Main
            awsURL={awsURL}/>
        </Route>

        <Route exact path="/:audience/:category/:group">
          <Main
            awsURL={awsURL}/>
        </Route>

        <Route exact path="/bag">
          <Bag/>
        </Route>
        
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
      <BottomNav/>

    </div>
  );
}

export default App;
