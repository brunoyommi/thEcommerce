import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from './components/Text';
import NavBar from './components/NavBar';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
/>

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Text/>
    </div>
  );
}

export default App;
