import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { Footer } from "./components/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <NavBar />
      <div className="app-content">
        <ItemListContainer greeting="¡Hola! Acá va el menú" />
      </div>
      <Footer />
    </>
  )
}

export default App