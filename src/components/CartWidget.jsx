import IconCartWidget from "../assets/icon-cart.png"

export const CartWidget = () => {
    return (
        <button className="btn-cart-widget">
            <img className="icon-cart-widget" src={IconCartWidget} alt="Carrito" />
            <span className="counter-cart-widget">0</span>
        </button>
    )
}