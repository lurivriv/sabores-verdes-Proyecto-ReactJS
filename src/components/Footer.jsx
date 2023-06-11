import Logo from "../assets/logo-saboresverdes.svg"
import IconWhatsapp from "../assets/icon-whatsapp.png"
import IconInstagram from "../assets/icon-instagram.png"

export const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-12 px-md-5 px-3 pt-lg-4 pt-4 pb-lg-0 pb-2">
                    <a className="logo-footer-container" href="../../public/index.html"><img className="logo-footer mt-md-2" src={Logo} alt="Logo de sabores verdes" /></a>
                    <p className="text-footer pt-lg-2 pt-1">Nos esforzamos por ofrecerte lo mejor en comida casera <b>basada en plantas</b>. Creemos en el poder de la alimentación consciente y nos comprometemos a brindarte opciones deliciosas que también sean amigables con el medio ambiente y los animales.</p>
                    <p className="text-footer py-0"><b>¡Gracias por elegirnos!</b></p>
                </div>
                <div className="col-md-4 col-12 px-md-5 px-3 pt-lg-4 pb-lg-0 pb-2">
                    <h4 className="titles-footer">Horarios</h4>
                    <p className="text-footer pt-lg-2 pt-1">Trabajamos de <b>martes a sábados</b>, de <b>11 a 00</b> horas.</p>
                </div>
                <div className="col-md-4 col-12 px-md-5 px-3 pt-lg-4 pb-2">
                    <h4 className="titles-footer"><a href="#">Contacto</a></h4>
                    <ul className="text-footer pt-lg-2 pt-1">
                        <li className="my-1 social-media-footer"><a href="#"><img className="icon-social-media-footer" src={IconWhatsapp} alt="Whatsapp" />+598 111 111 111</a></li>
                        <li className="mt-3 social-media-footer"><a href="#"><img className="icon-social-media-footer" src={IconInstagram} alt="Instagram" />@saboresverdes.uy</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="copyright-footer">© Todos los derechos reservados - 2023</p>
            </div>
        </footer>
    )
}