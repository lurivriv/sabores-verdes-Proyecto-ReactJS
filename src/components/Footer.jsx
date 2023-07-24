import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import logo from "../assets/logo-saboresverdes.svg"
import iconWhatsapp from "../assets/icon-whatsapp.png"
import iconInstagram from "../assets/icon-instagram.png"

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="row">
                    <div className="col-md-4 col-12 pt-lg-4 pt-4 pb-lg-0 pb-2 text-center text-md-start">
                        <Link className="logo-footer-container" to="/"><img className="logo-footer mt-md-2" src={logo} alt="Logo de sabores verdes" /></Link>
                        <p className="text-footer pt-lg-2 pt-1">Nos esforzamos por ofrecerte lo mejor en comida casera <b>basada en plantas</b>. Creemos en el poder de la alimentación consciente y nos comprometemos a brindarte opciones deliciosas que también sean amigables con el medio ambiente y los animales.</p>
                        <p className="text-footer py-0"><b>¡Gracias por elegirnos!</b></p>
                    </div>
                    <div className="col-md-4 col-12 px-md-5 pt-lg-4 pb-lg-0 pb-2 text-center text-md-start">
                        <h4 className="titles-footer">Horarios</h4>
                        <p className="text-footer pt-lg-2 pt-1">Trabajamos de <b>martes a sábados</b>, de <b>11 a 00</b> horas.</p>
                    </div>
                    <div className="col-md-4 col-12 px-md-5 pt-lg-4 pb-2 text-center text-md-start">
                        <h4 className="titles-footer">Contacto</h4>
                        <ul className="text-footer pt-lg-2 pt-1">
                            <li className="my-1 social-media-footer"><Link to="https://www.whatsapp.com/?lang=es" target="_blank"><img className="icon-social-media-footer" src={iconWhatsapp} alt="Whatsapp" />+598 111 111 111</Link></li>
                            <li className="mt-3 social-media-footer"><Link to="https://www.instagram.com/" target="_blank"><img className="icon-social-media-footer" src={iconInstagram} alt="Instagram" />@saboresverdes.uy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="copyright-footer">© Todos los derechos reservados - 2023</p>
                </div>
            </Container>
        </footer>
    )
}