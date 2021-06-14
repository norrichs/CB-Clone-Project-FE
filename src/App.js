import React, {useState} from 'react';
import './App.css';
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
  const url = ('https://ccexp5wwrk.execute-api.us-east-2.amazonaws.com/dev')
  const [product, setProduct] = React.useState([])

//////////// CRUD FUNCTIONS HERE ///////////////
// const getProduct = () => {
//   fetch(url)
//   .then( (response) => response.json() )
//   .then((data) => setProduct(data.body))
//   console.log(url)
// }

  return (
    <div className="App">
      {/* <Switch> */}
        {/* may not need the routerProps in the the render prop */}
        <Header/>
        <ExpandableHeader/>
        <Route exact path="/" 
        render={(routerProps) => <Splash {...routerProps}
        />} />

        <Route exact path="/:audience" 
        render={(routerProps) => <Main {...routerProps} 
        />}/>

        <Route exact path="/:audience/:category" 
        render={(routerProps) => <Main {...routerProps}
        />}/>
        
        <Route exact path="/:audience/:category/:group" 
        render={(routerProps) => <Main {...routerProps} 
        />}/>

        <Route exact path="/bag" 
        render={(routerProps) => <Bag {...routerProps}
        />} />
        
        <Route exact path="/favorites" 
        render={(routerProps) => <Favorites {...routerProps}
        />} />

        <BottomNav/>
      {/* </Switch> */}
    </div>
  );
}

export default App;