import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
import { NavBar } from "./componentes/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <div>
          <NavBar />
          <ItemListContainer greeting="Pre Entrega 1 Aguirre" />
        </div>

    </>
 )
}

export default App
