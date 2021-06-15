import React, {useState} from 'react';
import './App.css';
import './styles/App.scss'

// import './App.scss';

// import '../src/styles/App.scss'
import { Route, Link, Switch } from 'react-router-dom';



/////////////// COMPONENTS BELOW /////////////////////
import Header from './Components/Header';
import ExpandableHeader from './Components/ExpandableHeader';
import BottomNav from './Components/BottomNav';


/////////////// PAGES BELOW /////////////////////
import Main from './Pages/Main';
import Splash from './Pages/Splash';
import Bag from './Pages/Bag';
import Favorites from './Pages/Favorites'





// to set the user state of the page

function App() {
  const url = ('https://ccexp5wwrk.execute-api.us-east-2.amazonaws.com/dev/product/men/suits-blazers/suits')
  const [audience, setAudience] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [group, setGroup] = React.useState([]);
  const [bag, setBag] = React.useState([])
  
  
////////// CRUD FUNCTIONS HERE ///////////////
// const getProduct = () => {
//   fetch(url)
//   .then( (response) => response.json() )
//   .then((data) => setProduct(data.body))
//   console.log(url)
// }
const getAudience = async () => {
  const response = await fetch(url + '/')
  console.log(response) 
  const data = await response.json()
  console.log('this is the data', data)
  setAudience(data)
}

const getCategory = async () => {
  const response = await fetch(url + '/:')
  console.log(response) 
  const data = await response.json()
  console.log('this is the data', data)
  setCategory(data)
}



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
            url={url}
          />
        </Route>
        <Route exact path="/:audience/:category">
          <Main/>
        </Route>

        <Route exact path="/:audience/:category/:group">
          <Main/>
        </Route>

        <Route exact path="/bag">
          <Bag/>
        </Route>
        
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
        {/* <BottomNav/> */}
    </div>
  );
}

export default App;
