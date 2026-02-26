import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'experiencia'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.4 }
        );
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const navItems = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'sobre-mi', label: 'Sobre Mí' },
        { id: 'habilidades', label: 'Habilidades' },
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'experiencia', label: 'Experiencia' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <a href="#" className="logo">
                        <span className="logo-bracket">{'<'}</span>
                        <span className="logo-name">Dev</span>
                        <span className="logo-bracket">{'/>'}</span>
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
                        {navItems.map(item => (
                            <li key={item.id}>
                                <a
                                    onClick={() => handleScrollToSection(item.id)}
                                    className={`nav-link ${activeSection === item.id ? 'active-link' : ''}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="mailto:gabrielalvarezp20@gmail.com"
                                className="nav-link nav-cta"
                            >
                                Contáctame
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
