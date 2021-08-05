import 'bootstrap/dist/css/bootstrap.min.css';
import './components/app.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './components/Context';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container flex">
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/products'} exact component={ItemListContainer} />
            <Route path={'/products/category/:categoryId'} exact component={ItemListContainer} />
            <Route path={'/product/:itemId'} exact component={ItemDetailContainer} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
