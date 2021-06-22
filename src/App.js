import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="Bienvenidos a Puerto Meraki"/>
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer greeting="Bienvenidos a Puerto Meraki"/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
