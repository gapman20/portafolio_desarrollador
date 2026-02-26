import { useEffect, useRef } from 'react';
import './About.css';

const traits = [
    { emoji: '🧠', text: 'Resolución de problemas' },
    { emoji: '🤝', text: 'Trabajo en equipo' },
    { emoji: '🗣️', text: 'Comunicación asertiva' },
    { emoji: '📈', text: 'Rápida adaptación' },
    { emoji: '🔄', text: 'Metodologías ágiles' },
    { emoji: '💡', text: 'Mentoring' },
];

const About = () => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.15 }
        );
        ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="sobre-mi" className="about" ref={ref}>
            <div className="container">
                <div className="about-layout">
                    {/* Visual */}
                    <div className="about-visual reveal">
                        <div className="about-avatar">
                            <div className="avatar-frame">
                                <span className="avatar-placeholder">👨‍💻</span>
                            </div>

                            <div className="about-floating-card card-top-right">
                                <span className="card-icon">✅</span>
                                <div className="card-text">
                                    <strong>Disponible</strong>
                                    <span>Para proyectos</span>
                                </div>
                            </div>

                            <div className="about-floating-card card-bottom-left">
                                <span className="card-icon">🔥</span>
                                <div className="card-text">
                                    <strong>2+ años</strong>
                                    <span>de experiencia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="about-text">
                        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                            <span className="section-label">Sobre mí</span>
                            <h2 className="section-title">
                                Un desarrollador que<br />
                                <span className="gradient-text">disfruta construir</span>
                            </h2>
                        </div>

                        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                            <p className="about-intro">
                                Soy Desarrollador Full Stack Junior e Ingeniero Electrónico orientado a resultados.
                            </p>
                            <p>
                                Mi experiencia abarca desde el mantenimiento técnico de hardware hasta el desarrollo
                                de aplicaciones web robustas. Disfruto construyendo sistemas eficientes con Java, Spring Boot y React.
                            </p>
                            <p>
                                Me enorgullece mi capacidad para adaptarme rápidamente a nuevos entornos técnicos, colaborar
                                en equipo y encontrar soluciones elegantes a problemas complejos.
                            </p>
                        </div>

                        <div className="about-pills reveal" style={{ transitionDelay: '0.3s' }}>
                            {traits.map((t, i) => (
                                <span key={i} className="pill">
                                    <span className="pill-dot" />
                                    {t.emoji} {t.text}
                                </span>
                            ))}
                        </div>

                        <div className="about-cta-row reveal" style={{ transitionDelay: '0.4s' }}>
                            <button className="btn-primary" onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}>
                                Ver proyectos
                            </button>
                            <a href="/GabrielAlvarez_CV.pdf" className="btn-ghost" download="GabrielAlvarez_CV.pdf">
                                Descargar CV
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
