import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCommerce from './components/navbar/navbarcommerce';
import ItemList from './components/itemlist/ItemList';
import ItemCount from './components/itemcount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavbarCommerce />
      <ItemList greeting={'Hola Como estas ?!'} />
      <ItemCount />
    </div>
  );
}

export default App;
