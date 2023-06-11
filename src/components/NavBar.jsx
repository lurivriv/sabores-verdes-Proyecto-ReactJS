import Logo from "../assets/logo-saboresverdes.svg"
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <header className="container-fluid px-md-5 px-3">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="../../public/index.html">
                    <img src={Logo} alt="Logo de sabores verdes" />
                </a>
                <CartWidget />
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-link-container"><a className="nav-link" href="../../public/index.html">Inicio</a></li>
                        <li className="dropdown nav-link-container">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Croquetas</a></li>
                                <li><a className="dropdown-item" href="#">Empanadas</a></li>
                                <li><a className="dropdown-item" href="#">Hamburguesas</a></li>
                                <li><a className="dropdown-item" href="#">Milanesas</a></li>
                                <li><a className="dropdown-item" href="#">Papas fritas</a></li>
                                <li><a className="dropdown-item" href="#">Pizzas</a></li>
                                <li><a className="dropdown-item" href="#">Sandwiches</a></li>
                                <li><a className="dropdown-item" href="#">Tortillas</a></li>
                            </ul>
                        </li>
                        <li className="nav-link-container"><a className="nav-link" href="#">Vegano</a></li>
                        <li className="nav-link-container"><a className="nav-link" href="#">Vegetariano</a></li>
                        <li className="nav-link-container"><a className="nav-link" href="#">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}