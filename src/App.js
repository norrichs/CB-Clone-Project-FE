
import './App.css';
import { Router, Link, Switch } from 'react-router-dom';


/////////////// COMPONENTS BELOW /////////////////////
import Header from './Components/Header';
import ExpandableHeader from './Components/ExpandableHeader';
import BottomNav from './Components/BottomNav';


/////////////// PAGES BELOW /////////////////////
import Main from './Pages/Main';
import Splash from './Pages/Splash';
import Bag from './Pages/Bag';






function App() {

  return (
    <div className="App">
      {/* <Switch> */}
        <Header/>
        <ExpandableHeader/>
        <Splash/>
        
        
        <Main/>
        <Main/>
        <Main/>
        
        <BottomNav/>
        <Bag/>
        {/* </Switch> */}
    </div>
  );
}

export default App;