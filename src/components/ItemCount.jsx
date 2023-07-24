import { useState } from "react"
import { Button } from "react-bootstrap"

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increment = () => count < stock && setCount(count + 1)
  const decrement = () => count > initial && setCount(count - 1)
  const handleAdd = () => stock && (onAdd(count), setCount(initial))

  return (
    <div className="d-flex flex-column">
      {stock === 0 && <h4 className="no-stock-count">No disponible actualmente :(</h4>}
      <div className="d-flex flex-row">
        <div className="count-container">
          <Button className="btn-count" onClick={decrement} disabled={stock === 0}>-</Button>
          <span className="count-content">{count}</span>
          <Button className="btn-count" onClick={increment} disabled={stock === 0}>+</Button>
        </div>
        <Button className="add-btn-count" onClick={handleAdd} disabled={stock === 0}>Agregar al carrito</Button>
      </div>
    </div>
  )
}