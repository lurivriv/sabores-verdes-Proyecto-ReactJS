import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { ItemCount } from "./ItemCount"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ItemDetail = ({ itemDetail }) => {
  const { addItem } = useContext(CartContext)
  const [showViewCart, setShowViewCart] = useState(false)
  const navigate = useNavigate()

  const handleViewCart = () => navigate("/cart")

  const showToastMessage = (quantity) => {
    toast.info(`Agregaste ${quantity} al carrito`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      closeOnClick: false,
      closeButton: false,
      hideProgressBar: true,
      icon: false,
      className: "custom-toast"
    })
  }

  const onAdd = (quantity) => {
    addItem(itemDetail, quantity)
    setShowViewCart(true)
    showToastMessage(quantity)
  }

  return (
    <Card>
      <ToastContainer />
      <div className="card-detail">
        <Card.Img className="img-card-detail" src={itemDetail.image} alt={itemDetail.title} />
        <Card.Body className="body-card-detail">
          <Card.Title className="title-card-detail">{itemDetail.title.toUpperCase()}</Card.Title>
          <Card.Text className="text-card-detail">${itemDetail.price}</Card.Text>
          <Card.Text className={`category-card-detail ${itemDetail.categoryId === "vegetariano" ? "vegetarian-category-card" : "vegan-category-card"}`}>
            {itemDetail.categoryId}
          </Card.Text>    
          <ItemCount stock={itemDetail.stock} initial={1} onAdd={onAdd} />
          {showViewCart && (
            <Button className="btn-view-cart" onClick={handleViewCart}>Ver Carrito</Button>
          )}
        </Card.Body>
      </div>
      <div>
        <Card.Subtitle className="subtitle-card-detail">INGREDIENTES</Card.Subtitle>
        <ul className="info-card-detail">
          {itemDetail.description.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
        </ul>
      </div>
    </Card>
  )
}