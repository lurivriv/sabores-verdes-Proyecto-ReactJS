import { useContext, useState, useEffect } from "react"
import { useNavigate }  from "react-router-dom"
import { Container, Form, Button } from "react-bootstrap"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import MoonLoader from "react-spinners/MoonLoader"
import Swal from "sweetalert2"

export const Checkout = () => {
    const { cartList, clearCart, totalPrice } = useContext(CartContext)
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
        emailRepeat: "",
        address: "",
        payment: "default",
        comments: "",
    })
    const [formComplete, setFormComplete] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const checkFormComplete = () => {
            const { name, phone, email, emailRepeat, address, payment } = formValues
            const isComplete = name.trim() !== "" &&
                               phone.trim() !== "" &&
                               email.trim() !== "" &&
                               emailRepeat.trim() !== "" &&
                               address.trim() !== "" &&
                               payment !== "default"
            setFormComplete(isComplete)
        }
        checkFormComplete()
    }, [formValues])

    const handleBackToCart = () => navigate("/cart")

    const validateForm = () => {
        if (formValues.email !== formValues.emailRepeat) {
            Swal.fire({
                icon: "error",
                title: "Error en email",
                html: "El email ingresado debe coincidir en ambos campos.",
                confirmButtonText: "Entendido",
                background: "#000000",
                color: "#ffffff",
                confirmButtonColor: "#008040",
            })
            return false
        }
        return true
    }

    const handleChange = (e) => {
        setFormValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    const sendOrder = (e) => {
        e.preventDefault()
        const isFormValid = validateForm()
        
        if (isFormValid) {
            setLoading(true)
            const total = totalPrice()

            const order = {
                buyer: { ...formValues },
                items: cartList,
                total: total,
                date: serverTimestamp(),
                status: "generada"
            }
    
            if (formValues.email === formValues.emailRepeat) {
                delete order.buyer.emailRepeat
            }

            const db = getFirestore()
            const orderCollection = collection(db, "orders")

            addDoc(orderCollection, order)
                .then((response) => {
                    setLoading(false)
                    if (response.id) {
                        clearCart()
                        setFormValues({
                            name: "",
                            phone: "",
                            email: "",
                            emailRepeat: "",
                            address: "",
                            payment: "",
                            comments: ""
                        })
                        Swal.fire({
                            icon: "success",
                            title: "¡Pedido enviado!",
                            html: "Tu orden está en proceso :) <br><br>Id: " + response.id + "<br><br>Total: $" + total,
                            confirmButtonText: "Aceptar",
                            background: "#ffffff",
                            color: "#000000",
                            confirmButtonColor: "#008040",
                        }).then(() => {
                            navigate("/cart")
                        })
                    }
                })
                .catch((error) => {
                    setLoading(false)
                    Swal.fire({
                        icon: "error",
                        title: "¡Lo sentimos!",
                        html: "Ocurrió un error al enviar el pedido, intentalo de nuevo más tarde.",
                        confirmButtonText: "Entendido",
                        background: "#000000",
                        color: "#ffffff",
                        confirmButtonColor: "#008040",
                        timer: 3000,
                    }).then(() => {
                        navigate("/cart")
                    })
                    console.error(error)
                })
        }
    }

    return (
        <Container className="app-content">
            <h1 className="title-category">TU PEDIDO</h1>
            <div className="loader-container">
                {loading ? (
                    <MoonLoader color="#008040" />
                ) : 
                    <Form className="row" onSubmit={sendOrder}>
                        <div className="col-12 col-md-6 px-4">
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Nombre y apellido</Form.Label>
                                <Form.Control onChange={handleChange} value={formValues.name} type="text" name="name" placeholder="Nombre Apellido" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Label>Número de celular</Form.Label>
                                <Form.Control onChange={handleChange} value={formValues.phone} type="tel" name="phone" placeholder="123456789" pattern="[0-9]{9}" maxLength="9" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={handleChange} value={formValues.email} type="email" name="email" placeholder="nombre@example.com" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmailRepeat">
                                <Form.Label>Repetir email</Form.Label>
                                <Form.Control onChange={handleChange} value={formValues.emailRepeat} type="email" name="emailRepeat" placeholder="nombre@example.com" />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-6 px-4">
                            <Form.Group controlId="formGroupAddress">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control onChange={handleChange} value={formValues.address} type="text" name="address" placeholder="Dirección 123" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPayment">
                                <Form.Label>Método de pago</Form.Label>
                                <Form.Select onChange={handleChange} value={formValues.payment} name="payment">
                                    <option value="default" disabled>Seleccioná una opción</option>
                                    <option value="efectivo">Efectivo</option>
                                    <option value="tarjeta">Tarjeta</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGroupComments">
                                <Form.Label>Comentarios</Form.Label>
                                <Form.Control className="text-area" onChange={handleChange} value={formValues.comments} as="textarea" name="comments" placeholder="¿Algo que nos quieras comentar?" />
                            </Form.Group>
                        </div>
                        <div className="btn-form-container row px-4 m-auto">
                            <Button className="btn-back-cart col-4" type="button" onClick={handleBackToCart}>Volver al carrito</Button>
                            <h5 className="total-price-cart text-center col-4">TOTAL: ${totalPrice()}</h5>    
                            <Button className="btn-finalize-order col-4" type="submit" disabled={!formComplete}>Finalizar pedido</Button>  
                        </div>
                    </Form>
                }
            </div>
        </Container>
    )
}