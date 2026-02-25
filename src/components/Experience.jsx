import './Experience.css';

const experiences = [
    {
        date: '2023 — Presente',
        title: 'Desarrollador Full Stack Senior',
        company: 'Tech Solutions Inc.',
        description: 'Lidero el desarrollo de aplicaciones web empresariales con React, Node.js y AWS. Implemento arquitecturas escalables y mentoreo a developers junior del equipo.',
        chips: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    },
    {
        date: '2021 — 2023',
        title: 'Desarrollador Frontend',
        company: 'Digital Agency Pro',
        description: 'Construí interfaces responsive y accesibles para clientes de distintos sectores. Colaboré de cerca con diseñadores UX/UI para traducir mockups en código production-ready.',
        chips: ['React', 'TypeScript', 'Tailwind', 'Figma'],
    },
    {
        date: '2020 — 2021',
        title: 'Desarrollador Web Junior',
        company: 'StartUp Innovators',
        description: 'Donde todo empezó. Desarrollé mis primeras webs en producción, aprendí las bases del código limpio e integré mis primeras APIs REST.',
        chips: ['HTML', 'CSS', 'JavaScript', 'APIs REST'],
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
                            Cada empresa me enseñó algo distinto. De startups a agencias,
                            el denominador común siempre fue el mismo: escribir código que
                            resuelve problemas reales.
                        </p>
                        <button className="btn-ghost" onClick={() => window.open('/cv.pdf')}>
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
