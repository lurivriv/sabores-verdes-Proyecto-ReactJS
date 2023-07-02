import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import MoonLoader from "react-spinners/MoonLoader"
import { data } from "../data/products.js"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    const promise = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

    promise.then (result => {
      setItem(result[0])
    })
  }, [])

  return (
    <Container className="app-content">
      <div className="loader-container" >
        {item.length === 0 ? <MoonLoader color="#008040"/> : <ItemDetail item={item} />}
      </div>
    </Container>
  )
}