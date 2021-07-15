import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Item.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {
  // const [totalItems, setTotalItems] = useState(0);

  // const agregarAlCarrito = (unNumero) => {
  //   console.log(unNumero);
  //   setTotalItems(totalItems + unNumero);
  // }

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer/>
      {/* <h2>La cantidad de elementos en el carrito es {totalItems}</h2>
      <ItemCount 
        stock={5}
        onAdd={agregarAlCarrito}
        initial={1} /> */}
    </div>
  );
}
export default App;
