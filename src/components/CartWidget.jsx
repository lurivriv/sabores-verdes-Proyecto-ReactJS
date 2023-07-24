import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import iconCartWidget from "../assets/icon-cart.png"

export const CartWidget = () => {
    const { cartList } = useContext(CartContext)
    const navigate = useNavigate()

    const handleViewCart = () => navigate("/cart")

    const totalItems = cartList.reduce((acc, cartItem) => acc + cartItem.quantity, 0)

    return (
        <button className="btn-cart-widget" onClick={handleViewCart}>
            <img className="icon-cart-widget" src={iconCartWidget} alt="Carrito" />
            {cartList.length > 0 && <span className="counter-cart-widget">{totalItems}</span>}
        </button>
    )
}

