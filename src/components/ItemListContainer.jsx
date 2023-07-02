import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import MoonLoader from "react-spinners/MoonLoader"
import { data } from "../data/products.js"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const title = id === "vegano" ? "VEGANO" : id === "vegetariano" ? "VEGETARIANO" : "MENÚ"

  useEffect(() => {
    setLoading(true)

    const promise = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

    promise.then(result => {
      if (id) {
        setItems(result.filter(item => item.category.toLowerCase() === id))
      } else {
        setItems(result)
      }
      setLoading(false)
    })
  }, [id])

  return (
    <Container className="app-content">
      <h1 className="title-category">{title}</h1>
      <div className="loader-container">
        {loading ? <MoonLoader color="#008040" /> : <ItemList items={items} />}
      </div>
    </Container>
  )
}