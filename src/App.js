import { Redirect, Route, Switch } from 'react-router-dom';

import FiltersSwiper from './components/Layout/FiltersSwiper';
import Header from './components/Layout/Header';
import ProductsList from './components/Products/ProductsList';
import MensFashion from './components/Layout/MenFashion/MensFashion';
import ProductDetails from './components/Layout/ProductDetails/ProductDetails';
import './App.css';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Slider from './components/UI/Slider';
import FilterItems from './components/Layout/FilterItems/FilterItems';
import Footer from './components/Layout/Footer';
import SearchItems from './components/UI/Search/searchItems';

function App() {
  return (
    <CartProvider>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/product" />
        </Route>

        <Route path="/product/:productId" exact>
          <ProductDetails />
        </Route>

        <Route path="/filter-items/:filterName" exact>
          <FilterItems />
        </Route>

        <Route path="/cart" exact>
          <Cart />
        </Route>

        <Route path={`/search/:searchName`}>
          <SearchItems />
        </Route>

        <Route path="/product">
          <Slider />
          <FiltersSwiper />
          <ProductsList />
          <MensFashion />
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
