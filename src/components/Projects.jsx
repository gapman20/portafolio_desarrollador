import './Projects.css';

const projects = [
    {
        title: 'Patita Oriental (E-Commerce)',
        description: 'Aplicación e-commerce desarrollada en equipo. Cuenta con catálogo interactivo y filtros dinámicos, carrito de compras con persistencia, e integración con API REST.',
        tags: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'Spring Boot', 'MySQL', 'Java'],
        emoji: '🐾',
        demo: 'https://patitaorientalgdl.netlify.app/',
        code: 'https://github.com/gapman20/PatitaOrientalWeb',
        featured: true,
    },
    {
        title: 'Seaconay',
        description: 'Sitio web corporativo desarrollado a la medida. Diseño responsivo y optimizado para una excelente experiencia de usuario.',
        tags: ['Web Development', 'React', 'CSS3'],
        emoji: '🏢',
        demo: 'https://seaconay.mx/',
        code: '#',
    },
    {
        title: 'Proyectos Capri',
        description: 'Desarrollo de plataforma web corporativa, destacando servicios y proyectos mediante una interfaz moderna y atractiva.',
        tags: ['Web', 'Responsive', 'UI/UX'],
        emoji: '🏗️',
        demo: 'https://proyectoscapri.com/',
        code: '#',
    },
    {
        title: 'Contempo Impact',
        description: 'Página web profesional enfocada en el impacto y presencia digital, con un diseño limpio y moderno.',
        tags: ['Desarrollo Web', 'Corporativo'],
        emoji: '✨',
        demo: 'https://contempoimpact.mx/',
        code: '#',
    },
    {
        title: 'Rhipsalis',
        description: 'Sitio web desarrollado para la marca, presentando sus servicios con un diseño enfocado en la conversión.',
        tags: ['Web', 'Diseño', 'Frontend'],
        emoji: '🌿',
        demo: 'https://rhipsalis.mx/',
        code: '#',
    },
    {
        title: 'Sviluppo',
        description: 'Plataforma web desarrollada a la medida, asegurando un diseño escalable, rápido y con buenas prácticas de SEO.',
        tags: ['Desarrollo Web', 'SEO', 'Performance'],
        emoji: '🚀',
        demo: 'https://sviluppo.mx/',
        code: '#',
    },
    {
        title: 'Pagina con panel de administrador — Sitio Web CMS',
        description: 'Página web profesional para empresa con panel de administrador completo. Permite gestionar textos, imágenes, catálogo de productos, blog con editor Markdown, colores y tema en tiempo real, menú de navegación, SEO, WhatsApp flotante, redes sociales e inbox de mensajes, todo sin tocar código. Autenticación y persistencia con Firebase.',
        tags: ['React', 'Vite', 'Firebase', 'Firestore', 'CSS3'],
        emoji: '⚡',
        demo: 'https://clever-cannoli-a6c76f.netlify.app/',
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
                                        <a href={p.demo} className="project-link-btn" target="_blank"
                                            rel="noopener noreferrer">
                                            <ArrowIcon /> Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-preview" style={p.demo !== '#' ? { padding: 0, display: 'block', overflow: 'hidden' } : {}}>
                                {p.demo !== '#' ? (
                                    <iframe
                                        src={p.demo}
                                        title={p.title}
                                        style={{ width: '100%', height: '100%', border: 'none' }}
                                        sandbox="allow-scripts allow-same-origin"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span>{p.emoji}</span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
