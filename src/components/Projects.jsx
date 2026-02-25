import './Projects.css';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'Plataforma de comercio electrónico completa con carrito, pasarela de pagos y panel admin. Arquitectura escalable con React y Node.js.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        emoji: '🛒',
        demo: '#',
        code: '#',
        featured: true,
    },
    {
        title: 'Task Manager App',
        description: 'Gestión de tareas con tableros Kanban, colaboración en tiempo real y notificaciones push.',
        tags: ['React', 'Firebase', 'Tailwind'],
        emoji: '📋',
        demo: '#',
        code: '#',
    },
    {
        title: 'Weather Dashboard',
        description: 'Dashboard del clima con pronóstico extendido, mapas interactivos y visualización de datos.',
        tags: ['JavaScript', 'API REST', 'CSS'],
        emoji: '🌤️',
        demo: '#',
        code: '#',
    },
    {
        title: 'Portfolio CMS',
        description: 'CMS para portafolios con editor visual, SEO optimizado y generación estática de páginas.',
        tags: ['Next.js', 'Strapi', 'GraphQL'],
        emoji: '⚙️',
        demo: '#',
        code: '#',
    },
];

const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
);

const CodeIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
);

const Projects = () => {
    return (
        <section id="proyectos" className="projects">
            <div className="container">
                <div className="projects-header">
                    <div>
                        <span className="section-label">Proyectos</span>
                        <h2 className="section-title">
                            Cosas que <span className="gradient-text">he construido</span>
                        </h2>
                    </div>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="projects-view-all">
                        Ver todos en GitHub
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <article key={i} className={`project-card ${p.featured ? 'featured' : ''}`}>
                            <div className="project-info">
                                <span className="project-number">0{i + 1}</span>
                                <h3 className="project-title">{p.title}</h3>
                                <p className="project-description">{p.description}</p>
                                <div className="project-tags">
                                    {p.tags.map((tag, ti) => (
                                        <span key={ti} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-footer">
                                    <div className="project-links-row">
                                        <a href={p.demo} className="project-link-btn">
                                            <ArrowIcon /> Demo
                                        </a>
                                        <a href={p.code} className="project-link-btn">
                                            <CodeIcon /> Código
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-preview">
                                <span>{p.emoji}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
