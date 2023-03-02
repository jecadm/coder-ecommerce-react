
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
     
     <NavBar />
     
     {/* ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js */} 
     <ItemListContainer greeting={'Bienvenidos al morondanga'}/>

    </>
  )
}

export default App;
