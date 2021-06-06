import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Puerto Meraki" />
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
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
