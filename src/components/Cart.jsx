import { useContext } from "react"
import { Link, useNavigate }  from "react-router-dom"
import { Container, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import iconEmptyCart from "../assets/icon-empty-cart.png"
import iconTrash from "../assets/icon-trash.png"

export const Cart = () => {
  const { cartList, decrementQuantity, incrementQuantity, removeItem, clearCart, totalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  const handleBackToMenu = () => navigate("/")
  const handleGoToCheckout = () => navigate("/checkout")

  if (cartList.length === 0) {
    return (
      <Container className="app-content">
        <h1 className="title-category">CARRITO</h1>
        <h2 className="title-category">Tu carrito está vacío :(</h2>
        <div className="empty-cart-container">
          <div>
            <img className="img-empty-cart" src={iconEmptyCart} alt="Carrito vacío" />
            <Button className="btn-back-menu d-block" onClick={handleBackToMenu}>Volver al menú</Button>
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container className="app-content">
      <h1 className="title-category">CARRITO</h1>
      <div className="table-cart-container">
        <table className="section-table-cart">
          <thead>
            <tr>
              <th className="section-cart" colSpan="4">MENÚ</th>
              <th className="section-cart" colSpan="2">PRECIO</th>
              <th className="section-cart" colSpan="3">CANTIDAD</th>
              <th className="section-cart" colSpan="2">SUBTOTAL</th>
              <th className="section-cart" colSpan="1"></th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((cartItem) => (
              <tr key={cartItem.id}>
                <td className="divider-card-cart" colSpan="4">
                  <Link to={`/item/${cartItem.id}`} className="info-card-cart">
                    <img className="img-card-cart" src={cartItem.image} alt={cartItem.title} />
                    <div>
                      <p className="text-card-cart">{cartItem.title}</p>
                      <p className={`text-card-cart category-card d-inline ${cartItem.categoryId === "vegetariano" ? "vegetarian-category-card" : "vegan-category-card"}`}>
                        {cartItem.categoryId}
                      </p>
                    </div>
                  </Link>            
                </td>
                <td className="text-card-cart text-center divider-card-cart" colSpan="2">${cartItem.price}</td>
                <td className="text-card-cart text-center divider-card-cart" colSpan="3">
                  <Button className="btn-count-cart" onClick={() => decrementQuantity(cartItem.id)} disabled={cartItem.stock === 0}>-</Button>
                  {cartItem.quantity}
                  <Button className="btn-count-cart" onClick={() => incrementQuantity(cartItem.id)} disabled={cartItem.stock === 0}>+</Button>
                </td>
                <td className="text-card-cart text-center divider-card-cart" colSpan="2">${cartItem.quantity * cartItem.price}</td>
                <td className="divider-card-cart" colSpan="1">
                  <Button className="btn-delete-cart" onClick={() => removeItem(cartItem.id)}>                    
                    <img src={iconTrash} alt="Eliminar" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-center" colSpan="4">
                <Button className="btn-empty-cart" onClick={clearCart}>Vaciar carrito</Button>
              </td>   
              <td className="total-price-cart text-center" colSpan="4">TOTAL: ${totalPrice()}</td>          
              <td className="text-center" colSpan="4">
                <Button className="btn-continue-buy" onClick={handleGoToCheckout}>Continuar compra</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center" colSpan="12">
                <Button className="btn-back-menu" onClick={handleBackToMenu}>Volver al menú</Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Container>
  )
}