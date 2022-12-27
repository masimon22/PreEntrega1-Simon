
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
        <ItemListContainer title="Bienvenido al Ecommerce de Attrezzo" />
      </header>
    </div>
  );
}

export default App;
