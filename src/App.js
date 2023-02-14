
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <>
     
     <NavBar />
     {/* ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js */} 
     <ItemListContainer/>

    </>
  )
}

export default App;
