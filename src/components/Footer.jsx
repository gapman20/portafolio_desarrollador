import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {currentYear} DevPortfolio. Todos los derechos reservados.</p>
                    <p className="footer-tagline">Diseñado y desarrollado con ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
