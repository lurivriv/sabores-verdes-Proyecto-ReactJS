import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  const isInCart = (id) => cartList.some(cartItem => cartItem.id === id)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updatedCartList = cartList.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity
          }
        }
        return cartItem
      })
      setCartList(updatedCartList)
    } else {
        const cartItem = {
          ...item,
          quantity: quantity
        }
        setCartList([...cartList, cartItem])
    }
  }

  const decrementQuantity = (itemId) => {
    setCartList((prev) =>
      prev.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return {
            ...item, quantity: item.quantity - 1
          }
        }
        return item
      })
    )
  }

  const incrementQuantity = (itemId) => {
    setCartList((prev) =>
      prev.map((item) => {
        if (item.id === itemId && item.quantity < item.stock) {
          return {
            ...item, quantity: item.quantity + 1
          }
        }
        return item
      })
    )
  }

  const removeItem = (itemId) => setCartList(cartList.filter(cartItem => cartItem.id !== itemId))
  
  const clearCart = () => setCartList([])

  const totalPrice = () => cartList.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)

  return (
    <CartContext.Provider value={{ cartList, isInCart, addItem, decrementQuantity, incrementQuantity, removeItem, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}