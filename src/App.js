import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContainerCardItems from './components/Items/containerCardItems';


function App() {
  return (
    <>
     
     <NavBar />
     <ContainerCardItems />
     
     
     {/* ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js */} 
     <ItemListContainer greeting={'Bienvenidos al morondanga'}/>

    </>
  );
}

export default App;
