import './Experience.css';

const experiences = [
    {
        date: 'Julio 2025 — Presente',
        title: 'Desarrollador Full Stack (Frontend)',
        company: 'Think Globally',
        description: 'Lideré el desarrollo de una nueva aplicación web utilizando React, creando interfaces dinámicas y optimizando la UX. Realicé mantenimiento en sistemas PHP e integré servicios entre frontend y backend.',
        chips: ['React', 'PHP', 'Frontend', 'Backend'],
    },
    {
        date: 'Septiembre 2022 — Agosto 2024',
        title: 'Técnico en mantenimiento',
        company: 'Dayton Solutions',
        description: 'Lideré mantenimiento preventivo y correctivo de equipos de impresión (reduciendo un 30% tiempos inactivos). Capacité compañeros e integré soluciones de monitoreo remoto.',
        chips: ['Mantenimiento', 'Liderazgo', 'Capacitación'],
    },
    {
        date: 'Abril 2025 — Julio 2025',
        title: 'Java FullStack JR',
        company: 'Generation México',
        description: 'Bootcamp intensivo donde desarrollé aplicaciones web completas. Proyecto final "Patita Oriental": e-commerce con catálogo, carrito y API REST usando Scrum.',
        chips: ['Java', 'Spring Boot', 'React', 'Scrum'],
    },
    {
        date: 'Septiembre 2017 — Junio 2022',
        title: 'Ingeniería Electrónica',
        company: 'Tecnológico de Ciudad Madero',
        description: 'Formación universitaria en electrónica, control y programación, forjando bases sólidas en resolución de problemas analíticos.',
        chips: ['Ingeniería', 'Electrónica', 'C++', 'Python'],
    },
];

const Experience = () => {
    return (
        <section id="experiencia" className="experience">
            <div className="container">
                <div className="experience-layout">
                    {/* Sidebar */}
                    <div className="experience-sidebar">
                        <span className="section-label">Trayectoria</span>
                        <h2 className="section-title">
                            Mi camino<br />
                            <span className="gradient-text">profesional</span>
                        </h2>
                        <p>
                            Mi trayectoria combina una base sólida en ingeniería y mantenimiento técnico
                            con una pasión por el desarrollo de software. Cada experiencia me ha enseñado
                            a resolver problemas reales de forma eficiente.
                        </p>
                        <button className="btn-ghost" onClick={() => window.open('/GabrielAlvarez_CV.pdf')}>
                            Descargar CV completo
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                        </button>
                    </div>

                    {/* Timeline */}
                    <div className="timeline">
                        {experiences.map((exp, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-track">
                                    <div className="timeline-dot" />
                                    <div className="timeline-line" />
                                </div>
                                <div className="timeline-body">
                                    <span className="timeline-date">{exp.date}</span>
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <div className="timeline-company">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        </svg>
                                        {exp.company}
                                    </div>
                                    <p className="timeline-description">{exp.description}</p>
                                    <div className="timeline-chips">
                                        {exp.chips.map((c, ci) => (
                                            <span key={ci} className="timeline-chip">{c}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
