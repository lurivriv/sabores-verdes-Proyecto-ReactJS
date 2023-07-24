import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { ItemDetail } from "./ItemDetail"
import MoonLoader from "react-spinners/MoonLoader"
import Swal from "sweetalert2"

export const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if(id) {
      const db = getFirestore()
      const itemDoc = doc(db, "items", id)

      setLoading(true)
      setError(false)

      getDoc(itemDoc)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setItemDetail({ id: snapshot.id, ...snapshot.data() })
          } else {
            setError(true)
          }
        })
        .catch((error) => {
          setError(true)
          Swal.fire({
            title: "¡Lo sentimos!",
            html: "Ocurrió un error al cargar el menú, intentalo de nuevo más tarde.",
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
    }
  }, [id])

  return (
    <Container className="app-content loader-container">
      {loading ? (
        <MoonLoader color="#008040" />
      ) : itemDetail ? (
        <ItemDetail itemDetail={itemDetail} /> 
      ) : error ? (
        <h1 className="title-category">No se pudo cargar el producto :(</h1> 
      ) : null}
    </Container>
  )
}