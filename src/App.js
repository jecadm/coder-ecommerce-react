import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { BrowserRouter , Route, Routes } from "react-router-dom";

import ContainerCardItems from './components/Items/containerCardItems';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ContainerCardItems/>} />
      <Route path='/item:id' element={<ContainerCardItems/>} />
      <Route path='/category:idCategory' element={<ContainerCardItems/>} />
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
