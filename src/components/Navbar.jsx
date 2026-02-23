import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <a href="#" className="logo">
                        Dev<span className="logo-accent">Portfolio</span>
                    </a>

                    <button
                        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><a onClick={() => handleScrollToSection('inicio')} className="nav-link">Inicio</a></li>
                        <li><a onClick={() => handleScrollToSection('sobre-mi')} className="nav-link">Sobre Mí</a></li>
                        <li><a onClick={() => handleScrollToSection('habilidades')} className="nav-link">Habilidades</a></li>
                        <li><a onClick={() => handleScrollToSection('proyectos')} className="nav-link">Proyectos</a></li>
                        <li><a onClick={() => handleScrollToSection('experiencia')} className="nav-link">Experiencia</a></li>
                        <li><a onClick={() => handleScrollToSection('contacto')} className="nav-link btn-contact">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
