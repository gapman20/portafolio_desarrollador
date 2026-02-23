import './Hero.css';

const Hero = () => {
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="hero">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-greeting">Hola, soy</p>
                    <h1 className="hero-title">
                        <span className="gradient-text">Desarrollador Web</span>
                    </h1>
                    <p className="hero-subtitle">Creando experiencias digitales modernas y funcionales</p>
                    <p className="hero-description">
                        Especializado en desarrollo frontend y backend, transformando ideas en soluciones web innovadoras.
                    </p>
                    <div className="hero-buttons">
                        <a onClick={() => handleScrollToSection('proyectos')} className="btn btn-primary">Ver Proyectos</a>
                        <a onClick={() => handleScrollToSection('contacto')} className="btn btn-secondary">Contáctame</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Años de Experiencia</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Proyectos Completados</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Clientes Satisfechos</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-background"></div>
        </section>
    );
};

export default Hero;
