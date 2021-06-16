import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Puerto Meraki" />
        <ItemDetailContainer />
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, placeat eveniet aliquam minus qui debitis, perferendis optio, facilis atque dignissimos molestiae cumque iste impedit doloribus pariatur modi necessitatibus laborum consectetur.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, placeat eveniet aliquam minus qui debitis, perferendis optio, facilis atque dignissimos molestiae cumque iste impedit doloribus pariatur modi necessitatibus laborum consectetur.</p>
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
