import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const ROLES = [
    'Desarrollador Full Stack',
    'Ingeniero Frontend',
    'Arquitecto de Soluciones',
    'Apasionado del Código'
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = ROLES[roleIndex];
        let timeout;

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2200);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, roleIndex]);

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="hero">
            {/* Ambient Orbs */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />
            {/* Grid */}
            <div className="hero-grid" />

            <div className="container hero-inner">
                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <span className="hero-eyebrow-dot" />
                        Disponible para proyectos
                    </div>

                    <h1 className="hero-name">
                        Hola, soy<br />
                        <span className="gradient-text">Tu Nombre</span>
                    </h1>

                    <div className="hero-role-wrapper">
                        <span className="hero-role">{displayed}</span>
                        <span className="hero-cursor" />
                    </div>

                    <p className="hero-description">
                        Construyo productos digitales que combinan código limpio con experiencias
                        de usuario excepcionales. Me obsesiona el detalle y me apasiona resolver
                        problemas complejos con soluciones elegantes.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => handleScroll('proyectos')}>
                            Ver mis proyectos
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="btn-ghost" onClick={() => handleScroll('sobre-mi')}>
                            Sobre mí
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Años de exp.</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Proyectos</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Clientes</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Socials */}
            <div className="hero-socials">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a href="mailto:tucorreo@email.com" className="social-link" aria-label="Email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </a>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-line" />
                <span>scroll</span>
            </div>
        </section>
    );
};

export default Hero;
