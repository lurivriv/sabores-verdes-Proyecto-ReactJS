import { useState } from "react"
import Button from "react-bootstrap/Button"

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increment = () => stock && setCount(count + 1)
  const decrement = () => count > 1 && setCount(count - 1)
  const handleAdd = () => stock && onAdd(count)

  return (
    <div className="d-flex flex-column">
      {!stock && <h4 className="no-stock-count">No disponible actualmente :(</h4>}
      <div className="d-flex flex-row">
        <div className="count-container">
          <Button className="btn-count" onClick={decrement} disabled={!stock}>-</Button>
          <span className="count-content">{count}</span>
          <Button className="btn-count" onClick={increment} disabled={!stock}>+</Button>
        </div>
        <Button className="add-btn-count" onClick={handleAdd} disabled={!stock}>Agregar al carrito</Button>
      </div>
    </div>
  )
}