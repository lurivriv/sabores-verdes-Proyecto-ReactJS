import Card from "react-bootstrap/Card"
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({ item }) => {
  return (
    <Card >
      <div className="card-detail">
        <Card.Img className="img-card-detail" src={item.pictureUrl} alt={item.title} />
        <Card.Body className="body-card-detail">
          <Card.Title className="title-card-detail">{item.title.toUpperCase()}</Card.Title>
          <Card.Text className="text-card-detail">{item.price}</Card.Text>
          <Card.Text className={`category-card-detail ${item.category === "Vegetariano" ? "vegetarian-card-list" : "vegan-card-list"}`}>
            {item.category}
          </Card.Text>    
          <ItemCount stock={item.stock} initial={1} onAdd={(count) => alert("Agregado: " + count)} />
        </Card.Body>
      </div>
      <div>
        <Card.Subtitle className="subtitle-card-detail">INGREDIENTES</Card.Subtitle>
        <ul className="info-card-detail">
          {item.detail.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
        </ul>
      </div>
    </Card>
  )
}