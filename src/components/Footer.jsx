import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <span className="footer-logo">
                            {'<'}<span className="footer-logo-accent">Dev</span>{'/>'}
                        </span>
                        <div className="footer-divider" />
                        <span className="footer-copy">© {year} Todos los derechos reservados</span>
                    </div>
                    <div className="footer-right">
                        Hecho con <span className="footer-heart">♥</span> y mucho café
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
