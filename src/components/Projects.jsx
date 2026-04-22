import './Projects.css';

const projects = [
    {
        title: 'TCG Store (E-Commerce)',
        description: 'E-commerce completo para cartas coleccionables y productos sellados de múltiples juegos TCG (Pokemon, Yu-Gi-Oh!, Magic, Digimon, One Piece, Dragon Ball, Lorcana). Incluye catálogo interactivo con filtros, carrito persistente, wishlist por usuario, pasarela de pagos Stripe/PayPal, autenticación con email y Google OAuth, panel de administración con gestión de inventario, pedidos y CMS dinámico.',
        tags: ['React 19', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Stripe', 'Firebase'],
        emoji: '🃏',
        demo: 'https://tcg-frontend-one.vercel.app/',
        code: '#',
        featured: true,
    },
    {
        title: 'Patita Oriental (E-Commerce)',
        description: 'Aplicación e-commerce desarrollada en equipo. Cuenta con catálogo interactivo y filtros dinámicos, carrito de compras con persistencia, e integración con API REST.',
        tags: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'Spring Boot', 'MySQL', 'Java'],
        emoji: '🐾',
        demo: 'https://patitaorientalgdl.netlify.app/',
        code: 'https://github.com/gapman20/PatitaOrientalWeb',
    },
        {
        title: 'Seaconay',
        description: 'Sitio web corporativo para cliente real. Desarrollo a la medida con diseño responsivo, optimizado para SEO y una excelente experiencia de usuario.',
        tags: ['Web Development', 'React', 'CSS3'],
        emoji: '🏢',
        demo: 'https://seaconay.mx/',
        code: '#',
    },
    {
        title: 'Proyectos Capri',
        description: 'Plataforma web corporativa para cliente real. Diseño moderno para destacar servicios y proyectos con interfaz atractiva y responsive.',
        tags: ['Web', 'Responsive', 'UI/UX'],
        emoji: '🏗️',
        demo: 'https://proyectoscapri.com/',
        code: '#',
    },
    {
        title: 'Contempo Impact',
        description: 'Página web profesional para cliente real. Diseño limpio y moderno enfocado en impacto y presencia digital.',
        tags: ['Desarrollo Web', 'Corporativo'],
        emoji: '✨',
        demo: 'https://contempoimpact.mx/',
        code: '#',
    },
    {
        title: 'Rhipsalis',
        description: 'Sitio web para cliente real. Presentación de servicios con diseño enfocado en conversión y UX.',
        tags: ['Web', 'Diseño', 'Frontend'],
        emoji: '🌿',
        demo: 'https://rhipsalis.mx/',
        code: '#',
    },
    {
        title: 'Sviluppo',
        description: 'Plataforma web para cliente real. Desarrollo a la medida con diseño escalable, rápido y buenas prácticas de SEO.',
        tags: ['Desarrollo Web', 'SEO', 'Performance'],
        emoji: '🚀',
        demo: 'https://sviluppo.mx/',
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
