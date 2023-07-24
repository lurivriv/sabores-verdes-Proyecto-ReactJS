import { BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Cart } from "./components/Cart"
import { Checkout } from "./components/Checkout"
import { Footer } from "./components/Footer"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App