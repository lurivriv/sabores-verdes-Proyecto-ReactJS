import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="card-list">
      <Card>
        <Card.Img variant="top" src={item.pictureUrl} alt={item.title} />
        <Card.Body className="row justify-content-evenly">
          <Card.Title className="mb-3">{item.title}</Card.Title>
          <Card.Text className="col-auto text-card-list">{item.price}</Card.Text>
          <Card.Text className={`col-auto text-card-list category-card-list ${item.category === "Vegetariano" ? "vegetarian-card-list" : "vegan-card-list"}`}>
            {item.category}
          </Card.Text>        
        </Card.Body>
      </Card>
    </Link>
  )
}