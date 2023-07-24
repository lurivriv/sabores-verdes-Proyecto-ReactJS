import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
import { ItemList } from "./ItemList"
import MoonLoader from "react-spinners/MoonLoader"
import Swal from "sweetalert2"

export const ItemListContainer = () => {
  const [itemList, setItemList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { categoryId } = useParams()

  const title = (categoryId && categoryId.toUpperCase()) ?? "MENÚ"

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "items")
    const q = categoryId ? query(itemsCollection, where("categoryId", "==", categoryId)) : itemsCollection
    
    setLoading(true)
    setError(false)
    
    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          setError(true)
        } else {
            setItemList(snapshot.docs
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
              .sort((a, b) => a.title.localeCompare(b.title))
            )
          }
      })
      .catch((error) => {
        setError(true)
        Swal.fire({
          title: "¡Lo sentimos!",
          text: "Ocurrió un error al cargar el menú, intentalo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "Entendido",
          background: "#000000",
          color: "#ffffff",
          confirmButtonColor: "#008040",
          timer: 3000,
        })
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (
    <Container className="app-content">
      <h1 className="title-category">{title}</h1>
      <div className="loader-container">
        {loading ? (
          <MoonLoader color="#008040" />
        ) : itemList.length ? (
          <ItemList itemList={itemList} />
        ) : error ? (
          <h2 className="title-category">No se pudo cargar el menú :(</h2>
        ) : null}
      </div>
    </Container>
  )
}