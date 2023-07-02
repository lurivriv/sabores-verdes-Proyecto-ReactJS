import { Link, NavLink } from "react-router-dom"
import { Container, Nav, Navbar} from "react-bootstrap"
import { CartWidget } from "./CartWidget"
import { data } from "../data/products.js"
import logo from "../assets/logo-saboresverdes.svg"

const categories = [...new Set(data.map(product => product.category.toLowerCase()))]

export const NavBar = () => {
    return (
        <Navbar className="container-fluid" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo de sabores verdes" />
                </Link>
                <CartWidget />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-auto">
                        <NavLink className="nav-link" to={"/"}>MENÚ</NavLink>
                        {categories.map(item => (
                            <NavLink className="nav-link" key={item} to={`/category/${item}`}>{item.toUpperCase()}</NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}