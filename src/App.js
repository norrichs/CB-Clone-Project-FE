
import './App.css';
import BottomNav from './Componets/BottomNav';
import ChatButton from './Componets/ChatButton';
import ContentContainer from './Componets/ContentContainer';
import ExpandableHeader from './Componets/ExpandableHeader';
import FilterAndSortModal from './Componets/FilterAndSortModal';
import Header from './Componets/Header';
import ProductCard from './Componets/ProductCard';
import ProductCardFavorite from './Componets/ProductCardFavorite';
import ReturnToTopButton from './Componets/ReturnToTopButton';
import ShowingSticky from './Componets/ShowingSticky';
import SideBarNav from './Componets/SideBarNav';
import SignInModal from './Componets/SignInModal';
import StikyFilterHeader from './Componets/StickyFilterHeader.jsHamburgerDropdown';



function App() {
  return (
    <div className="App">
     <BottomNav/>
     <ChatButton/>
     <ContentContainer/>
     <ExpandableHeader/>
     <FilterAndSortModal/>
     <Header/>
     <ProductCard/>
     <ProductCardFavorite/>
     <ReturnToTopButton/>
     <ShowingSticky/>
     <SideBarNav/>
     <SignInModal/>
     <StikyFilterHeader/>
    </div>
  );
}

export default App;
