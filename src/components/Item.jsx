import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="card-list">
      <Card>
        <Card.Img variant="top" src={item.image} alt={item.title} />
        <Card.Body className="row justify-content-evenly">
          <Card.Title className="mb-3">{item.title}</Card.Title>
          <Card.Text className="col-auto text-card-list">${item.price}</Card.Text>
          <Card.Text className={`col-auto text-card-list category-card ${item.categoryId === "vegetariano" ? "vegetarian-category-card" : "vegan-category-card"}`}>
            {item.categoryId}
          </Card.Text>        
        </Card.Body>
      </Card>
    </Link>
  )
}